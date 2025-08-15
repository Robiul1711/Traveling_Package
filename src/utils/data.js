// all data

export const GlobalNavLinks = [
    { name: "Home", link: "/" },
    {
      name: "Experiences",
      link: "/buy",
      subcategories: [
        { name: "Sell", link: "/sell" },
        { name: "About Us", link: "/about" },
        { name: "Contact Us", link: "/contact" },
      ],
    },
    { name: "About Us", link: "/about-us" },
    { name: "FAQs", link: "/faq" },
    { name: "Contact Us", link: "/contact" },
  ];
// tripsData.js
import  trip1  from "@/assets/images/authBg.png";

export const tripsData = [
  {
    id: 1,
    title: "Explore The Wild East | Thailand and Vietnam",
    status: "Upcoming",
    image: trip1,
    difficulty: "Easy",
    startDate: "Dec 12",
    duration: "14 Days",
    price: "28,800 SAR",
    oldPrice: "32,000 SAR",
  },
  {
    id: 2,
    title: "Discover The Arctic Circle | Norway & Finland",
    status: "Complete",
    image: trip1,
    difficulty: "Moderate",
    startDate: "Jan 8",
    duration: "10 Days",
    price: "22,500 SAR",
    oldPrice: "25,000 SAR",
  },
  {
    id: 3,
    title: "Safari Adventure | Kenya & Tanzania",
    status: "Wishlist",
    image: trip1,
    difficulty: "Hard",
    startDate: "Feb 15",
    duration: "12 Days",
    price: "30,000 SAR",
    oldPrice: "34,500 SAR",
  },
];
