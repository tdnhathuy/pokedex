import { Link, useHref, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/config.routes";
import { SearchAppBar } from "../search-bar/search-bar.component";

export interface NavigationBarProps {}

const NavigationButton = ({ to, title }: { title: string; to: string }) => {
  const className =
    "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900";

  return (
    <Link to={to} className={className}>
      {title}
    </Link>
  );
};

export const NavigationBar = (props: NavigationBarProps) => {
  const {} = props;


  return <SearchAppBar />;

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <NavigationButton to="/" title="Login" /> */}
                {ROUTES.filter((x) => x.navigationBar).map((btn) => {
                  return <NavigationButton to={btn.ref} title={btn.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
