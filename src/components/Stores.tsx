import { useEffect } from "react";
import { stores, type Brand } from "../stores";

interface Props {}

const Stores = ({}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      stores.brand.set({ name: "Example 2" });
    }, 100);
  });
  const brand: Brand = {
    name: "Example",
  };
  stores.brand.set(brand);
};

export default Stores;
