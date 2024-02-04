import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { serachContact } from "../features/contact/contactSlice";
import SearchItem from "../componentss/SearchItem";

const Navbar = ({ toggle, doToggle }) => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.contacts.searchData);

  return (
    <>
      <div className="container-fluid p-3 bg-black">
        <nav className="navbar bg-info rounded-1">
          <div className="container-fluid ">
            <span className="navbar-brand mb-0 h1 text-light w-100 text-center ">
              All Contacts &nbsp;
              <button
                className="border border-0 bg-info text-light fs-2"
                onClick={() => doToggle()}
              >
                {!toggle ? <CiCirclePlus /> : <RxCross1 />}
              </button>
            </span>
          </div>
        </nav>

        <div className="d-flex w-100 justify-content-center p-2 mt-2">
          <form className="d-flex w-25" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Contact"
              aria-label="Search"
              onChange={(e) => {
                dispatch(serachContact(e.target.value));
              }}
            />
          </form>
        </div>
        {searchData.length > 0 &&
          searchData.map((item) => <SearchItem data={item} key={item.id} />)}
      </div>
    </>
  );
};

export default Navbar;
