import { Calendar, SlotInfo, luxonLocalizer } from "react-big-calendar";
import { useEventsContext } from "../../hooks";
import { DateTime } from "luxon";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useMemo } from "react";
import { CustomEvent } from "../eventContext/EventContextProvider";

const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 1 });

interface CustomCalendarProps {
  onCreateEvent?: (s: SlotInfo) => void;
  onUpdateEvent?: (event: CustomEvent) => void;
}

const CustomCalendar = (props: CustomCalendarProps) => {
  const { onCreateEvent, onUpdateEvent } = props;
  const { events } = useEventsContext();

  const defaultDate = useMemo(() => new Date(), []);
  const views = useMemo(() => ({ day: true, month: true, week: true }), []);

  console.log(events);
  return (
    <div>
      <Calendar
        selectable={true}
        defaultDate={defaultDate}
        views={views}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ minHeight: 500 }}
        onSelectEvent={(customEvent) => {
          if (onUpdateEvent) onUpdateEvent(customEvent);
        }}
        onSelectSlot={(s) => {
          if (onCreateEvent) onCreateEvent(s);
        }}
      />
    </div>
  );
};

export default CustomCalendar;
