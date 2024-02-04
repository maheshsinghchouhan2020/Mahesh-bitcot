import React from "react";
import { useSelector } from "react-redux";
import List from "../componentss/List";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);

  return (
    <div className="d-flex justify-content-center ">
      <List  />
    </div>
  );
};

export default ContactList;
