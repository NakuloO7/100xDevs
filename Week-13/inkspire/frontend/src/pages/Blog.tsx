import { Appbar } from "../Components/Appbar";
import { BlogSkeleton } from "../Components/BlogSkeleton";
import { FullBlog } from "../Components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
//   console.log(typeof(id));  string

  const { loading, blog } = useBlog({
    id : Number(id),
  });

  if (loading  || !blog) {
    return <div>
      <Appbar />
      <div className="flex mt-10 justify-center">
        <BlogSkeleton />
      </div>
    </div>;
  }

  return <div>
    <FullBlog blog={blog} />
  </div>;
};
