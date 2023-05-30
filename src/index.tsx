/* @refresh reload */
import { render } from "solid-js/web";
import { inject } from "@vercel/analytics/*";
 
// import some helper that is exposed by your current framework to determine the right mode manually
import { DEV } from 'solid-js';

import "./styles/index.css";

import AppWrapper from "./App";
import { Navigate, Route, Router, Routes } from "@solidjs/router";
import Cover from "./pages/cover";
import Introduction from "./pages/introduction";
import PageNotFound from "./pages/404";
import Table from "./pages/table";
import Diary from "./pages/diary";
import Magazine from "./pages/trendymagazine";
import Essay from "./pages/photoessay";
import Book from "./pages/bookcover";
import Movie from "./pages/movie";
import Problems from "./pages/countryproblems";
import Conclusion from "./pages/conclusion";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={AppWrapper}>
          <Route path="/" component={() => <Navigate href="/page/1" />} />
          <Route path="/page/1" component={Cover} />
          <Route path="/page/2" component={Table} />
          <Route path="/page/3" component={Introduction} />
          <Route path="/page/4" component={Diary} />
          <Route path="/page/5" component={Magazine} />
          <Route path="/page/6" component={Essay} />
          <Route path="/page/7" component={Book} />
          <Route path="/page/8" component={Movie} />
          <Route path="/page/9" component={Problems} />
          <Route path="/page/10" component={Conclusion} />
          <Route path="/page/*" component={PageNotFound} />
          <Route path="*" component={() => <Navigate href="/" />} />
        </Route>
      </Routes>
    </Router>
  ),
  root!
);

// Inject the Vercel Analytics
inject({
  mode: DEV ? 'development' : 'production',
});
