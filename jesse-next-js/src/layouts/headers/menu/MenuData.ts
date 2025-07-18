import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/menu/home-1.jpg";
import demo_img_2 from "@/assets/img/menu/home-2.jpg";
import demo_img_3 from "@/assets/img/menu/home-3.jpg";
import demo_img_4 from "@/assets/img/menu/home-4.jpg";
import demo_img_5 from "@/assets/img/menu/home-5.jpg";
import demo_img_6 from "@/assets/img/menu/home-8.jpg"; 
import demo_img_7 from "@/assets/img/menu/home-7.jpg";
import demo_img_8 from "@/assets/img/menu/home-6.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: StaticImageData | any;
    mobile_menu?: boolean;
  }[];
}[]
// menu data 
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    img_dropdown: true,
    sub_menus: [
      { mobile_menu: false, link: "/", title: "Home 01", demo_img: demo_img_1, },
      { mobile_menu: false, link: "/home-2", title: "Home 02", demo_img: demo_img_2, },
      { mobile_menu: false, link: "/home-3", title: "Home 03", demo_img: demo_img_3, },
      { mobile_menu: false, link: "/home-4", title: "Home 04", demo_img: demo_img_4, },
      { mobile_menu: false, link: "/home-5", title: "Home 05", demo_img: demo_img_5, },
      { mobile_menu: false, link: "/home-6", title: "Home 06", demo_img: demo_img_6, },
      { mobile_menu: false, link: "/home-7", title: "Home 07", demo_img: demo_img_7, },
      { mobile_menu: false, link: "/home-8", title: "Home 08", demo_img: demo_img_8, }, 

      { mobile_menu: true, link: "/", title: "Freelancer"},
      { mobile_menu: true, link: "/home-2", title: "Interface Designer"},
      { mobile_menu: true, link: "/home-3", title: "Web Developer"},
      
      { mobile_menu: true, link: "/home-4", title: "Photographer"},
      { mobile_menu: true, link: "/home-5", title: "Fashion Designer"},
      { mobile_menu: true, link: "/home-6", title: "Portfolio Slider 01"},
      { mobile_menu: true, link: "/home-7", title: "Portfolio Slider 02"},
      { mobile_menu: true, link: "/home-8", title: "Portfolio Slider 03"},
    ],
  },
  {
    id: 2,
    title: "About Me",
    link: "/about",
    has_dropdown: false,
  },

  {
    id: 3,
    title: "Services",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Service Details" },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/portfolio-details-2", title: "Portfolio Details 02" },
      { link: "/portfolio-details-3", title: "Portfolio Details 03" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog List" },
      { link: "/blog-sidebar", title: "Blog Sidebar" },
      { link: "/blog-details", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details 02" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
