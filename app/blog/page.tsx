export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog | ViralNest Media",
  description:
    "Explore expert insights on digital marketing, SEO, branding, and growth strategies to scale your business with ViralNest Media.",
  alternates: {
    canonical: "https://viral-nest-website-structure.vercel.app/blog",
  },
  openGraph: {
    title: "Blog | ViralNest Media",
    description:
      "Expert digital marketing and branding insights from ViralNest Media.",
    url: "https://viral-nest-website-structure.vercel.app/blog",
    siteName: "ViralNest Media",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | ViralNest Media",
    description:
      "Expert digital marketing and branding insights from ViralNest Media.",
  },
};

async function getPosts() {
  try {
    const data = await client.fetch(`
      *[_type == "post" && defined(slug.current)] 
      | order(publishedAt desc){
        _id,
        title,
        "slug": slug.current,
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

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Sanity error:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">

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

        {posts.length === 0 ? (
          <div className="text-center py-32">
            <h2 className="text-3xl font-bold">No Blogs Yet 🚀</h2>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post: any) => {

              if (!post?.slug) return null;

              const excerpt =
                post?.body?.[0]?.children?.[0]?.text
                  ? post.body[0].children[0].text.slice(0, 140) + "..."
                  : post?.excerpt || "Read this article on ViralNest.";

              return (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group bg-[#111] rounded-2xl overflow-hidden border border-purple-900/30 hover:border-purple-500 transition duration-300 hover:-translate-y-2"
                >
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

                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                      {post?.title}
                    </h2>

                    <p className="text-gray-400 text-sm mb-4">
                      {excerpt}
                    </p>

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