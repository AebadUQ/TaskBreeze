import EditModal from "./EditModal";
import React, { useState } from "react";
import { theme } from "../../common/theme";
import { TaskCardProps } from "../../types";
import { useDispatch } from "react-redux";
import { CustomAvatar } from "../ui-components";
import { deleteToDo } from "../../redux/reducer/todoReducer";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Avatar,
  Tooltip,
  Badge,
  Space,
} from "antd";

const { Paragraph, Text } = Typography;

const CustomTitle: React.FC<{
  id: string | any;
  taskname: string;
  priority: string;
  handleDeleteClick: any;
  handleEditClick: any;
}> = ({ id, taskname, priority, handleDeleteClick, handleEditClick }) => (
  <Row align={"middle"}>
    <Col span={12}>
      <Row align={"middle"} justify={"start"}>
        <Badge
          color={
            priority === "High"
              ? theme.high
              : priority === "Medium"
              ? theme.medium
              : theme.low
          }
          size={"small"}
        />
        <Text>{taskname}</Text>
      </Row>
    </Col>
    <Col span={12}>
      <Row justify={"end"}>
        <Space size={10}>
          <CustomAvatar variant={"secondary"} icon={<EditOutlined />} onClick={() => handleEditClick(id)} />
          <CustomAvatar variant={"primary"} icon={<DeleteOutlined />} onClick={() => handleDeleteClick(id)} />
        </Space>
      </Row>
    </Col>
  </Row>
);

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = (id: string) => {
    dispatch(deleteToDo(id));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (id: string) => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Card
        title={
          <CustomTitle
            id={task?.id}
            taskname={task?.taskname}
            priority={task?.priority}
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
          />
        }
        className="taskCard"
      >
        <Row>
          <Col span={24}>
            <Text strong>Description</Text>
          </Col>
          <Col>
            <Paragraph className="todoCardDesc">{task?.description}</Paragraph>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button className="taskStatus">
              <Text strong className="taskStatusTitle">
                {task?.status}
              </Text>
            </Button>
          </Col>
          <Col span={12}>
            <Row justify={"end"}>
              <Tooltip placement="topLeft" title={task?.assignto}>
                <Avatar className="taskAvatar">
                  {task.assignto
                    .split(" ")
                    .map((word) => word[0].toUpperCase())
                    .join("")}
                </Avatar>
              </Tooltip>
            </Row>
          </Col>
        </Row>
      </Card>
      
      <EditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} task={task}/>
    </>
  );
};

export default TaskCard;

