export interface Menu {
  name: string;
  key: string;
  icon: any;
  theme: "outline" | "filled" | "two-tone";
}

export interface Menus {
  name: string;
  menus: Menu[];
}
