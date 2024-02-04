import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { notVisible } from "../features/contact/contactSlice";

const ViewContactDetails = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.contacts.visible);

  return (
    <div
      className={visible ? "container bg-white p-3 mt-3 rounded-2" : "d-none"}
    >
      <div className="d-flex w-100 justify-content-between">
        <h1 className="text-secondary">Contact Details</h1>
        <button
          className="border border-0 text-dark bg-white fs-4"
          onClick={() => dispatch(notVisible())}
        >
          <RxCross1 />
        </button>
      </div>

      <hr />

      <div className="w-100 d-flex justify-content-center shadow-lg rounded-1">
        <div className="text-end">
          <h5 className="text-end">Name :</h5>
          <h5 className="text-end">Email :</h5>
          <h5 className="text-end">Number :</h5>
          <h5 className="text-end">Address :</h5>
        </div>

        <div className="">
          <h5 className="ms-3">
            {visible && `${visible.name[0]} ${visible.name[1]}`}
          </h5>
          <h5 className="ms-3">{visible && visible.email}</h5>
          <h5 className="ms-3">{visible && visible.number}</h5>
          <h5 className="ms-3">{visible && visible.address}</h5>
        </div>
      </div>
    </div>
  );
};

export default ViewContactDetails;
