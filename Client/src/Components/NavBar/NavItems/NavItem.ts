interface NavItem {
  id: number;
  itemName: string;
  link: string;
}

export const NavItems: Array<NavItem> = [
  {
    id: 1,
    itemName: "Home",
    link: "/",
  },
  {
    id: 2,
    itemName: "Project",
    link: "/Project",
  },
  //{
  //  id:3,
  //itemName:"MySkill",
  //link:"/MySkill"

  //},

  {
    id: 4,
    itemName: "About",
    link: "/About",
  },
];
