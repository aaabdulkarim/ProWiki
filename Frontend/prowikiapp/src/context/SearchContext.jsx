import { createContext, createSignal, useContext } from "solid-js";

export const SearchContext = createContext()

export function SearchContextProvider(props) {
  const [keyword, setKeyword] = createSignal("")

  return (
    <SearchContext.Provider value={{keyword, setKeyword}}>
      {props.children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  return useContext(SearchContext)
}

