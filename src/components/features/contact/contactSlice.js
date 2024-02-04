import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    visible: null,
    updateContact: { data: "", isEdit: false },
    searchData: [],
  },

  reducers: {
    createContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    visibleContact: (state, action) => {
      state.visible = action.payload;
    },
    notVisible: (state, action) => {
      state.visible = null;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((item) => {
        if (item.id !== action.payload) return item;
        else return;
      });
    },
    editContact: (state, action) => {
      state.updateContact = action.payload;
    },
    updatedContact: (state, action) => {
      state.contacts = state.contacts.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      state.updateContact = { data: "", isEdit: false };
    },
    serachContact: (state, action) => {
      state.searchData = [
        ...state.contacts.filter((item) => {
          if (
            item.name[0] === action.payload ||
            item.number === action.payload ||
            item.name[1] === action.payload
          ) {
            return item;
          }
        }),
      ];
    },
  },
});
export const {
  createContact,
  visibleContact,
  notVisible,
  deleteContact,
  editContact,
  updatedContact,
  serachContact,
} = contactSlice.actions;

export default contactSlice.reducer;
