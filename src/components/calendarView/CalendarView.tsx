import EventModal from "../eventModal/EventModal";
import CustomCalendar from "./Calendar";

import { useEventModalActions } from "../../hooks";

const CalendarView = () => {
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
      <CustomCalendar
        onCreateEvent={onCreateEvent}
        onUpdateEvent={onUpdateEvent}
      />
    </div>
  );
};
export default CalendarView;
