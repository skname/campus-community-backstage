export interface NavMenuItem {
  index: number;
  name: string;
  path?: string;
  icon?: string;
  children?: NavMenuItem[];
}

export type NavMenuList = NavMenuItem[];

export interface NavTabList {
  id: number;
  name: string;
}
