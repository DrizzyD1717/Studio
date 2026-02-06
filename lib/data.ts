// lib/data.ts
export type Category = "All" | "Development" | "Design" | "Photography";

export interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  year: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nexus E-Commerce",
    category: "Development",
    image: "/pro-1.jpg",
    year: "2025",
    client: "Nexus Ltd",
  },
  {
    id: 2,
    title: "Aura Branding",
    category: "Design",
    image: "/pro-2.jpg",
    year: "2026",
    client: "Aura Wellness",
  },
  {
    id: 3,
    title: "Vogue Street Series",
    category: "Photography",
    image: "/efe1.jpeg",
    year: "2025",
    client: "Editorial",
  },
  {
    id: 4,
    title: "Fintech Dashboard",
    category: "Development",
    image: "/pro-4.jpg",
    year: "2026",
    client: "PayFlow",
  },
  {
    id: 5,
    title: "Minimalist Identity",
    category: "Design",
    image: "/pro-5.jpg",
    year: "2025",
    client: "Studio Co",
  },
  {
    id: 6,
    title: "Cinematic Portraits",
    category: "Photography",
    image: "/efe4.jpeg",
    year: "2026",
    client: "Personal",
  },
];
