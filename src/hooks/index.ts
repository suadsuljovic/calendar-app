import { useContext } from "react";
import { EventContext } from "../components/eventContext/EventContextProvider";

export const useEventsContext = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
