import React from "react";
import { type Brand } from "../stores";

interface Props {
  brand: Brand;
}

const Component = ({ brand }: Props) => {
  const [state, setState] = React.useState(false);

  return (
    <div>
      <div>Brand Name: {brand.name}</div>
      <div>
        Interaction: <button onClick={() => setState(!state)}> Toggle</button>
        {state === true ? "true" : "false"}
      </div>
    </div>
  );
};

export default Component;
