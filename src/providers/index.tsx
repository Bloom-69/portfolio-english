import { useNavigate } from "@solidjs/router";
import { JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const PageControllerContext = createContext([
  { index: 0, showIndex: false, showAbout: false },
  { changeIndex(n: number){}, toggleTOC(){}, toggleAbout(){}},
]);

export function PageControllerProvider(props: {
  index: number;
  showIndex: boolean;
  showAbout: boolean;
  children: JSX.Element;
}) {
  const nav = useNavigate();

  const [state, setState] = createStore({

    /**
     * Current Page
     */
    index: props.index || 0,
    /**
     * Whether to show the table of contents
     */
    showIndex: props.showIndex || false,
    /**
     * Whether to show the about section
     */
    showAbout: props.showAbout || false

  });

  const PageController = [
    state,
    {
        changeIndex(n: number) { 
          setState( "index", n );
          nav(`/page/${n}`);
          console.log("debug: changed index")
        },
        toggleTOC() { setState( "showIndex", !state.showIndex ); console.log("debug: toggled index") },
        toggleAbout() { setState( "showAbout", !state.showAbout ); console.log("debug: toggled about") }
    }
  ]

  return (
    <PageControllerContext.Provider value={PageController}>
        {props.children}
    </PageControllerContext.Provider>
  )
}

export function usePageController() {
    const context = useContext(PageControllerContext);
    if (!context) {
        throw new Error("usePageController: cannot find a CounterContext")
    }
    return context;
}