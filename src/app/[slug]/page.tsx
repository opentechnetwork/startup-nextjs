import { useRouter } from "next/router";
import blogData from "@components/Blog/blogData";

const BlogDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog by slug
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.paragraph}</p>
      {/* Add additional content */}
    </div>
  );
};

export default BlogDetailsPage;
