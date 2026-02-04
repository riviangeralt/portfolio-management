import { Card } from "@/components/atoms";
import type { Blog } from "@/types/blog.d.ts";

const BlogCard = ({ blog }: { blog: Blog }) => {

const formatDate = (dateInt: number): string => {
    const date = new Date(dateInt);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <Card className="shadow-md rounded-lg">
      <p className="text-xs text-gray-500">{formatDate(blog.date)}</p>
      <h3 className="font-medium mt-1">{blog.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{blog.content}</p>
      <button className="text-green-600 text-sm mt-2">Read full post</button>
    </Card>
  );
};

export default BlogCard;
