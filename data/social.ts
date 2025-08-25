export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/FranceForever",
    icon: "github"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/armaanghosh/",
    icon: "linkedin"
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:a65ghosh@uwaterloo.ca",
    icon: "mail"
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+15489220973",
    icon: "phone"
  }
];
