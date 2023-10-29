import { Avatar } from "antd";
import React, { useState } from "react";
import { CustomAvatarProps } from "../../types";
import { UserOutlined } from "@ant-design/icons";
import { colors } from '../../common/theme';
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
    color: colors.primary,
    backgroundColor: variant === "primary" ? colors?.lightgreen : colors.lightgrey,
  };

  if (isHovered) {
    avatarStyle.backgroundColor = variant === "primary" ? colors.primary : colors?.secondary;
    avatarStyle.color = variant === "primary" ? colors?.white : colors?.white;
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
