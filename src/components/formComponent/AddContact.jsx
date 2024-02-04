import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  createContact,
  updatedContact,
} from "../features/contact/contactSlice";

const AddContact = ({ toggle, doToggle }) => {
  const dispatch = useDispatch();
  const updateContact = useSelector((state) => state.contacts.updateContact);

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handleState = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateContact.isEdit) {
      dispatch(updatedContact({ ...data, name: data.name.split(" ") }));
    } else {
      dispatch(
        createContact({
          ...data,
          name: data.name.split(" "),
          id: crypto.randomUUID(),
        })
      );
    }
    setData({
      name: "",
      email: "",
      address: "",
      number: "",
    });
  };
  useEffect(() => {
    if (updateContact.isEdit) {
      setData({
        id: updateContact.data.id,
        name: updateContact.data.name.join(" "),
        email: updateContact.data.email,
        number: updateContact.data.number,
        address: updateContact.data.address,
      });
      // nameData = `${updateContact.data.name[0]} ${updateContact.data.name[1]}`;
    }
  }, [updateContact]);

  return (
    <div className={toggle ? "container bg-white p-3 rounded-2" : "d-none"}>
      <div className="d-flex w-100 justify-content-between">
        <h1 className="text-secondary">
          {!updateContact.isEdit ? "Add Contact" : "Edit Contact"}
        </h1>
        <button
          className="border border-0 text-dark bg-white fs-4"
          onClick={() => doToggle()}
        >
          <RxCross1 />
        </button>
      </div>

      <hr />
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <form className="w-50 " onSubmit={(e) => handleSubmit(e)}>
          <label className="text-dark">Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="form-control rounded-0 my-3"
            required
            value={data.name}
            name="name"
            onChange={(e) => handleState(e)}
          />

          <label className="text-dark">Email:</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="form-control rounded-0 my-3"
            required
            value={data.email}
            name="email"
            onChange={(e) => handleState(e)}
          />

          <label className="text-dark">Phone Number:</label>
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            className="form-control rounded-0 my-3"
            required
            value={data.number}
            name="number"
            onChange={(e) => handleState(e)}
          />

          <label className="text-dark">Address:</label>
          <input
            type="text"
            placeholder="Enter Your Address"
            className="form-control rounded-0 my-3"
            required
            value={data.address}
            name="address"
            onChange={(e) => handleState(e)}
          />

          {/* <div className="w-50"> */}
          <button type="submit" className="btn btn-primary me-3">
            {!updateContact.isEdit ? "Submit" : "Update"}
          </button>
          <button type="reset" className="btn btn-dark">
            Reset
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default AddContact;
