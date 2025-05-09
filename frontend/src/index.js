import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProviderWithToggle } from "./components/context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <ThemeProviderWithToggle> */}
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  {/* </ThemeProviderWithToggle> */}
  </React.StrictMode>
);
