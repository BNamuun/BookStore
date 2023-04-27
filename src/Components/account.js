import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
const numeral = require("numeral");

export function Account() {
  const { items } = useContext(CartContext);
  return (
    <>
      <table class="border-double border-4 border-sky-800 w-full my-1.5">
        <tbody>
          <tr className="border border-b-3">
            <td className=" pl-3">Банк:</td>
            <td className=" pl-3 font-bold">Хаан</td>
          </tr>
          <tr className="border border-b-3">
            <td className=" pl-3">Хүлээн авагчийн нэр:</td>
            <td className=" pl-3 font-bold">БатЭрдэнэ</td>
          </tr>
          <tr className="border border-b-3">
            <td className=" pl-3">Данс:</td>
            <td className=" pl-3 font-bold">5019-7164-77</td>
          </tr>
          <tr className="border border-b-3">
            <td className=" pl-3"> Дүн</td>
            <td className=" pl-3 font-bold">
              {" "}
              {numeral(
                items.reduce((total, cartItem) => {
                  const item = items.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              ).format("0,0 ")}{" "}
              ₮
            </td>
          </tr>
          <tr>
            <td className=" pl-3"> Гүйлгээний утга:</td>
            <td className=" pl-3 font-bold">Утасны дугаар</td>
          </tr>
        </tbody>
      </table>
      <div>
        <span>
          Та 24 цагийн дотор шилжүүлснээр таны захиалга амжилттай хийгдэнэ
        </span>
      </div>
    </>
  );
}
