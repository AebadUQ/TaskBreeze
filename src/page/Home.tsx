import React, { useState } from "react";
import {
  Layout,
  theme,
  Typography,
  Row,
  Col,
  Divider,
  Tooltip,
  Input,
  Space,
} from "antd";
import {
  CopyOutlined,
  FolderOpenOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import TaskCard from "../components/todoComponents/TaskCard";
import TaskModal from "../components/todoComponents/TaskModal";
const { Search } = Input;
const { Title } = Typography;
const { Content } = Layout;

interface AppProps {}

const ContentComponent: React.FC<AppProps> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const alltask = useSelector((state: any) => state.todoReducer.todoList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [row, setRow] = useState(alltask);
  React.useEffect(() => {
    setRow(alltask);
  }, [alltask]);
  const showModal = () => {
    setIsModalOpen(true);
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
              {row?.map((task: any) => (
                <Col
                  xs={24}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={6}
                  xxl={6}
                  key={task.id}
                >
                  <TaskCard task={task} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
      <TaskModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default ContentComponent;
