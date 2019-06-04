/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MenuExternalLink
// ====================================================

export interface MenuExternalLink_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuExternalLink {
  __typename: "MenuExternalLinkRecord";
  link: MenuExternalLink_link | null;
}
