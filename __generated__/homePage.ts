/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homePage
// ====================================================

export interface homePage_menu_desktopMenu_MenuCategoryRecord_links {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface homePage_menu_desktopMenu_MenuCategoryRecord {
  __typename: "MenuCategoryRecord";
  title: string | null;
  links: (homePage_menu_desktopMenu_MenuCategoryRecord_links | null)[] | null;
}

export interface homePage_menu_desktopMenu_MenuCallToActionRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface homePage_menu_desktopMenu_MenuCallToActionRecord {
  __typename: "MenuCallToActionRecord";
  link: homePage_menu_desktopMenu_MenuCallToActionRecord_link | null;
}

export interface homePage_menu_desktopMenu_MenuExternalLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface homePage_menu_desktopMenu_MenuExternalLinkRecord {
  __typename: "MenuExternalLinkRecord";
  link: homePage_menu_desktopMenu_MenuExternalLinkRecord_link | null;
}

export interface homePage_menu_desktopMenu_MenuLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface homePage_menu_desktopMenu_MenuLinkRecord {
  __typename: "MenuLinkRecord";
  link: homePage_menu_desktopMenu_MenuLinkRecord_link | null;
}

export type homePage_menu_desktopMenu = homePage_menu_desktopMenu_MenuCategoryRecord | homePage_menu_desktopMenu_MenuCallToActionRecord | homePage_menu_desktopMenu_MenuExternalLinkRecord | homePage_menu_desktopMenu_MenuLinkRecord;

export interface homePage_menu_mobileMenu_MenuCategoryRecord_links {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface homePage_menu_mobileMenu_MenuCategoryRecord {
  __typename: "MenuCategoryRecord";
  title: string | null;
  links: (homePage_menu_mobileMenu_MenuCategoryRecord_links | null)[] | null;
}

export interface homePage_menu_mobileMenu_MenuCallToActionRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface homePage_menu_mobileMenu_MenuCallToActionRecord {
  __typename: "MenuCallToActionRecord";
  link: homePage_menu_mobileMenu_MenuCallToActionRecord_link | null;
}

export interface homePage_menu_mobileMenu_MenuExternalLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface homePage_menu_mobileMenu_MenuExternalLinkRecord {
  __typename: "MenuExternalLinkRecord";
  link: homePage_menu_mobileMenu_MenuExternalLinkRecord_link | null;
}

export interface homePage_menu_mobileMenu_MenuLinkRecord_link {
  __typename: "MenuItemRecord";
  url: string | null;
  desktopLabel: string | null;
  mobileLabel: string | null;
}

export interface homePage_menu_mobileMenu_MenuLinkRecord {
  __typename: "MenuLinkRecord";
  link: homePage_menu_mobileMenu_MenuLinkRecord_link | null;
}

export type homePage_menu_mobileMenu = homePage_menu_mobileMenu_MenuCategoryRecord | homePage_menu_mobileMenu_MenuCallToActionRecord | homePage_menu_mobileMenu_MenuExternalLinkRecord | homePage_menu_mobileMenu_MenuLinkRecord;

export interface homePage_menu {
  __typename: "MenuRecord";
  desktopMenu: (homePage_menu_desktopMenu | null)[] | null;
  mobileMenu: (homePage_menu_mobileMenu | null)[] | null;
}

export interface homePage {
  /**
   * Returns the single instance record
   */
  menu: homePage_menu | null;
}
