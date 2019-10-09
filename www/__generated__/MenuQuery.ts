/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MenuQuery
// ====================================================

export interface MenuQuery_menu_children {
  __typename: "MenuChildren";
  title: string | null;
  href: string | null;
  permissions: (string | null)[] | null;
}

export interface MenuQuery_menu {
  __typename: "Menu";
  title: string | null;
  key: string | null;
  permissions: (string | null)[] | null;
  children: (MenuQuery_menu_children | null)[] | null;
}

export interface MenuQuery {
  menu: (MenuQuery_menu | null)[] | null;
}
