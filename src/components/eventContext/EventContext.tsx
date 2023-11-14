import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Event } from "../../types";

interface EventContextProps {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const EventContext = createContext<EventContextProps>({
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

export const useEventsContext = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default EventsContextProvider;
