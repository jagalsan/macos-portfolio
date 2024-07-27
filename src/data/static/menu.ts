export interface MenuOption {
  name: string;
  path?: string;
  subMenu: {
    name: string;
    path?: string;
  }[];
}

export const Menu: MenuOption[] = [
  {
    name: "File",
    subMenu: [
      { name: "Submenu Link 1", path: "#" },
      { name: "Submenu Link 2", path: "#" },
      { name: "Submenu Link 3", path: "#" },
    ],
  },
  {
    name: "Edit",
    subMenu: [
      { name: "Submenu Link 1", path: "#" },
      { name: "Submenu Link 2", path: "#" },
      { name: "Submenu Link 3", path: "#" },
    ],
  },
  {
    name: "View",
    subMenu: [
      { name: "Submenu Link 1", path: "#" },
      { name: "Submenu Link 2", path: "#" },
      { name: "Submenu Link 3", path: "#" },
    ],
  },
  {
    name: "Window",
    subMenu: [
      { name: "Submenu Link 1", path: "#" },
      { name: "Submenu Link 2", path: "#" },
      { name: "Submenu Link 3", path: "#" },
    ],
  },
  {
    name: "Special",
    subMenu: [
      { name: "Submenu Link 1", path: "#" },
      { name: "Submenu Link 2", path: "#" },
      { name: "Submenu Link 3", path: "#" },
    ],
  },
  {
    name: "Help",
    subMenu: [
      { name: "Submenu Link 1", path: "#" },
      { name: "Submenu Link 2", path: "#" },
      { name: "Submenu Link 3", path: "#" },
    ],
  },
];
