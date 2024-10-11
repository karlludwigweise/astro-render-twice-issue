import { stores, type Brand } from "../stores";

interface Props {}

const Stores = ({}: Props) => {
  const brand: Brand = {
    name: "Example",
  };
  stores.brand.set(brand);
};

export default Stores;
