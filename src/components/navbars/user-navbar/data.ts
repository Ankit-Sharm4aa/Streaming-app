export interface options {
  id: number;
  name: string;
  link: string;
}
export interface option {
  id: number;
  name: string;
  link: string;
}

export interface menu {
  id: number;
  name: string;
}

export const left_nav: options[] = [
  {
    id: 1,
    name: "Home",
    link: "/browse/",
  },
  {
    id: 2,
    name: "TV Shows",
    link: "/genre/",
  },
  {
    id: 3,
    name: "Movies",
    link: "",
  },
  {
    id: 4,
    name: "New & Popular",
    link: "/latest/",
  },
  {
    id: 5,
    name: "My List",
    link: "/my-list/",
  },
  {
    id: 6,
    name: "Browse by Language",
    link: "",
  },
];

export const right_nav: option[] = [
  {
    id: 1,
    name: "Children",
    link: "/kids/",
  },
];

export const menu_items: menu[] = [
  {
    id: 1,
    name: "Browse",
  },
];
