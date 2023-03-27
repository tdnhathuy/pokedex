import { Route, Routes } from "react-router-dom";
import { SearchAppBar } from "./components/search-bar/search-bar.component";
import { ROUTES } from "./routes/config.routes";

function App() {
  return (
    <>
      <SearchAppBar />
      <Routes>
        {ROUTES.map((page) => {
          const Page = page.page;
          return <Route key={page.ref} path={page.ref} element={<Page />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
