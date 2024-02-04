import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaPen } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  editContact,
  visibleContact,
} from "../features/contact/contactSlice";

const ItemList = ({ data, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-100 bg-light d-flex rounded-1 p-2 mb-5 justify-content-between align-items-center">
      <div className="d-flex w-50 justify-content-center align-items-center">
        <div className="d-flex justify-content-evenly w-100 align-items-center">
          <p>{index + 1}</p>

          <div className="d-flex align-items-center justify-content-between">
            <h4 className="fs-1 me-3">
              <CgProfile />
            </h4>

            <div>
              <h6>{`${data.name[0]} ${data.name[1]}`}</h6>
              <h6>{data.number}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-evenly align-items-center w-25">
        <button
          className="border border-0 text-dark bg-light fs-3"
          onClick={() => dispatch(visibleContact(data))}
        >
          <IoEye />
        </button>

        <button
          className="border border-0 text-dark bg-light fs-3"
          onClick={() => {
            dispatch(deleteContact(data.id));
          }}
        >
          <MdDelete />
        </button>

        <button
          className="border border-0 text-dark bg-light fs-4"
          onClick={() => {
            dispatch(editContact({ data, isEdit: true }));
          }}
        >
          <FaPen />
        </button>
      </div>
    </div>
  );
};

export default ItemList;
