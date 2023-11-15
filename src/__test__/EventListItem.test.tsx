import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import EventListItem from "../components/eventList/EventListItem";

const mockEvent = {
  id: "1",
  title: "Test Event",
  desc: "Description for the test event",
};

describe("EventListItem", () => {
  it("renders event details correctly", () => {
    const { getByText } = render(<EventListItem event={mockEvent} />);
    expect(getByText("Test Event")).toBeInTheDocument();
    expect(getByText("Description for the test event")).toBeInTheDocument();
  });

  it("calls onUpdateEvent when card is clicked", () => {
    const mockOnUpdateEvent = jest.fn();
    const { getByText } = render(
      <EventListItem event={mockEvent} onUpdateEvent={mockOnUpdateEvent} />
    );

    fireEvent.click(getByText("Test Event"));

    expect(mockOnUpdateEvent).toHaveBeenCalledWith(mockEvent);
  });
});
