import React from "react";
import { Task, TaskCardProps } from '../types';
import { theme } from "../common/theme";

import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Avatar,
  Tooltip,
  Badge,
} from "antd";

const { Paragraph, Text } = Typography;
const CustomTitle: React.FC<{ taskName: string; priority: number }> = ({
  taskName,
  priority,
}) => (
  <Row align={"middle"}>
    <Col span={12}>
      <Row align={"middle"} justify={"start"}>
        <Badge
          color={
            priority === 0
              ? theme.high
              : priority === 1
              ? theme.medium
              : theme.low
          }
          size={"small"}
        />
        <Text>{taskName}</Text>
      </Row>
    </Col>
  </Row>
);

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { taskName, description, assignTo, status, priority } = task;

  return (
    <Card
      title={<CustomTitle taskName={taskName} priority={priority} />}
      className="taskCard"
    >
      <Row>
        <Col span={24}>
          <Text strong>Description</Text>
        </Col>
        <Col>
          <Paragraph>{description}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button className="taskStatus">
            <Text strong className="taskStatusTitle">
              {status}
            </Text>
          </Button>
        </Col>
        <Col span={12}>
          <Row justify={"end"}>
            <Tooltip placement="topLeft" title={assignTo}>
              <Avatar className="taskAvatar">
                {assignTo
                  .split(" ")
                  .reduce(
                    (mainLetters, word) => mainLetters + word[0].toUpperCase(),
                    ""
                  )}
              </Avatar>
            </Tooltip>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default TaskCard;
