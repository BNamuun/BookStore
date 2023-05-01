import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Select from "react-select";
export function OrderList() {
  const [data, setData] = useState();
  const options = [
    { value: "хүргэгдсэн", label: "Хүргэгдсэн" },
    { value: "хүргэлтэнд-гарсан", label: "Хүргэлтэнд гарсан" },
    { value: "төлбөр-хийгдcэн", label: "Төлбөр хийгдcэн" },
  ];
  function loadOrderData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/orderDetails/info`)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setData(data);
        } else {
          alert(`Aldaa garlaa : ${status}`);
        }
      });
  }

  useEffect(() => {
    loadOrderData();
  }, []);
  console.log({ data });
  if (!data) return null;
  return (
    <>
      <div className="max-w-screen-xl m-auto">
        <table className="m-7 border-separate border-spacing-2 border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 px-3">Утасны дугаар</th>
              <th className="border border-slate-300 px-3">Хүл/авагчийн нэр</th>
              <th className="border border-slate-300 px-3">Дүүрэг</th>
              <th className="border border-slate-300 px-3">Хаяг</th>
              <th className="border border-slate-300 px-3">Огноо</th>
              <th className="border border-slate-300 px-3">Төлбөр</th>
              <th className="border border-slate-300 px-3">Төлөв</th>
            </tr>
          </thead>
          <tbody>
            {data.map((one) => {
              return (
                <tr>
                  <td className="border border-slate-300 px-3">
                    {one.phoneNumber}
                  </td>
                  <td className="border border-slate-300 px-3">{one.name}</td>
                  <td className="border border-slate-300 px-3">
                    {one.district}
                  </td>
                  <td className="border border-slate-300 px-3">
                    {one.address}
                  </td>
                  <td className="border border-slate-300 px-3">{one.date}</td>
                  <td className="border border-slate-300 px-3">{one.fee}</td>
                  <td className="border border-slate-300 px-3">
                    {" "}
                    <Select options={options} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
