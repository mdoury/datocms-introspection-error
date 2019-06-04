/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MobileMenuInfo
// ====================================================

export interface MobileMenuInfo_MenuCategoryRecord_links {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MobileMenuInfo_MenuCategoryRecord {
  __typename: "MenuCategoryRecord";
  title: string | null;
  links: (MobileMenuInfo_MenuCategoryRecord_links | null)[] | null;
}

export interface MobileMenuInfo_MenuCallToActionRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MobileMenuInfo_MenuCallToActionRecord {
  __typename: "MenuCallToActionRecord";
  link: MobileMenuInfo_MenuCallToActionRecord_link | null;
}

export interface MobileMenuInfo_MenuExternalLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MobileMenuInfo_MenuExternalLinkRecord {
  __typename: "MenuExternalLinkRecord";
  link: MobileMenuInfo_MenuExternalLinkRecord_link | null;
}

export interface MobileMenuInfo_MenuLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MobileMenuInfo_MenuLinkRecord {
  __typename: "MenuLinkRecord";
  link: MobileMenuInfo_MenuLinkRecord_link | null;
}

export type MobileMenuInfo = MobileMenuInfo_MenuCategoryRecord | MobileMenuInfo_MenuCallToActionRecord | MobileMenuInfo_MenuExternalLinkRecord | MobileMenuInfo_MenuLinkRecord;
