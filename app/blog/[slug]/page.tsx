export const revalidate = 60;

import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

/* ================================
   SAFE FETCH FUNCTION
================================ */

async function fetchPost(slug: string) {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        publishedAt,
        body,
        mainImage{
          asset->{url}
        },
        author->{name}
      }`,
      { slug }
    );
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return null;
  }
}

/* ================================
   METADATA
================================ */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!params?.slug) return {};

  const post = await fetchPost(params.slug);

  if (!post || !post.title) return {};

  let description = "Read this article on ViralNest.";

  if (Array.isArray(post.body) && post.body.length > 0) {
    const firstBlock = post.body[0];
    if (Array.isArray(firstBlock.children) && firstBlock.children.length > 0) {
      description =
        firstBlock.children[0]?.text?.slice(0, 155) ||
        description;
    }
  }

  const url = `https://viralnest.co.in/blog/${params.slug}`;

  return {
    title: `${post.title} | ViralNest`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      images: post.mainImage?.asset?.url
        ? [
            {
              url: post.mainImage.asset.url,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.mainImage?.asset?.url
        ? [post.mainImage.asset.url]
        : [],
    },
  };
}

/* ================================
   BLOG PAGE
================================ */

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params?.slug) return notFound();

  const post = await fetchPost(params.slug);

  if (!post || !post.title) return notFound();

  /* ===== SAFE READING TIME ===== */

  let text = "";

  if (Array.isArray(post.body)) {
    text = post.body
      .map((block: any) => {
        if (!Array.isArray(block.children)) return "";
        return block.children
          .map((child: any) => child?.text || "")
          .join(" ");
      })
      .join(" ");
  }

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  const articleUrl = `https://viralnest.co.in/blog/${params.slug}`;

  return (
    <div className="bg-black text-white min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author?.name || "ViralNest",
            },
            image: post.mainImage?.asset?.url || "",
            mainEntityOfPage: articleUrl,
          }),
        }}
      />

      {/* HERO */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            {post.author?.name && <span>By {post.author.name}</span>}

            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}

            <span>{readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      {post.mainImage?.asset?.url && (
        <div className="max-w-5xl mx-auto px-6 -mt-10">
          <div className="relative w-full h-[450px]">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="rounded-2xl shadow-2xl border border-purple-800 object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div
          className="prose prose-invert prose-lg max-w-3xl mx-auto
                     prose-headings:text-purple-400
                     prose-a:text-purple-500
                     prose-strong:text-white
                     prose-blockquote:border-purple-500"
        >
          {Array.isArray(post.body) && (
            <PortableText value={post.body} />
          )}
        </div>
      </section>
    </div>
  );
}