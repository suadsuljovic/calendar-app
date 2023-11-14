import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import EventsContextProvider from "./components/eventContext/EventContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EventsContextProvider>
      <App />
    </EventsContextProvider>
  </React.StrictMode>
);
