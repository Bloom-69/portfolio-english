import { usePageController } from "../providers";

export default function Toolbar() {
  const [state, { changeIndex, toggleAbout, toggleTOC }] = usePageController();

  return (
    <div class="toolbar" role="navigation">
      <button
        onClick={() => toggleTOC!()}
        class={
          state.showIndex === true ? "btn icon filled" : "btn icon outlined"
        }
      >
        <span class="material-symbols">list</span>
      </button>
      <div role="navigation" class="navigation">
        <button
          onClick={() => changeIndex!(state.index! - 1)}
          disabled={state.index === 1}
          class="btn icon outlined"
        >
          <span class="material-symbols">arrow_back</span>
        </button>
        <button
          onClick={() => changeIndex!(1)}
          class={state.index === 1 ? "btn icon filled" : "btn icon outlined"}
          disabled={state.index === 1}
        >
          <span class="material-symbols">home</span>
        </button>
        <button
          onclick={() => changeIndex!(state.index! + 1)}
          class="btn icon outlined"
          disabled={state.index === 10}
        >
          <span class="material-symbols">arrow_forward</span>
        </button>
      </div>
      <div role="navigation" class="navigation">
        <button
          onClick={() => toggleAbout!()}
          class={
            state.showAbout === true ? "btn icon filled" : "btn icon outlined"
          }
        >
          <span class="material-symbols">info</span>
        </button>
      </div>
    </div>
  );
}
