export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

/* ================================
   FETCH POST
================================ */

async function fetchPost(slug: string) {
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      { slug }
    );
    return post;
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
  const post = await fetchPost(params.slug);

  if (!post) {
    return {
      title: "Blog | ViralNest",
    };
  }

  let description = "Read this article on ViralNest.";

  if (Array.isArray(post.body) && post.body.length > 0) {
    const firstBlock = post.body[0];
    if (Array.isArray(firstBlock.children) && firstBlock.children.length > 0) {
      description =
        firstBlock.children[0]?.text?.slice(0, 155) ||
        description;
    }
  }

  return {
    title: `${post.title} | ViralNest`,
    description,
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
  const post = await fetchPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <h1>Post not found</h1>
      </div>
    );
  }

  /* ===== READING TIME ===== */

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

  return (
    <div className="bg-black text-white min-h-screen">

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