import { useState } from "react";
import EventModal from "../eventModal/EventModal";
import CustomCalendar from "./Calendar";
import { CustomEvent } from "../eventContext/EventContextProvider";
import { SlotInfo } from "react-big-calendar";

const CalendarView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [slotInfo, setSlotInfo] = useState<SlotInfo | undefined>();
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | undefined>();

  const onCreateEvent = (slot: SlotInfo) => {
    setIsVisible(true);
    setSlotInfo(slot);
  };

  const onUpdateEvent = (customEvent: CustomEvent) => {
    setIsVisible(true);
    setSelectedEvent(customEvent);
  };

  const onCloseModal = () => {
    setIsVisible(false);
    setSlotInfo(undefined);
    setSelectedEvent(undefined);
  };

  return (
    <div>
      <EventModal
        visible={isVisible}
        onCancel={() => onCloseModal()}
        slotInfo={slotInfo}
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
