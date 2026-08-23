export type NewsCategory =
  | "PARTI"
  | "POLITIQUE"
  | "GOUVERNEMENT"
  | "ASSEMBLEE"
  | "TERRITOIRES"
  | "COMMUNIQUE"
  | "CONGRES"
  | "ECONOMIE"
  | "SOCIETE";

export type NewsSourceType = "OFFICIAL" | "PRESS" | "AGENCY";

export interface PastefNewsArticle {
  id: string;

  slug: string;

  title: string;

  excerpt: string;

  content?: string;

  date: string;

  category: NewsCategory;

  source: {
    name: string;
    type: NewsSourceType;
    url: string;
  };

  image: {
    src: string;
    alt: string;
    credit?: string;
  };

  author?: string;

  featured?: boolean;

  tags: string[];

  people?: {
    name: string;
    role?: string;
  }[];

  location?: string;

  readingTime?: number;
}
