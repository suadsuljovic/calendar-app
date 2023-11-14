import { useState } from "react";
import EventList from "./components/eventList/EventList";
import CalendarView from "./components/calendarView/CalendarView";
import Navbar from "./components/navbar/Navbar";

import { Layout } from "antd";
import { ViewType } from "./types";

const { Content } = Layout;

const App = () => {
  const [viewType, setViewType] = useState<ViewType>("list");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar onItemChange={setViewType} />
      <Layout>
        <Content style={{ padding: "24px", minHeight: "100vh" }}>
          {viewType === "list" && <EventList />}
          {viewType === "calendar" && <CalendarView />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
