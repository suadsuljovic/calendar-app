import EventListItem from "./EventListItem";
import { useEventsContext } from "../../hooks";

const EventList = () => {
  const { events } = useEventsContext();
  return (
    <div>
      {events.map((event) => (
        <EventListItem title={event.title} />
      ))}
    </div>
  );
};

export default EventList;
