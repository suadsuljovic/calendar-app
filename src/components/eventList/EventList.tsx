import EventListItem from "./EventListItem";
import { useEventsContext } from "../../hooks";

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
