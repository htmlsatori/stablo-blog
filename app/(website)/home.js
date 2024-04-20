import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          <div className="mt-10 grid  md:grid-cols-1  ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
                className="mt-10"
              />
            ))}
          </div>
          <div className="mt-10 grid  md:grid-cols-1  ">
            {posts.slice(2, 14).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
              />
            ))}
          </div>

          <div className="mt-10 hidden justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
