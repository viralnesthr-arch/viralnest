export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* ================================
   FETCH POST
================================ */

async function fetchPost(slug: string) {
  if (!slug) return null;

  return await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      body,
      mainImage{
        asset->{
          url
        }
      }
    }
    `,
    { slug }
  );
}

/* ================================
   METADATA (ADVANCED SEO)
================================ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: "Blog | ViralNest",
      description: "Explore digital marketing insights on ViralNest.",
    };
  }

  const description =
    post?.body?.[0]?.children?.[0]?.text?.slice(0, 155) ||
    "Read this article on ViralNest.";

  const imageUrl = post?.mainImage?.asset?.url;

  return {
    title: `${post.title} | ViralNest`,
    description,
    alternates: {
      canonical: `https://viral-nest-website-structure.vercel.app/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `https://viral-nest-website-structure.vercel.app/blog/${post.slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

/* ================================
   BLOG DETAIL PAGE
================================ */

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  /* ================================
     READING TIME
  ================================= */

  const text =
    post?.body
      ?.map((block: any) =>
        block.children?.map((child: any) => child?.text || "").join(" ")
      )
      .join(" ") || "";

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  const imageUrl = post?.mainImage?.asset?.url;

  /* ================================
     STRUCTURED DATA (SEO BOOST)
  ================================= */

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: "ViralNest Media",
    },
  };

  /* ================================
     UI
  ================================= */

  return (
    <div className="bg-black text-white min-h-screen">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative py-28 px-6 text-center bg-gradient-to-b from-purple-900/30 to-black">
        <div className="max-w-3xl mx-auto">

          <Link
            href="/blog"
            className="text-purple-400 hover:text-purple-300 text-sm mb-10 inline-block"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>

          <div className="flex justify-center gap-6 text-gray-400 text-sm">
            {post?.publishedAt && (
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

      {/* FEATURED IMAGE */}
      {imageUrl && (
        <div className="max-w-5xl mx-auto px-6 -mt-14">
          <div className="relative w-full h-[500px]">
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="rounded-3xl shadow-2xl border border-purple-800 object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <section className="py-24 px-6">
        <div
          className="
            prose prose-invert prose-lg
            max-w-3xl mx-auto
            prose-headings:text-purple-400
            prose-a:text-purple-500
            prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-blockquote:border-purple-500
            prose-blockquote:text-gray-300
            prose-li:marker:text-purple-500
          "
        >
          <PortableText value={post.body} />
        </div>
      </section>

    </div>
  );
}