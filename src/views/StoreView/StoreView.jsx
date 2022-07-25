import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import * as api from "../../servises/api.js";
import { Title, List } from "./StoreView.styled.js";

export default function StoreView() {
  const [order, setOrder] = useState(null);
  const [orderId, setOrderId] = useState("");

  const fetchOrder = async (orderId) => {
    const { data } = await api.getOrder(orderId);
    return data;
  };

  useEffect(() => {
    if (!orderId) {
      return;
    }
    fetchOrder(orderId).then((data) => setOrder(data));
  }, [orderId]);

  const onClick = (request) => {
    setOrderId(request);
  };

  return (
    <>
      <Title>Find info</Title>
      <SearchBar onClick={onClick} />
      {order && (
        <List>
          {Object.entries(order).map((arr) => (
            <li key={arr[0]}>
              <span>{arr[0]}: </span>
              <span>{arr[1]}</span>
            </li>
          ))}
        </List>
      )}
    </>
  );
}
