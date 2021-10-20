import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [
    {
      id: 1,
      image: "./Images/tim.jpg",
      name: "okoduwa",
      email: "timmyleeokoduwa@gmail.com",
      phone: "0801177378392",
    },
    {
      id: 2,
      image: "images/gm.jpg",
      name: "daniel",
      email: "danieluzowurua@gmail.com",
      phone: "0807378368",
    },
  ],
  friend: [],
  business: [],
};

const Context2 = createSlice({
  name: "sliceName",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contact.push({ ...payload });
    },
    addFriend: (state, { payload }) => {
      const checkContact = state.friend.findIndex((el) => el.id === payload.id);
      if (checkContact >= 0) {
        state.friend[checkContact].QTY += 1;
      } else {
        state.friend.push({ ...payload, QTY: 1 });
      }
    },
    addBusiness: (state, { payload }) => {
      const checkContact = state.business.findIndex(
        (el) => el.id === payload.id
      );
      if (checkContact >= 0) {
        state.business[checkContact].QTY += 1;
      } else {
        state.business.push({ ...payload, QTY: 1 });
      }
    },
    removeFriend: (state, { payload }) => {
      state.friend = state.friend.filter((r) => r.id !== payload.id);
    },
    removeBusiness: (state, { payload }) => {
      state.business = state.business.filter((el) => el.id !== payload.id);
    },
  },
});

export const {
  addContact,
  addFriend,
  addBusiness,
  removeFriend,
  removeBusiness,
} = Context2.actions;
export default Context2.reducer;
