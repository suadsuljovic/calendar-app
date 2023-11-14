import { Calendar, luxonLocalizer } from "react-big-calendar";
import { useEventsContext } from "../../hooks";
import { DateTime, Settings } from "luxon";

import "react-big-calendar/lib/css/react-big-calendar.css";

// only use `Settings` if you require optional time zone support
Settings.defaultZone = "America/Los_Angeles";
// end optional time zone support

const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 7 });

const CustomCalendar = () => {
  const { events } = useEventsContext();

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CustomCalendar;
