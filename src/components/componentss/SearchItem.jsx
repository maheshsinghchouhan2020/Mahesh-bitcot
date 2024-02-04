import React from "react";
import { CgProfile } from "react-icons/cg";
import { deleteContact, editContact, visibleContact } from "../features/contact/contactSlice";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const SearchItem = ({ data }) => {

  const dispatch = useDispatch();

  return (
<div className="d-flex align-items-center justify-content-center bg-light rounded-1 mt-3 mb-5">
      <div className="d-flex w-50 justify-content-center align-items-center ">
        <div className="d-flex justify-content-evenly w-100 align-items-center">
          <p>1</p>

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

export default SearchItem;
