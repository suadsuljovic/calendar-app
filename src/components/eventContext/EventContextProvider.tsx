import { PropsWithChildren, createContext, useState } from "react";
import { Event } from "react-big-calendar";

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
  const [events, setEvents] = useState<CustomEvent[]>([
    {
      id: "1",
      title: "Meeting",
      start: new Date(2023, 10, 11, 10, 30, 0, 0),
      end: new Date(2023, 10, 11, 12, 30, 0, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
  ]);

  const addEvent = (event: CustomEvent) => {
    setEvents([...events, event]);
  };

  const removeEvent = (eventId: string) => {
    const newEvents = events.filter((event) => !(event.id === eventId));
    setEvents(newEvents);
  };

  const updateEvent = (event: CustomEvent) => {
    const newEvents = events.map((e) => {
      if (e.id === event.id) {
        return event;
      }

      return e;
    });

    setEvents(newEvents);
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
