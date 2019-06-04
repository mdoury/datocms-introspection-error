/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MenuLink
// ====================================================

export interface MenuLink_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuLink {
  __typename: "MenuLinkRecord";
  link: MenuLink_link | null;
}
