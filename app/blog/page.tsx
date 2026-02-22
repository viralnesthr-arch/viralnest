export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  title: "Blog | ViralNest",
  description:
    "Explore expert insights on digital marketing, SEO, branding, and growth strategies to scale your business with ViralNest.",
  alternates: {
    canonical: "https://yourdomain.com/blog", // replace with real domain
  },
  openGraph: {
    title: "ViralNest Blog",
    description:
      "Insights, strategies, and growth tactics to scale your digital presence.",
    url: "https://yourdomain.com/blog",
    siteName: "ViralNest",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ViralNest Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViralNest Blog",
    description:
      "Digital marketing insights and strategies from ViralNest.",
    images: ["/og-image.png"],
  },
};

/* =========================
   FETCH POSTS (SAFE QUERY)
========================= */

async function getPosts() {
  try {
    const posts = await client.fetch(`
      *[_type == "post" && defined(slug.current)] 
      | order(publishedAt desc){
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        categories,
        mainImage{
          asset->{
            url
          }
        },
        body
      }
    `);

    return posts || [];
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return [];
  }
}

/* =========================
   BLOG PAGE
========================= */

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              ViralNest Blog
            </span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Insights, strategies, and growth tactics to scale your digital presence.
          </p>
        </div>

        {/* Blog Section */}
        {posts.length === 0 ? (
          <div className="text-center py-32">
            <div className="inline-block px-6 py-3 rounded-full bg-purple-900/30 border border-purple-600 text-purple-300 text-sm">
              Content Coming Soon
            </div>
            <h2 className="text-3xl font-bold mt-6">
              No Blogs Yet 🚀
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              We’re preparing valuable insights to help you grow faster.
              Check back soon for fresh updates from ViralNest.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post: any) => {

              const excerpt =
                post?.body?.[0]?.children?.[0]?.text
                  ? post.body[0].children[0].text.slice(0, 140) + "..."
                  : post?.excerpt || "Read this article on ViralNest.";

              return (
                <Link
                  key={post._id}
                  href={`/blog/${post?.slug?.current}`}
                  className="group bg-[#111] rounded-2xl overflow-hidden border border-purple-900/30 hover:border-purple-500 transition duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  {post?.mainImage?.asset?.url && (
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.title || "Blog image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">

                    {/* Categories */}
                    {Array.isArray(post?.categories) && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((cat: any, i: number) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-purple-900/40 border border-purple-600 rounded-full text-purple-300"
                          >
                            {typeof cat === "string"
                              ? cat
                              : cat?.title || ""}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                      {post?.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm mb-4">
                      {excerpt}
                    </p>

                    {/* Date */}
                    {post?.publishedAt && (
                      <p className="text-xs text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    )}

                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}