import React from "react";
import {
  Typography,
  Divider,
  Modal,
  Form,
  Button,
  Radio,
  Select,
  Input,
} from "antd";
import { FieldType } from "../../types";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/reducer/todoReducer";
const { Option } = Select;
const { Paragraph } = Typography;

const TaskModal: React.FC<{
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}> = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    dispatch(addToDo(values));
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Add Task"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Divider />
        <Paragraph>Task Name</Paragraph>
        <Form.Item<FieldType>
          name="taskname"
          rules={[{ required: true, message: "Please input your Task Name" }]}
        >
          <Input />
        </Form.Item>
        <Paragraph>Assign To</Paragraph>
        <Form.Item<FieldType>
          name="assignto"
          rules={[{ required: true, message: "Please select an assignee" }]}
        >
          <Select>
            <Option value="Aebad ul quadir">Aebad ul quadir</Option>
            <Option value="Abdul Qadir">Abdul Qadir</Option>
            <Option value="Asad Khan">Asad Khan</Option>
          </Select>
        </Form.Item>

        <Paragraph>Status</Paragraph>

        <Form.Item<FieldType>
          name="status"
          rules={[{ required: true, message: "Please select an status" }]}
        >
          <Select>
            <Option value="To do">To do</Option>
            <Option value="In progress">In progress</Option>
            <Option value="Completed">Completed</Option>
          </Select>
        </Form.Item>
        <Paragraph>Priority</Paragraph>

        <Form.Item<FieldType>
          name="priority"
          rules={[{ required: true, message: "Please select a priority" }]}
        >
          <Radio.Group>
            <Radio value="Low">Low</Radio>
            <Radio value="Medium">Medium</Radio>
            <Radio value="High">High</Radio>
          </Radio.Group>
        </Form.Item>
        <Paragraph>Description</Paragraph>
        <Form.Item<FieldType>
          name="description"
          rules={[
            { required: true, message: "Please input your Description!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="todoFormBtn">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskModal;
