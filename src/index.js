import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AutoStore from './store/AutoStore';
import UserStore from './store/UserStore';
import BookingStore from './store/bookingStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      auto: new AutoStore(),
      user: new UserStore(),
      booking: new BookingStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

