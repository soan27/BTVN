import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
export default function LearnAPI() {
  const [listProduct, setlistProduct] = useState([]);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [editId, seteditId] = useState(null);
  const [isEdit, setisEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      let result = await axios.get(
        "https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS"
      );
      setLoading(false);
      setlistProduct(result.data);
    } catch (error) {
      alert("Loi API");
    }
  };
  const renderListProduct = (params) => {
    if (listProduct) {
      return listProduct.map((item, index) => {
        return (
          <div
            className="list-wrap"
            onClick={() => {
              setname(item.name);
              setdescription(item.description);
              setprice(item.price);
              setisEdit(true);
            }}
          >
            <p className="item-name">{item.name}</p>
            <div className="detail">
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
          </div>
        );
      });
    }
  };
  const deleteProduct = async (item) => {
    console.log("item ", item);
    try {
      setLoading(true);
      await axios.delete(
        `https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS/${item}`
      );
      setLoading(false);
      fetchData();
    } catch (error) {
      alert("Error API");
    }
  };
  const addProduct = async () => {
    try {
      setLoading(true);
      await axios.post(
        "https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS",
        {
          name: name,
          image: "https://loremflickr.com/320/240",
          price: price,
          description: description,
        }
      );
      setLoading(false);
      setname("");
      setdescription("");
      setprice("");
      fetchData();
    } catch (error) {
      alert("Loi API");
    }
  };

  const editProduct = async () => {
    try {
      await axios.put(
        `https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS/${editId}`,
        {
          name: name,
          image: "https://loremflickr.com/320/240",
          description: description,
          price: price,
        }
      );
      setname("");
      setdescription("");
      setprice("");
      fetchData();
      setisEdit(false);
      seteditId(null);
    } catch (error) {
      alert("Loi API");
    }
  };

  const onChangeName = (e) => {
    setname(e.target.value);
  };
  const onChangeDescription = (e) => {
    setdescription(e.target.value);
  };

  const onChangePrice = (e) => {
    setprice(e.target.value);
  };

  return (
    <div>
      <div>{renderListProduct()}</div>
      <div className="formData">
        {loading ? <Loading /> : null}
        <label htmlFor="">Name:</label>
        <input value={name} type="text" onChange={onChangeName} />
        <label htmlFor="">Description:</label>
        <input value={description} type="text" onChange={onChangeDescription} />
        <label htmlFor="">Price:</label>
        <input value={price} type="number" onChange={onChangePrice} />
        <button onClick={isEdit ? editProduct : addProduct}>
          {isEdit ? "Edit Product" : "Add Product"}
        </button>
      </div>
    </div>
  );
}
