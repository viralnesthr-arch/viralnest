export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- YOUR fetchPost FUNCTION IS UNTOUCHED ---
async function fetchPost(slug: string) {
  if (!slug) return null;
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ _id, title, "slug": slug.current, publishedAt, body, mainImage{ asset->{url} }}`, { slug }
  );
}
// --- END OF UNTOUCHED FUNCTION ---

// --- YOUR generateMetadata FUNCTION IS UNTOUCHED ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) {
    return {
      title: "Blog | ViralNest",
      description: "Explore digital marketing insights on ViralNest.",
    };
  }
  const description = post?.body?.[0]?.children?.[0]?.text?.slice(0, 155) || "Read this article on ViralNest.";
  const imageUrl = post?.mainImage?.asset?.url;
  return {
    title: `${post.title} | ViralNest`,
    description,
    alternates: {
      canonical: `https://viralnest.co.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `https://viralnest.co.in/blog/${post.slug}`,
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
// --- END OF UNTOUCHED METADATA ---

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) { notFound(); }

  // --- YOUR READING TIME AND JSON-LD LOGIC IS UNTOUCHED ---
  const text = post?.body?.map((block: any) => block.children?.map((child: any) => child?.text || "").join(" ")).join(" ") || "";
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const imageUrl = post?.mainImage?.asset?.url;
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, datePublished: post.publishedAt, image: imageUrl, author: { "@type": "Organization", name: "ViralNest Media" } };
  // --- END OF UNTOUCHED LOGIC ---

  return (
    // [FIX] Removed `bg-black text-white`.
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* [FIX] Updated background to be theme-aware. */}
      <section className="relative pt-32 pb-28 px-6 text-center bg-secondary/50 dark:bg-gradient-to-b dark:from-primary/10 dark:to-background">
        <div className="max-w-3xl mx-auto">
          {/* [FIX] Updated link to use theme color. */}
          <Link href="/blog" className="text-primary hover:text-primary/80 text-sm mb-10 inline-block">
            ← Back to Blog
          </Link>
          {/* [FIX] Updated gradient to use theme colors. */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>
          {/* [FIX] Updated text to use theme color. */}
          <div className="flex justify-center gap-6 text-muted-foreground text-sm">
            {post?.publishedAt && (<span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>)}
            <span>{readingTime} min read</span>
          </div>
        </div>
      </section>

      {imageUrl && (
        <div className="max-w-5xl mx-auto px-6 -mt-14">
          <div className="relative w-full h-[500px]">
            <Image
              src={imageUrl} alt={post.title} fill
              className="rounded-3xl shadow-2xl border border-border object-cover" // [FIX] Updated border color.
              sizes="(max-width: 768px) 100vw, 1200px" priority
            />
          </div>
        </div>
      )}

      <section className="py-24 px-6">
        {/* [FIX] Updated prose styles to be theme-aware. */}
        <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-li:marker:text-primary">
          <PortableText value={post.body} />
        </div>
      </section>
    </div>
  );
}