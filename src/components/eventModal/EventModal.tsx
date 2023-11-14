import { Modal, DatePicker, Input, Checkbox, Form } from "antd";

import { useEffect } from "react";
import { SlotInfo } from "react-big-calendar";
import { CustomEvent } from "../eventContext/EventContextProvider";
import dayjs, { Dayjs } from "dayjs";
import { useEventsContext } from "../../hooks";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

interface EventModalProps {
  visible: boolean;
  slotInfo?: SlotInfo;
  selectedEvent?: CustomEvent;
  onCancel: () => void;
}

interface FormData {
  title?: string;
  dateRange?: Dayjs[];
  description?: string;
  allDay?: boolean;
}

const EventModal = (props: EventModalProps) => {
  const { visible, slotInfo, selectedEvent, onCancel } = props;

  const [form] = Form.useForm<FormData>();
  const format = "YYYY-MM-DD HH:mm";

  const onModalClose = () => {
    form.resetFields();
    onCancel();
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Received values:", values);
        // Handle your form values here
        onModalClose();
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };

  useEffect(() => {
    if (slotInfo) {
      form.setFieldValue("dateRange", [dayjs(slotInfo.start), undefined]);
    }
  }, [slotInfo]);

  useEffect(() => {
    if (selectedEvent) {
      form.setFieldsValue({
        title: selectedEvent.title as string,
        dateRange: [dayjs(selectedEvent.start), dayjs(selectedEvent.end)],
        description: selectedEvent.desc,
        allDay: selectedEvent.allDay,
      });
    }
  }, [selectedEvent]);

  return (
    <Modal
      open={visible}
      title={
        selectedEvent ? "Update your event info" : "Fill in your event info"
      }
      onCancel={onModalClose}
      onOk={handleOk}
      okText={selectedEvent ? "Update" : "Create"}
    >
      <Form form={form} name="event_form">
        <Form.Item<FormData>
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input placeholder="Enter a title" />
        </Form.Item>
        <Form.Item<FormData>
          name="dateRange"
          label="Event Duration"
          rules={[{ required: true, message: "Please select the date range" }]}
        >
          <RangePicker showTime format={format} />
        </Form.Item>
        <Form.Item<FormData> name="description" label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item<FormData> name="allDay" valuePropName="checked">
          <Checkbox>All Day</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

// Export your modal component
export default EventModal;
