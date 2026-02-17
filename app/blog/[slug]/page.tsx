import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body
    }`,
    { slug }
  );

  if (!post) return {};

  return {
    title: post.title + " | ViralNest",
    description:
      post.body?.[0]?.children?.[0]?.text?.slice(0, 150) ||
      "Read this article on ViralNest",
  };
}

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      body,
      mainImage{
        asset->{
          url
        }
      },
      author->{
        name
      }
    }
  `;

  return await client.fetch(query, { slug });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  // Reading time calculation
  const wordCount =
    post.body?.reduce(
      (acc: number, block: any) =>
        acc + (block.children?.reduce((sum: number, child: any) => sum + child.text.length, 0) || 0),
      0
    ) || 0;

  const readingTime = Math.ceil(wordCount / 1000); // approx

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
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
            {post.author?.name && (
              <span>By {post.author.name}</span>
            )}
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            )}
            <span>{readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      {post.mainImage?.asset?.url && (
        <div className="max-w-5xl mx-auto px-6 -mt-10">
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="rounded-2xl shadow-2xl border border-purple-800"
          />
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
          <PortableText value={post.body} />
        </div>
      </section>

    </div>
  );
}
