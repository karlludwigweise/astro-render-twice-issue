import { stores, type Brand } from "../stores";

interface Props {
  brand: Brand;
}

const Component = ({ brand }: Props) => {
  return <div>{brand.name}</div>;
};

export default Component;
