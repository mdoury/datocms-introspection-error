/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DesktopMenuInfo
// ====================================================

export interface DesktopMenuInfo_MenuCategoryRecord_links {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface DesktopMenuInfo_MenuCategoryRecord {
  __typename: "MenuCategoryRecord";
  title: string | null;
  links: (DesktopMenuInfo_MenuCategoryRecord_links | null)[] | null;
}

export interface DesktopMenuInfo_MenuCallToActionRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface DesktopMenuInfo_MenuCallToActionRecord {
  __typename: "MenuCallToActionRecord";
  link: DesktopMenuInfo_MenuCallToActionRecord_link | null;
}

export interface DesktopMenuInfo_MenuExternalLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface DesktopMenuInfo_MenuExternalLinkRecord {
  __typename: "MenuExternalLinkRecord";
  link: DesktopMenuInfo_MenuExternalLinkRecord_link | null;
}

export interface DesktopMenuInfo_MenuLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface DesktopMenuInfo_MenuLinkRecord {
  __typename: "MenuLinkRecord";
  link: DesktopMenuInfo_MenuLinkRecord_link | null;
}

export type DesktopMenuInfo = DesktopMenuInfo_MenuCategoryRecord | DesktopMenuInfo_MenuCallToActionRecord | DesktopMenuInfo_MenuExternalLinkRecord | DesktopMenuInfo_MenuLinkRecord;
