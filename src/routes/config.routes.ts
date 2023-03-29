import { AuthPage } from "../pages/auth/auth.page";
import { DetailPage } from "../pages/detail/detail.page";
import { HomePage } from "../pages/home/home.page";
import { SearchPage } from "../pages/search/search.page";

export enum Pages {
  Auth = "/pokedex/",
  Home = "/pokedex/home",
  Search = "/pokedex/search",
  Detail = "/pokedex/detail",
}

interface IRoute {
  name: string;
  ref: string;
  page: (props: any) => JSX.Element;
  navigationBar?: boolean;
}

export const ROUTES: IRoute[] = [
  { ref: Pages.Auth, page: AuthPage, name: "AuthPage" },
  { ref: Pages.Home, page: HomePage, name: "HomePage" },
  { ref: Pages.Search, page: SearchPage, name: "SearchPage" },
  { ref: Pages.Detail, page: DetailPage, name: "DetailPage" },
];
