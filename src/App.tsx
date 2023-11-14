import { useState } from "react";
import EventList from "./components/eventList/EventList";
import CalendarView from "./components/calendarView/CalendarView";
import Navbar from "./components/navbar/Navbar";

import { Layout } from "antd";
import { ViewType } from "./types";

import styles from "./app.module.css";

const { Content } = Layout;

const App = () => {
  const [viewType, setViewType] = useState<ViewType>("list");

  return (
    <Layout className={styles.layout}>
      <Navbar onItemChange={setViewType} />
      <Layout>
        <Content className={styles.content}>
          {viewType === "list" && <EventList />}
          {viewType === "calendar" && <CalendarView />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
