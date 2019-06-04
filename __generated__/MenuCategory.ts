/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MenuCategory
// ====================================================

export interface MenuCategory_links {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuCategory {
  __typename: "MenuCategoryRecord";
  title: string | null;
  links: (MenuCategory_links | null)[] | null;
}
