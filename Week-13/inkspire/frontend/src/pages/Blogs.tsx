import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";
import { BlogSkeleton } from "../Components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs(); //custom hook

  if (loading) {
    return <div>
         <Appbar />
         <div className="flex justify-center">
              <div>
               <BlogSkeleton />
               <BlogSkeleton />
               <BlogSkeleton />
               <BlogSkeleton />
               <BlogSkeleton />
              </div>
         </div>
    </div>
  }
  // console.log(blogs)

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2 March 2025"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
