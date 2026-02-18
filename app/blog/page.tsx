export const revalidate = 60;


import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";

async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      categories,
      excerpt,
      mainImage{
        asset->{
          url
        }
      },
      body
    }
  `);
}

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

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any) => {
            const excerpt =
              post.body?.[0]?.children?.[0]?.text?.slice(0, 120) + "..." ||
              "Read this article on ViralNest.";

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-[#111] rounded-2xl overflow-hidden border border-purple-900/30 hover:border-purple-500 transition duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                {post.mainImage?.asset?.url && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">

                  {/* Categories */}
                  {post.categories && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((cat: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-purple-900/40 border border-purple-600 rounded-full text-purple-300"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4">
                    {excerpt}
                  </p>

                  {/* Date */}
                  {post.publishedAt && (
                    <p className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  )}

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
