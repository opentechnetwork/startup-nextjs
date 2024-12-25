// app/blog/page.tsx
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Tech Innovations Blog",
  description: "Explore insightful articles on web design, coding, and digital marketing. Stay updated with the latest trends and tips from industry experts.",
  keywords: "web design, coding tips, digital marketing, UI components, design skills"
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Open Tech Innovations Blog Grid"
        description="Explore insightful articles on web design, coding, and digital marketing. Stay updated with the latest trends and tips from industry experts."

      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                {/* Remove Link wrapping SingleBlog, displaying static content */}
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {/* Pagination or additional controls */}
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md
                    bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition
                    hover:bg-primary hover:bg-opacity-100
                    hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                {/* Pagination buttons */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
