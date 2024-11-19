export interface options {
  id: number;
  name: string;
  link: string;
}

export interface copyright {
  id: number;
  desc: string;
}

export const links: options[] = [
  { id: 1, name: "sample1", link: "/sample1" },
  { id: 2, name: "sample2", link: "/sample2" },
  { id: 3, name: "sample3", link: "/sample3" },
  { id: 4, name: "sample4", link: "/sample4" },
  { id: 5, name: "sample5", link: "/sample5" },
  { id: 6, name: "sample6", link: "/sample6" },
  { id: 7, name: "sample7", link: "/sample7" },
  { id: 8, name: "sample8", link: "/sample8" },
  { id: 9, name: "sample9", link: "/sample9" },
  { id: 10, name: "sample10", link: "/sample10" },
  { id: 11, name: "sample11", link: "/sample11" },
  { id: 12, name: "sample12", link: "/sample12" },
];

export const footer_copyright: copyright[] = [
  {
    id: 1,
    desc: " © Made with ❤️ in 2024",
  },
];
