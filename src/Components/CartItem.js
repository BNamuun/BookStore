import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import Stack from "react-bootstrap/Stack";
export function CartItem(data, quantity) {
  console.log("dta", data);
  const { removeItem } = useContext(CartContext);

  return (
    <Stack direction="horizontal" gap={2}>
      {/* <img
        src={data.item.images[0]?.path}
        alt="some "
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      /> */}
      {data && <h2>{data.data.title}</h2>}
    </Stack>
  );
}