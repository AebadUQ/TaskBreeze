import React, { useState } from "react";
import {
  Layout,
  theme,
  Typography,
  Row,
  Col,
  Divider,
  Tooltip,
  Modal,
  Form,
  Button,
  Radio,
  Select,
  Input, Space
} from "antd";
import { FieldType, Task } from "../types";
import TaskCard from "../components/TaskCard";
import {
  CopyOutlined,
  FolderOpenOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import {  } from "antd";
const { Option } = Select;
const { Search } = Input;
const { Title, Paragraph } = Typography;
const { Content } = Layout;

interface AppProps {}

const ContentComponent: React.FC<AppProps> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const data: Task[] = [
    {
      taskName: "Api Integration",
      description: "This is a sample task description.",
      assignTo: "John Doe",
      status: "In Progress",
      priority: 0,
    },
    {
      taskName: "Sample Task",
      description: "This is a sample task description.",
      assignTo: "Aebad Quadir",
      status: "In Progress",
      priority: 1,
    },
    {
      taskName: "Sample Task",
      description: "This is a sample task description.",
      assignTo: "John Doe",
      status: "In Progress",
      priority: 2,
    },
    {
      taskName: "Sample Task",
      description: "This is a sample task description.",
      assignTo: "John Doe",
      status: "In Progress",
      priority: 1,
    },
  ];

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Content
        className="contentStyle"
        style={{
          background: colorBgContainer,
        }}
      >
        <Row>
          <Col span={24}>
            <Title level={3}>Task List</Title>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Search
              placeholder="Search Task"
              size="large"
              style={{ width: 250 }}
            />
          </Col>
          <Col xs={0} sm={12}>
            <Row justify={"end"}>
              <Space size={14}>
                <Tooltip placement="topLeft" title={"Copy"}>
                  <CopyOutlined className="optionIcon" />
                </Tooltip>
                <Tooltip placement="topLeft" title={"Local Storage"}>
                  <FolderOpenOutlined className="optionIcon" />
                </Tooltip>
                <PlusCircleFilled className="addTodoIcon" onClick={showModal} />
              </Space>
            </Row>
          </Col>
        </Row>
        <Divider style={{ border: "0px", marginBottom: 0 }} />
        <Row justify={"end"} align={"middle"}>
          <Col xs={24} sm={0}>
            <Row justify={"end"}>
              <Space size={14}>
                <Tooltip placement="topLeft" title={"Copy"}>
                  <CopyOutlined className="optionIcon" />
                </Tooltip>
                <Tooltip placement="topLeft" title={"Local Storage"}>
                  <FolderOpenOutlined className="optionIcon" />
                </Tooltip>
                <PlusCircleFilled className="addTodoIcon" onClick={showModal} />
              </Space>
            </Row>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <Row>
              {data?.map((task) => (
                <Col
                  xs={24}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={6}
                  xxl={6}
                  key={task.taskName}
                >
                  <TaskCard task={task} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
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
              <Option value="aebad">Aebad</Option>
              <Option value="ali">Ali</Option>
              <Option value="ahmed">Ahmed</Option>
            </Select>
          </Form.Item>

          <Paragraph>Status</Paragraph>

          <Form.Item<FieldType>
            name="status"
            rules={[{ required: true, message: "Please select an status" }]}
          >
            <Select>
              <Option value="0">To do</Option>
              <Option value="1">In progress</Option>
              <Option value="2">Completed</Option>
            </Select>
          </Form.Item>
          <Paragraph>Priority</Paragraph>

          <Form.Item<FieldType>
            name="priority"
            rules={[{ required: true, message: "Please select a priority" }]}
          >
            <Radio.Group>
              <Radio value="High">High</Radio>
              <Radio value="Medium">Medium</Radio>
              <Radio value="Low">Low</Radio>
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
    </>
  );
};

export default ContentComponent;
