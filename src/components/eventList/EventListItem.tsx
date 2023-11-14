import { PropsWithChildren } from "react";
import { Event } from "react-big-calendar";

type EventListItemProps = PropsWithChildren<Event>;

const EventListItem = (props: EventListItemProps) => {
  const { title } = props;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default EventListItem;
