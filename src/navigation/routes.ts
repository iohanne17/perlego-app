export enum CoreRoutes {
  HOME = 'HOME',
}

export enum MainRoutes {
  DASHBOARD = 'DASHBOARD',
  LIBRARY = 'LIBRARY',
}

export enum CommonRoutes {
  WEB_VIEW = 'WEB_VIEW',
  BOOK = 'BOOK',
  BOOK_DETAIL = 'BOOK_DETAIL',
}

export enum DashboardRoutes {
  MAIN = 'MAIN',
}

export enum LibraryRoutes {
  LIBRARY_MAIN = 'LIBRARY_MAIN',
}

export type AllRoutes = CoreRoutes | MainRoutes | CommonRoutes;
