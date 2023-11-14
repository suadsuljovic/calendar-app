import { PropsWithChildren, createContext, useState } from "react";
import { Event } from "react-big-calendar";

interface EventContextProps {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

export const EventContext = createContext<EventContextProps>({
  events: [],
  setEvents: () => {},
});

const EventsContextProvider = ({ children }: PropsWithChildren) => {
  const [events, setEvents] = useState<Event[]>([]);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventsContextProvider;
