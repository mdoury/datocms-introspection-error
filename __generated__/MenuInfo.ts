/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MenuInfo
// ====================================================

export interface MenuInfo_desktopMenu_MenuCategoryRecord_links {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuInfo_desktopMenu_MenuCategoryRecord {
  __typename: "MenuCategoryRecord";
  title: string | null;
  links: (MenuInfo_desktopMenu_MenuCategoryRecord_links | null)[] | null;
}

export interface MenuInfo_desktopMenu_MenuCallToActionRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuInfo_desktopMenu_MenuCallToActionRecord {
  __typename: "MenuCallToActionRecord";
  link: MenuInfo_desktopMenu_MenuCallToActionRecord_link | null;
}

export interface MenuInfo_desktopMenu_MenuExternalLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuInfo_desktopMenu_MenuExternalLinkRecord {
  __typename: "MenuExternalLinkRecord";
  link: MenuInfo_desktopMenu_MenuExternalLinkRecord_link | null;
}

export interface MenuInfo_desktopMenu_MenuLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuInfo_desktopMenu_MenuLinkRecord {
  __typename: "MenuLinkRecord";
  link: MenuInfo_desktopMenu_MenuLinkRecord_link | null;
}

export type MenuInfo_desktopMenu = MenuInfo_desktopMenu_MenuCategoryRecord | MenuInfo_desktopMenu_MenuCallToActionRecord | MenuInfo_desktopMenu_MenuExternalLinkRecord | MenuInfo_desktopMenu_MenuLinkRecord;

export interface MenuInfo_mobileMenu_MenuCategoryRecord_links {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuInfo_mobileMenu_MenuCategoryRecord {
  __typename: "MenuCategoryRecord";
  title: string | null;
  links: (MenuInfo_mobileMenu_MenuCategoryRecord_links | null)[] | null;
}

export interface MenuInfo_mobileMenu_MenuCallToActionRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuInfo_mobileMenu_MenuCallToActionRecord {
  __typename: "MenuCallToActionRecord";
  link: MenuInfo_mobileMenu_MenuCallToActionRecord_link | null;
}

export interface MenuInfo_mobileMenu_MenuExternalLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuInfo_mobileMenu_MenuExternalLinkRecord {
  __typename: "MenuExternalLinkRecord";
  link: MenuInfo_mobileMenu_MenuExternalLinkRecord_link | null;
}

export interface MenuInfo_mobileMenu_MenuLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface MenuInfo_mobileMenu_MenuLinkRecord {
  __typename: "MenuLinkRecord";
  link: MenuInfo_mobileMenu_MenuLinkRecord_link | null;
}

export type MenuInfo_mobileMenu = MenuInfo_mobileMenu_MenuCategoryRecord | MenuInfo_mobileMenu_MenuCallToActionRecord | MenuInfo_mobileMenu_MenuExternalLinkRecord | MenuInfo_mobileMenu_MenuLinkRecord;

export interface MenuInfo {
  __typename: "MenuRecord";
  desktopMenu: (MenuInfo_desktopMenu | null)[] | null;
  mobileMenu: (MenuInfo_mobileMenu | null)[] | null;
}
