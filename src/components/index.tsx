import { Show } from "solid-js";
import { usePageController } from "../providers";

export default function Index() {
  const [state, {changeIndex}] = usePageController();
  return (
    <Show when={state.showIndex === true}>
    <div class="index-container hide_scrollbar">
      <aside>
        <header>
          <h1>Contents</h1>
        </header>
        <nav role="navigation" class="btn-group">
            <button onClick={() => changeIndex!(1)} class={state.index === 1 ? "btn filled" : "btn outlined"}>
                1. Cover
            </button>
            <button onClick={() => changeIndex!(2)} class={state.index === 2 ? "btn filled" : "btn outlined"}>
                2. Index
            </button>
            <button onClick={() => changeIndex!(3)} class={state.index === 3 ? "btn filled" : "btn outlined"}>
                3. Introduction
            </button>
            <button onClick={() => changeIndex!(4)} class={state.index === 4 ? "btn filled" : "btn outlined"}>
                4. My Diary
            </button>
            <button onClick={() => changeIndex!(5)} class={state.index === 5 ? "btn filled" : "btn outlined"}>
                5. Trendy Magazine
            </button>
            <button onClick={() => changeIndex!(6)} class={state.index === 6 ? "btn filled" : "btn outlined"}>
                6. Photo Essay
            </button>
            <button onClick={() => changeIndex!(7)} class={state.index === 7 ? "btn filled" : "btn outlined"}>
                7. Book Covers
            </button>
            <button onClick={() => changeIndex!(8)} class={state.index === 8 ? "btn filled" : "btn outlined"}>
                8. Film Analysis
            </button>
            <button onClick={() => changeIndex!(9)} class={state.index === 9 ? "btn filled" : "btn outlined"}>
                9. National or Country Problems
            </button>
            <button onClick={() => changeIndex!(10)} class={state.index === 10 ? "btn filled" : "btn outlined"}>
                10. Conclusion
            </button>
        </nav>
      </aside>
    </div>
    </Show>
  );
}
