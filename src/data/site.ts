export const site = {
  name: "LAO",
  fullName: "LAO Delivery",
  tagline: "Groceries Delivered to Your Doorstep or Picked Up In-Store.",
  description:
    "LAO delivers discounted fresh groceries, dairy, snacks, household essentials, personal care and baby care to your doorstep — or ready for pickup from your nearest store — in Mandideep and other Tier 3 cities across Madhya Pradesh. Free delivery on your first order.",
  // Render sets RENDER_EXTERNAL_URL automatically at build time. Falls back
  // to the eventual production domain once that's pointed at the service.
  url: process.env.RENDER_EXTERNAL_URL ?? "https://www.laogrocery.com",
  playStoreUrl: "https://play.google.com/store",
  supportEmail: "support@laogrocery.com",
  supportPhone: "+91-90000-00000",
  foundingCity: "Mandideep, Madhya Pradesh",
  social: {
    instagram: "https://instagram.com/laogrocery",
    facebook: "https://facebook.com/laogrocery",
    linkedin: "https://linkedin.com/company/laogrocery",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Why LAO", href: "#why-lao" },
  { label: "Cities", href: "#cities" },
  { label: "Contact Us", href: "#contact" },
];

export const trustBadges = [
  { icon: "truck", title: "Fast Delivery" },
  { icon: "percent", title: "Discounted Home Delivery" },
  { icon: "store", title: "Pickup From Store" },
  { icon: "pin", title: "Now Available in Mandideep" },
];

export const services = [
  {
    icon: "carrot",
    image: "/images/service-fresh-product.webp",
    title: "Fresh Product",
    description: "All organic and fresh.",
    accent: "brand",
  },
  {
    icon: "milk",
    image: "/images/service-dairy.webp",
    title: "Dairy",
    description: "Milk, Ghee, Butter and More.",
    accent: "sand",
  },
  {
    icon: "cookie",
    title: "Snacks",
    description: "Chips, Namkeen, Biscuits and More.",
    accent: "brand",
  },
  {
    icon: "sparkles",
    image: "/images/service-beauty.webp",
    title: "Personal products & beauty",
    description: "Moisturizer, cream, makeup and More.",
    accent: "brand",
  },
  {
    icon: "spray",
    image: "/images/service-household-goods.webp",
    title: "Household Goods",
    description: "Cleaning, Sanitizing, makeup and More.",
    accent: "sand",
  },
  {
    icon: "baby",
    image: "/images/service-baby-care.webp",
    title: "Baby Care",
    description: "Diaper, Wipes, Toys and More.",
    accent: "sand",
  },
];

export const whyLaoPoints = [
  {
    number: 1,
    title: "Best Prices",
    description:
      "No hidden charges. Home delivery is always discounted versus your local store, and pickup orders skip delivery fees entirely.",
  },
  {
    number: 2,
    title: "Made for Everyday Needs",
    description:
      "From daily groceries to last-minute essentials, get what you need without the long wait.",
  },
  {
    number: 3,
    title: "Local Stores, Wider Access",
    description:
      "Bringing everyday essentials closer to communities that are often left behind.",
  },
  {
    number: 4,
    title: "9AM-9PM Support",
    description: "Phone, chat, WhatsApp. Issues resolved within minutes.",
  },
];

export const nearbyCities = [
  "Bhopal",
  "Indore",
  "Gwalior",
  "Jabalpur",
  "Ujjain",
  "Dewas",
];

// Placeholder pickup points — replace with real store addresses once
// confirmed. All three are in Mandideep, the founding city, until pickup
// expands to nearby cities alongside delivery.
export const storeLocations = [
  {
    name: "LAO Store — Old Bus Stand Road",
    area: "Near Bus Stand, Mandideep, MP 462046",
  },
  {
    name: "LAO Store — Industrial Area Phase II",
    area: "Sector B, Mandideep, MP 462046",
  },
  {
    name: "LAO Store — Housing Board Colony",
    area: "Main Road, Mandideep, MP 462046",
  },
];

export const footerLinks = {
  support: [
    "Groceries",
    "Snacks",
    "Cold Drinks",
    "Dairy & Eggs",
    "Bakery",
    "Skincare",
    "Personal Care",
    "Household Essentials",
    "Baby Care",
    "Ready-to-Eat",
  ],
  company: [
    { label: "Help Centre", href: "#contact" },
    { label: "Track Order", href: "#" },
    { label: "Returns & Refunds", href: "#" },
    { label: "FAQs", href: "#faq" },
    { label: "Report an Issue", href: "#contact" },
  ],
};

export const faqs = [
  {
    question: "Which cities does LAO deliver to?",
    answer:
      "LAO started in Mandideep, Madhya Pradesh and is expanding to nearby Tier 3 cities and towns across the state, bringing metro-quality grocery delivery to communities that are often left behind.",
  },
  {
    question: "Is my first order really free?",
    answer:
      "Yes. Every new customer gets free delivery on their first order, with no minimum order value and no hidden charges.",
  },
  {
    question: "Can I pick up my order instead of getting it delivered?",
    answer:
      "Yes. Every order can either be delivered to your doorstep at a discounted price, or reserved for pickup at your nearest LAO store — whichever suits you better.",
  },
  {
    question: "What can I order from LAO?",
    answer:
      "Fresh produce, dairy, snacks, household goods, personal care and beauty products, and baby care essentials — everything your household needs, delivered fresh and fast.",
  },
  {
    question: "How do I get support if something goes wrong with my order?",
    answer:
      "Our support team is available 9AM-9PM over phone, chat and WhatsApp, and most issues are resolved within minutes.",
  },
];
