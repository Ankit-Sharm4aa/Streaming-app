export interface options {
  id: number;
  option: string;
  link: string;
}
export interface menu {
  id: number;
  option: string;
  link: string;
}
export const nav_options: options[] = [
  {
    id: 1,
    option: "Home",
    link: "/",
  },
  { id: 2, option: "Contact Us", link: "/contact-us" },
  { id: 3, option: "YD", link: "/YD" },
  { id: 4, option: "DY", link: "/DY" },
];

export const menu_options: menu[] = [
  {
    id: 1,
    option: "Sign In",
    link: "/signin/",
  },
  {
    id: 2,
    option: "Contact Us",
    link: "/contact-us/",
  },
];
