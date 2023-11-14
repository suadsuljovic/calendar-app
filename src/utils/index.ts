import { CustomEvent } from "../components/eventContext/EventContextProvider";

export const getEventsFromLocalStorage = () => {
  let events = localStorage.getItem("events");

  if (events) {
    events = JSON.parse(events);
    return events as unknown as CustomEvent[];
  }

  return [];
};

export const setEventsToLocalStorage = (events: CustomEvent[]) => {
  localStorage.setItem("events", JSON.stringify(events));
};
