import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const ListofItem = () => {
  const allData = useSelector((state) => state.contacts.contacts);

  return (
    <ul className="w-75">
      {allData.map((item, ind) => (
        <ItemList key={ind} data={item} index={ind}  />
      ))}
    </ul>
  );
};

export default ListofItem;
