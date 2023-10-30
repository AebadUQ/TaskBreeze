import EditModal from "./EditModal";
import React, { useState } from "react";
import { colors } from "../../common/theme";
import { useDispatch } from "react-redux";
import { CustomAvatar } from "../ui-components";
import { TaskCardProps, Task } from "../../types";
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
  Divider,
} from "antd";

const { Paragraph, Text } = Typography;

const CustomTitle: React.FC<{
  task: Task;

  copyToClipboard: any;
}> = ({ task, copyToClipboard }) => (
  <Row align={"middle"} justify={"space-between"}>
   

    <Row justify={"end"}>
      <Space size={10}>
        <CustomAvatar
          variant={"secondary"}
          icon={<CopyOutlined />}
          onClick={() => copyToClipboard(task)}
        />
         <Text>{task?.taskname}</Text>
      </Space>
     
    </Row>
  </Row>
);

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = (id: any) => {
    dispatch(deleteToDo(id));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (id: string | undefined) => {
    setIsModalOpen(true);
  };
  const copyToClipboard = (task: any) => {
    const textArea = document.createElement("textarea");

    textArea.value = task?.taskname;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };
  return (
    <>
      <Card
        title={<CustomTitle task={task} copyToClipboard={copyToClipboard} />}
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
          <Divider />
          <Row justify={"space-between"} style={{ width: "100%" }}>
            <Col>
              <Badge
                color={
                  task?.priority === "High"
                    ? colors.high
                    : task?.priority === "Medium"
                    ? colors.medium
                    : colors.low
                }
                count={task?.priority}
                size={"small"}
                style={{ height: 20, width: 55, padding: "2px 5px 0px 5px" }}
              />
            </Col>
            <Col>
              <Space size={10}>
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
            </Col>
          </Row>
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
