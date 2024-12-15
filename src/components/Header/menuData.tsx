import { Menu } from "@/types/menu";

const menuData: Menu[] = [
 /*} {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },*/
  { 
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Policy",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Security",
        path: "/polices/security",
        newTab: false,
      },
      {
        id: 42,
        title: "Privacy",
        path: "/policies/privacy",
        newTab: false,
      },
      {
        id: 43,
        title: "Cookie",
        path: "/policies/cookie",
        newTab: false,
      },
      {
        id: 44,
        title: "Accessibility",
        path: "/policies/accessibility",
        newTab: false,
      },
      {
        id: 45,
        title: "Disclaimer",
        path: "/policies/disclaimer",
        newTab: false,
      },
      {
        id: 46,
        title: "Terms and Conditions",
        path: "/policies/terms",
        newTab: false,
      },
      {
        id: 47,
        title: "Terms of Use",
        path: "/policies/terms_of_use",
        newTab: false,
      },
    ],
  }


  /*{
    id: 6,
    title: "Security",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  }*/
];



export default menuData;
