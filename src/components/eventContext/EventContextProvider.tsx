import { PropsWithChildren, createContext, useState } from "react";
import { Event } from "react-big-calendar";
import { setEventsToLocalStorage } from "../../utils";

export interface CustomEvent extends Event {
  id: string;
  desc?: string;
}

interface EventContextProps {
  events: CustomEvent[];
  updateEvent: (event: CustomEvent) => void;
  removeEvent: (eventId: string) => void;
  addEvent: (event: CustomEvent) => void;
  setEvents: React.Dispatch<React.SetStateAction<CustomEvent[]>>;
}

export const EventContext = createContext<EventContextProps>({
  events: [],
  addEvent: () => {},
  updateEvent: () => {},
  removeEvent: () => {},
  setEvents: () => {},
});

const EventsContextProvider = ({ children }: PropsWithChildren) => {
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const addEvent = (event: CustomEvent) => {
    setEvents([...events, event]);
    setEventsToLocalStorage([...events, event]);
  };

  const removeEvent = (eventId: string) => {
    const newEvents = events.filter((event) => !(event.id === eventId));
    setEvents(newEvents);
    setEventsToLocalStorage(newEvents);
  };

  const updateEvent = (event: CustomEvent) => {
    const newEvents = events.map((e) => {
      if (e.id === event.id) {
        return event;
      }

      return e;
    });

    setEvents(newEvents);
    setEventsToLocalStorage(newEvents);
  };

  return (
    <EventContext.Provider
      value={{ events, addEvent, removeEvent, updateEvent, setEvents }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventsContextProvider;
