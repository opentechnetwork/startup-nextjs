import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: Number("1"),
    title: "Best UI components for modern websites",
    paragraph:
      "Introduction In today's digital age, user interface (UI) components play a crucial role in enhancing user experience and engagement...",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "David B.",
      image: "/images/blog/author-01.png",
      designation: "Owner/President",
    },
    tags: ["creative"],
    publishDate: "2025",
    
  },
  {
    id: Number("2"),
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Introduction Design is an ever-evolving field, and continuous improvement is key to staying relevant and effective.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "David B.",
      image: "/images/blog/author-02.png",
      designation: "Owner/President",
    },
    tags: ["computer"],
    publishDate: "2025",
    
  },
  {
    id: Number("3"),
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Introduction Efficient coding is crucial for meeting project deadlines and enhancing productivity.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "David B.",
      image: "/images/blog/author-03.png",
      designation: "Owner/President",
    },
    tags: ["design"],
    publishDate: "2025",
    
  },
];
export default blogData;
