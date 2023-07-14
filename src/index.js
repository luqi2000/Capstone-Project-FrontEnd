import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from "react-dom/client";

import store, { persistor } from "./redux/store";
import App from "./App";

const root = createRoot(document.getElementById("root")); // Use createRoot instead of ReactDOM.render
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
