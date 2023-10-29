import { Avatar } from "antd";
import React, { useState } from "react";
import { CustomAvatarProps } from "../../types";
import { UserOutlined } from "@ant-design/icons";
import { theme } from '../../common/theme';
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
    color: theme.primary,
    backgroundColor: variant === "primary" ? theme?.lightgreen : theme.lightGrey,
  };

  if (isHovered) {
    avatarStyle.backgroundColor = variant === "primary" ? theme.primary : theme?.secondary;
    avatarStyle.color = variant === "primary" ? theme?.white : theme?.white;
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
