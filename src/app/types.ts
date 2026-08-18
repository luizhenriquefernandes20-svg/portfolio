export interface Project {
  id: number;
  featured?: boolean;
  title: string;
  description: string;
  tags: string[];
  image: string;
  problem: string;
  architecture: string;
  challenges: string;
  impact: string;
  /** Repository URL. Leave as `null` when there isn't a public repo yet — the button is hidden automatically. */
  github: string | null;
  /** Live demo URL. Leave as `null` when there isn't a live deploy yet — the button is hidden automatically. */
  demo: string | null;
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  type: "degree" | "cert" | "course";
  detail: string;
}
