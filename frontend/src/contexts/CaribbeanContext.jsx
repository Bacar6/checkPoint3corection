import { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";

import api from "../services/api";

const caribbeanContext = createContext();

export function CaribbeanProvider({ children }) {
  const { Provider } = caribbeanContext;

  const [boats, setBoats] = useState([]);
  const [tiles, setTiles] = useState([]);

  const reloadTiles = () =>
    api.get("/tiles").then((response) => {
      setTiles(response.data);
    });
  const reloadBoats = () =>
    api.get("/boats?name=Black Pearl").then((response) => {
      setBoats(response.data);
    });

  useEffect(() => {
    reloadTiles();
    reloadBoats();
  }, []);

  return <Provider value={{ boats, reloadBoats, tiles }}>{children}</Provider>;
}

CaribbeanProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export const useCaribbean = () => useContext(caribbeanContext);
