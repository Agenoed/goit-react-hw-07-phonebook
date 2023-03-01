import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'redux/filterSlice';
import { contactsReducer } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
