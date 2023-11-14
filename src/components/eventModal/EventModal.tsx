import { Modal, DatePicker, Input, Checkbox, Form, Button } from "antd";

import { useEffect } from "react";

import { CustomEvent } from "../eventContext/EventContextProvider";
import dayjs, { Dayjs } from "dayjs";
import { useEventsContext } from "../../hooks";
import { v4 as uuidv4 } from "uuid";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

interface EventModalProps {
  type: "create" | "update";
  visible: boolean;
  start?: Date;
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
  const { type, visible, start, selectedEvent, onCancel } = props;
  const { addEvent, updateEvent, removeEvent } = useEventsContext();

  const isCreate = type === "create";

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
        if (isCreate) {
          addEvent({
            id: uuidv4(),
            start: values.dateRange?.[0].toDate(),
            end: values.dateRange?.[1].toDate(),
            desc: values.description,
            title: values.title,
          });
        }

        if (!isCreate && selectedEvent) {
          updateEvent({
            id: selectedEvent.id,
            start: values.dateRange?.[0].toDate(),
            end: values.dateRange?.[1].toDate(),
            desc: values.description,
            title: values.title,
          });
        }

        onModalClose();
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };

  const handleRemove = () => {
    removeEvent(selectedEvent!.id);
    onModalClose();
  };

  useEffect(() => {
    if (start) {
      form.setFieldValue("dateRange", [dayjs(start), undefined]);
    }
  }, [start]);

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
      title={isCreate ? "Update your event info" : "Fill in your event info"}
      onCancel={onModalClose}
      onOk={handleOk}
      footer={[
        <Button key="cancel" onClick={onModalClose}>
          Cancel
        </Button>,
        !isCreate && (
          <Button key="custom" danger type="primary" onClick={handleRemove}>
            Remove
          </Button>
        ),
        <Button key="ok" type="primary" onClick={handleOk}>
          {isCreate ? "Create" : "Update"}
        </Button>,
      ]}
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
