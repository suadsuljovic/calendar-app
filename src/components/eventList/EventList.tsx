import { useEventsContext } from "../eventContext/EventContext";
import EventListItem from "./EventListItem";

const EventList = () => {
  const { events } = useEventsContext();
  return (
    <div>
      {events.map((event) => (
        <EventListItem id={event.id} name={event.name} />
      ))}
    </div>
  );
};

export default EventList;
