import { Next } from "./Next";

export function Logo(props: JSX.IntrinsicElements["img"]) {
  return <img src="/logo.png" alt="Logo" style={{"height": "40px"}} {...props} />;
}

Logo.Next = Next;
