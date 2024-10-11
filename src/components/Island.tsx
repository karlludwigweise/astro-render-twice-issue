import { useStore } from "@nanostores/react";
import { stores } from "../stores";
import Component from "./Component";

const Island = () => {
  const brand = useStore(stores.brand);

  if (!brand) return null;

  return <Component brand={brand} />;
};

export default Island;
