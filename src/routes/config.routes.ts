import { AuthPage } from "../pages/auth/auth.page";
import { HomePage } from "../pages/home/home.page";
import { SearchPage } from "../pages/search/search.page";

export const ROUTES: {
  name: string;
  ref: string;
  page: (props: any) => JSX.Element;
  navigationBar?: boolean;
}[] = [
  { ref: "/", page: AuthPage, name: "AuthPage", navigationBar: true },
  { ref: "/home", page: HomePage, name: "HomePage", navigationBar: true },
  { ref: "/search", page: SearchPage, name: "SearchPage", navigationBar: true },
];
