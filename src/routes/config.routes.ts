import { AuthPage } from "../pages/auth/auth.page";
import { HomePage } from "../pages/home/home.page";
import { SearchPage } from "../pages/search/search.page";

export enum EnumTo {
  Auth = "/",
  Home = "/home",
  Search = "/search",
}

interface IRoute {
  name: string;
  ref: string;
  page: (props: any) => JSX.Element;
  navigationBar?: boolean;
}

export const ROUTES: IRoute[] = [
  { ref: EnumTo.Auth, page: AuthPage, name: "AuthPage" },
  { ref: EnumTo.Home, page: HomePage, name: "HomePage" },
  { ref: EnumTo.Search, page: SearchPage, name: "SearchPage" },
];
