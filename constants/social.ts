export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "facebook" | "mail";
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/johncarlhonrado", icon: "github" },
  { label: "LinkedIn", href: "www.linkedin.com/in/honrado-john-carl-c-229908386", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/johncarl.honrado", icon: "facebook" },
];

export const contactDetails = {
  email: "honradojohncarl17@gmail.com",
  phone: "(+63)967-574-0428",
  location: "General Trias, Cavite, Philippines — Remote friendly",
  github: "github.com/johncarlhonrado",
  linkedin: "www.linkedin.com/in/honrado-john-carl-c-229908386",
  resumeUrl: "/JohnCarl_Honrado_Resume.pdf",
};
