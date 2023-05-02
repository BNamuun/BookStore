import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDebounce } from "use-debounce";
export function OrderList() {
  const [data, setData] = useState();
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);
  const [list, setFilteredList] = useState([]);
  const [selected, setSelected] = useState(null);
  const options = [
    { value: "хүргэгдсэн", label: "Хүргэгдсэн" },
    { value: "хүргэлтэнд-гарсан", label: "Хүргэлтэнд гарсан" },
    { value: "төлбөр-хийгдcэн", label: "Төлбөр хийгдcэн" },
    { value: "Цуцлагдсан", label: "Цуцлагдсан" },
    { value: "Төлбөр-төлөөгүй", label: "Төлбөр төлөөгүй" },
  ];
  console.log(selected);
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
  console.log("list", list);
  function handleSearch(searchedQuery) {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/orderDetails/infos?q=${searchedQuery}`
      )
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setData(data);
          console.log(data);
        } else {
          alert(`Aldaa garlaa: ${status}`);
        }
      });
  }
  useEffect(() => {
    handleSearch(searchedQuery);
  }, [searchedQuery]);
  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  function handleSaveSelect(id, selected) {
    console.log({ id, selected });
    axios
      .put(`${process.env.REACT_APP_API_URL}/orderDetails/${id}`, {
        selected: selected.label,
      })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          loadOrderData();
          alert(`Amjilttai`);
        }
      });
  }
  if (!data) return null;
  return (
    <>
      <div className="max-w-screen-xl m-auto">
        <Form className="d-flex mt-5">
          <Form.Control
            type="search"
            placeholder="Утасны дугаараар хайх"
            className="me-2"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="outline-success"
            onClick={(e) => handleSearch(searchedQuery)}
          >
            Search
          </Button>
        </Form>
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
                  <td className="border border-slate-300 px-3">{one.status}</td>
                  <td className="border border-slate-300 px-3">
                    {" "}
                    <Select
                      options={options}
                      onChange={handleChange}
                      autoFocus={true}
                      defaultValue={options.find(
                        (option) => option.value === one.status
                      )}
                    />
                  </td>

                  <Button onClick={(e) => handleSaveSelect(one._id, selected)}>
                    {" "}
                    save
                  </Button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
