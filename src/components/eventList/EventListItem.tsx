import { Card } from "antd";

import { CustomEvent } from "../eventContext/EventContextProvider";

type EventListItemProps = {
  event: CustomEvent;
  onUpdateEvent?: (customEvent: CustomEvent) => void;
};

const EventListItem = (props: EventListItemProps) => {
  const { event, onUpdateEvent } = props;
  return (
    <Card
      type="inner"
      title={event.title}
      hoverable
      onClick={() => {
        if (onUpdateEvent) onUpdateEvent(event);
      }}
    >
      {event.desc}
    </Card>
  );
};

export default EventListItem;
