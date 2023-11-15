# Calendar app

## Libraries

- antd for components
- luxon and dayjs for dates
- react big calendar
- uuid for creating ids
- jest + react testing library for tests

## Running the project

Running project is easy by just installing dependencies

`npm i` then running `npm run dev`.

## Description

This project is build with vite + react + typescript.
The project have all the features requested finished.

The project is divided into folders that are self explanatory.

The project starts from [main.tsx](./src/main.tsx) file here you have [context](./src//components//eventContext//EventContextProvider.tsx) wrapped around [app](./src/app.tsx) component.

Context is build to be very simple and handles all the data changes in the application.

The app contains the layout of the application and contains conditionally rendered list or calendar view of the project.

All the changes to sate are saved to local storage, this happens in context functions for adding, removing and updating event state. The functions that do this are defined in [utils](./src/utils/index.ts) folder.

There are 3 hooks in [hooks](./src//hooks/index.ts) folder. All are build for reusability of code and are used in multiple places in the app.

The main logic of handling events is done in the [event modal](./src/components/eventModal/EventModal.tsx) component. It is used in both list and calendar view for creating, removing and updating events. I tried to make it as simple as possible but might have failed a little in that.

Depending on the type prop you know if its creating or updating the event. How this is done and what state is used for this can be found in [useEventModalActions](./src//hooks/index.ts) hook. This hooks handles creation of all the data and actions needed for the modal to work.

The CalendarView and ListView components are pretty simple and just use Event modal and useEventModalActions hook to handle creating, updating and deleting events.
