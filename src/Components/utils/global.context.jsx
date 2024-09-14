import { createContext,  useContext, useEffect, useReducer, useMemo } from "react";
import axios from "axios";
import { reducer } from "../../reducers/reducer";

export const ContextGlobal = createContext(undefined);

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
    theme: localStorage.getItem('theme') || "light",
    chars: [],
    favs: lsFavs,
    loading: true,
  }

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchChars = async () => {
      try {
        const res = await axios.get(url);
        dispatch({ type: "GET_CHARS", payload: res.data });
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchChars();
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const contextValue = useMemo(() => ({
    state,
    dispatch,
    changeTheme: () => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      dispatch({ type: "CHANGE_THEME", payload: newTheme });
    }
  }), [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useCharStates = () => useContext(ContextGlobal);