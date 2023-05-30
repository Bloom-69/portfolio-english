import "./styles/App.css";
import { Outlet } from "@solidjs/router";
import { PageControllerProvider} from "./providers";
import Index from "./components";
import About from "./components/about";
import Toolbar from "./components/toolbar";

// Pages should be laid out like this:
// "/" is our cover
// "/page/x" is our page, x being the number

function App() {
  return (
    <div class="App">
      <PageControllerProvider index={1} showAbout={false} showIndex={false}>
        <div class="flex-container">
          <Index />
          <div class="container">
            <main>
              <Outlet />
            </main>
          </div>
          <About />
        </div>
        <Toolbar />
      </PageControllerProvider>
    </div>
  );
}

export default App;
