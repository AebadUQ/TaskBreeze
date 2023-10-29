import React, { useState } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Divider,
  Tooltip,
  Input,
  Space,
  Empty,
  theme,
  Radio,
} from "antd";
import {
  CopyOutlined,
  FolderOpenOutlined,
  PlusCircleFilled,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { colors } from "../common/theme";
import { useSelector } from "react-redux";
import { Task } from "../types";
import TaskCard from "../components/todoComponents/TaskCard";
import TaskModal from "../components/todoComponents/TaskModal";
const { Title } = Typography;
const { Content } = Layout;

interface AppProps {}

const ContentComponent: React.FC<AppProps> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const alltask = useSelector((state: any) => state.todoReducer.todoList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [row, setRow] = useState(alltask);
  const [selectedValue, setSelectedValue] = useState("all");
  React.useEffect(() => {
    setRow(alltask);
  }, [alltask]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleSearch = (value: string) => {
    const newString = value;

    if (newString !== "") {
      const newRows = alltask?.filter((row: any) => {
        let matches = true;
        const properties = ["taskname"];
        let containsQuery = false;
        properties.forEach((property) => {
          if (
            row[property]
              .toString()
              .toLowerCase()
              .includes(newString?.toString().toLowerCase())
          ) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          matches = false;
        }
        return matches;
      });
      setRow(newRows);
    } else {
      setRow(alltask);
    }
  };
  const handleRadioChange = (e:any) => {
    setSelectedValue(e.target.value);
    const filtered = alltask.filter((task:Task) => task.status === e.target.value);
    setRow(filtered);
    if (e.target.value === "all") {
      setRow(alltask);
    }
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
            <Title level={3}>Task List </Title>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Input
              placeholder="Search Tasks"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              style={{ width: 270 }}
              suffix={
                <SearchOutlined
                  style={{ color: colors?.secondary, fontSize: 18 }}
                />
              }
            />
          </Col>
          <Col xs={0} sm={12}>
            <Row justify={"end"}>
              <Space size={14}>
                <Tooltip placement="topLeft" title={"Filter"}>
                  <FilterOutlined
                    className="optionIcon"
                    onClick={() => {
                      
                      setShow(!show)
                      if(show===true){
                        setRow(alltask)
                        setSelectedValue("all")
                      }
                    }}
                  />
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
        {show ? (
          <Row justify={"end"}>
            <Radio.Group onChange={handleRadioChange} value={selectedValue}>
              <Radio value="all">All</Radio>

              <Radio value="To do">To do</Radio>
              <Radio value="In progress">In progress</Radio>
              <Radio value="Completed">Completed</Radio>
            </Radio.Group>
          </Row>
        ) : null}
        <Row>
          <Col span={24}>
            <Row>
              {row && row.length > 0 ? (
                row.map((task: Task) => (
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
                ))
              ) : (
                <Col span={24}>
                  <Empty description="No tasks found" />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Content>
      <TaskModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default ContentComponent;
