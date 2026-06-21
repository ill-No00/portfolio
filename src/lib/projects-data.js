/**
 * @typedef {Object} Project
 * @property {string} title - The title of the project.
 * @property {string} description - The description of the project.
 * @property {string[]} features - Key features of the project.
 * @property {string[]} technologies - Technologies used in the project.
 * @property {string} accentColor - Hex color code representing the accent color of the project.
 * @property {string[]} images - Paths to screenshots of the project.
 * @property {string} liveUrl - URL to the live demo.
 * @property {string} [codeUrl] - Optional URL to the source code repository.
 */

/**
 * Static projects array containing all case studies featured in the gallery.
 * @type {Project[]}
 */
export const projects = [
  {
    title: "Skateboard E-Commerce",
    description:
      "A modern e-commerce platform for skateboard enthusiasts with product browsing, cart management, and secure checkout.",
    features: [
      "Product catalog with category filtering",
      "Shopping cart with real-time sync",
      "Secure payment checkout flow",
      "Admin inventory management",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    accentColor: "#ec4899",
    images: ["/4wheels.png"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "TasteHub Restaurant",
    description:
      "A full-featured restaurant management platform with menu browsing, online reservations, and a comprehensive admin dashboard.",
    features: [
      "Interactive menu with categories",
      "Online table reservation system",
      "Customer review management",
      "Full admin dashboard & analytics",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Vanilla CSS",
    ],
    accentColor: "#d5bea8",
    images: [
      "/tastehub_home.png",
      "/tastehub_detail.png",
      "/tastehub_reserve.png",
      "/tastehub_reviews.png",
      "/tastehub_admin_dashboard.png",
      "/tastehub_admin_menu.png",
      "/tastehub_admin_reservations.png",
      "/tastehub_admin_reviews.png",
      "/tastehub_contact.png"
    ],
    liveUrl: "#",
    codeUrl: "",
  },
  {
    title: "AI Job Hunting Agent",
    description:
      "An intelligent job search assistant that automatically discovers opportunities, scores relevance, generates tailored applications, and tracks the entire process.",
    features: [
      "Automated job discovery & relevance scoring",
      "AI-powered CV & cover letter generation",
      "Centralized application tracking",
      "Recruiter response monitoring",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AI APIs",
      "Supabase",
    ],
    accentColor: "#3b82f6",
    images: ["/hireit.jpg"],
    liveUrl: "#",
    codeUrl: "#",
  },
];
