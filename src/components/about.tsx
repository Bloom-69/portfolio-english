import { Show } from "solid-js";
import { usePageController } from "../providers";
import * as Package from "../../package.json"

export default function About() {
  const [state] = usePageController();
  return (
    <Show when={state.showAbout === true}>
    <div class="index-container">
      <aside>
        <h1>About</h1>
        <div class="btn-group" role="navigation">
        <p>Version: {Package.version}</p>
        <p>Solid Version: {Package.dependencies["solid-js"]}</p>
        <p>Vite Version: {Package.dependencies["vite"]}</p>
        </div>
      </aside>
    </div>
    </Show>
  );
}
