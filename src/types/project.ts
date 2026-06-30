export type ProjectCategory = "residencial" | "comercial" | "modular";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  area: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
};
