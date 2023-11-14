type EventListItemProps = {
  id: string;
  name: string;
};
const EventListItem = (props: EventListItemProps) => {
  const { id, name } = props;
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
};

export default EventListItem;
