/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MenuCallToAction
// ====================================================

export interface MenuCallToAction_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuCallToAction {
  __typename: "MenuCallToActionRecord";
  link: MenuCallToAction_link | null;
}
