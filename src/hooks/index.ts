import { useContext, useEffect, useState } from "react";
import {
  CustomEvent,
  EventContext,
} from "../components/eventContext/EventContextProvider";
import { getEventsFromLocalStorage } from "../utils";

export const useEventsContext = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export const useEventModalActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalType, setModalType] = useState<"create" | "update">("create");
  const [start, setStart] = useState<Date | undefined>();
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | undefined>();

  const onCreateEvent = (start: Date) => {
    setIsVisible(true);
    setStart(start);
    setModalType("create");
  };

  const onUpdateEvent = (customEvent: CustomEvent) => {
    setIsVisible(true);
    setSelectedEvent(customEvent);
    setModalType("update");
  };

  const onCloseModal = () => {
    setIsVisible(false);
    setStart(undefined);
    setSelectedEvent(undefined);
  };

  return {
    isVisible,
    modalType,
    start,
    selectedEvent,
    onCreateEvent,
    onCloseModal,
    onUpdateEvent,
  };
};

export const useEventLocalStorage = () => {
  const { events, setEvents } = useEventsContext();
  const localEvents = getEventsFromLocalStorage();
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (events.length !== localEvents.length && firstLoad) {
      setEvents(localEvents);
      setFirstLoad(false);
    }
  }, []);
};
