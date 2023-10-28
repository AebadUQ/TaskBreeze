import { Avatar } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { CustomAvatarProps } from "../../types";
const CustomAvatar: React.FC<CustomAvatarProps> = ({
  variant,
  onClick,
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const avatarStyle: React.CSSProperties = {
    transition: "all 0.3s",
    color: "#091f3c",
    backgroundColor: variant === "primary" ? "#e2e5e8" : "#e6f4f1",
  };

  if (isHovered) {
    avatarStyle.backgroundColor = variant === "primary" ? "#091f3c" : "#279d85";
    avatarStyle.color = variant === "primary" ? "white" : "white";
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Avatar
        shape="square"
        icon={icon || <UserOutlined />}
        style={avatarStyle}
        onClick={onClick}
      />
    </div>
  );
};

export default CustomAvatar;
