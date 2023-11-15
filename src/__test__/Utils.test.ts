import {
  getEventsFromLocalStorage,
  setEventsToLocalStorage,
} from "../utils/index";

const mockEvents = [
  { id: "1", title: "Event 1", desc: "Description 1" },
  { id: "2", title: "Event 2", desc: "Description 2" },
];

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
});

describe("getEventsFromLocalStorage", () => {
  it("returns an empty array when localStorage is empty", () => {
    const result = getEventsFromLocalStorage();
    expect(result).toEqual([]);
  });

  it("returns events from localStorage", () => {
    localStorage.setItem("events", JSON.stringify(mockEvents));

    const result = getEventsFromLocalStorage();
    expect(result).toEqual(mockEvents);
  });
});

describe("setEventsToLocalStorage", () => {
  it("sets events to localStorage", () => {
    setEventsToLocalStorage(mockEvents);

    const storedData = JSON.parse(localStorage.getItem("events") || "[]");
    expect(storedData).toEqual(mockEvents);
  });
});
