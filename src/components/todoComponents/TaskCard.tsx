import EditModal from "./EditModal";
import React, { useState } from "react";
import { colors } from "../../common/theme";
import { TaskCardProps } from "../../types";
import { useDispatch } from "react-redux";
import { CustomAvatar } from "../ui-components";
import { deleteToDo } from "../../redux/reducer/todoReducer";
import { DeleteOutlined, EditOutlined, CopyOutlined } from "@ant-design/icons";
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
  task: any;
  handleDeleteClick: any;
  handleEditClick: any;
  copyToClipboard: any;
}> = ({ task, handleDeleteClick, handleEditClick, copyToClipboard }) => (
  <Row align={"middle"}>
    <Col span={12}>
      <Row align={"middle"} justify={"start"}>
        <Badge
          color={
            task?.priority === "High"
              ? colors.high
              : task?.priority === "Medium"
              ? colors.medium
              : colors.low
          }
          size={"small"}
        />
        <Text>{task?.taskname}</Text>
      </Row>
    </Col>
    <Col span={12}>
      <Row justify={"end"}>
        <Space size={10}>
          <CustomAvatar
            variant={"secondary"}
            icon={<CopyOutlined />}
            onClick={() => copyToClipboard(task)}
          />

          <CustomAvatar
            variant={"primary"}
            icon={<EditOutlined />}
            onClick={() => handleEditClick(task?.id)}
          />
          <CustomAvatar
            variant={"secondary"}
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteClick(task?.id)}
          />
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
  const copyToClipboard = (task: any) => {
    const textArea = document.createElement("textarea");

    textArea.value = JSON.stringify(task);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };
  return (
    <>
      <Card
        title={
          <CustomTitle
            task={task}
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
            copyToClipboard={copyToClipboard}
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

      <EditModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        task={task}
      />
    </>
  );
};

export default TaskCard;
