import { PropsWithChildren, createContext, useState } from "react";
import { Event } from "react-big-calendar";

export interface CustomEvent extends Event {
  id: string;
  desc?: string;
}

interface EventContextProps {
  events: CustomEvent[];
  setEvents: React.Dispatch<React.SetStateAction<CustomEvent[]>>;
}

export const EventContext = createContext<EventContextProps>({
  events: [],
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

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventsContextProvider;
