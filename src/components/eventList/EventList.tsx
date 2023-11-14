import EventListItem from "./EventListItem";
import { useEventModalActions, useEventsContext } from "../../hooks";
import { Button, Divider } from "antd";
import EventModal from "../eventModal/EventModal";

const EventList = () => {
  const { events } = useEventsContext();
  const {
    isVisible,
    modalType,
    start,
    selectedEvent,
    onCreateEvent,
    onUpdateEvent,
    onCloseModal,
  } = useEventModalActions();

  return (
    <div>
      <EventModal
        type={modalType}
        visible={isVisible}
        onCancel={() => onCloseModal()}
        start={start}
        selectedEvent={selectedEvent}
      />

      <Button type="primary" onClick={() => onCreateEvent(new Date())}>
        Create event
      </Button>
      <Divider />
      {events.map((event, index) => (
        <EventListItem
          key={index}
          event={event}
          onUpdateEvent={onUpdateEvent}
        />
      ))}
    </div>
  );
};

export default EventList;
