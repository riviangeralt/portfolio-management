import { BlogCard } from "@/components/molecules";
import type { Blog } from "@/types/blog.d.ts";

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
