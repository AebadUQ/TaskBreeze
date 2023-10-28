import React from "react";
import {
  MailFilled,
  SettingOutlined,
  BellFilled,
  LinkedinFilled,
  GithubFilled,
  EllipsisOutlined
} from "@ant-design/icons";
import { CustomAvatar } from "./ui-components";
import { SocialMediaLink } from "../types";
import TaskBreezLogo from "../assets/images/taskbreezlogo.jpg";
import { Row, Col, Avatar, Image, Layout, Menu, Dropdown, Tag, Space  } from "antd";

const { Header } = Layout;


const HeaderComponent: React.FC = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    {
      icon: <LinkedinFilled />,
      url: "https://www.linkedin.com/in/your-linkedin-profile",
      variant: "primary",
    },
    {
      icon: <GithubFilled />,
      url: "https://github.com/your-github-profile",
      variant: "secondary",
    },
    {
      icon: <MailFilled />,
      url: "mailto:your-email@example.com",
      variant: "primary",
    },
  ];
  const SmallScreenMenu = (
    <Menu mode="horizontal">
      {socialMediaLinks.map((item, index) => (
        <Menu.Item key={index}>
          {item.url.startsWith("mailto:") ? (
            <a href={item.url}>
              <CustomAvatar variant={item.variant} icon={item.icon} />
            </a>
          ) : (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <CustomAvatar variant={item.variant} icon={item.icon} />
            </a>
          )}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Header>
      <Row align="middle">
        <Col xs={12} sm={12} md={12}>
          <Image src={TaskBreezLogo} preview={false} />
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Row justify="end" align="middle">
            <Row>
              <Col xs={0} sm={0} md={24}>
                <Row>
                  <Space size={10}>
                    {socialMediaLinks.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target={item.url.startsWith("mailto:") ? undefined : "_blank"}
                        rel={item.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      >
                        <CustomAvatar variant={item.variant} icon={item.icon} />
                      </a>
                    ))}
                    <CustomAvatar variant="secondary" icon={<BellFilled />} />
                  </Space>
                </Row>
              </Col>
              <Col md={0}>
                <CustomAvatar variant="secondary" icon={<BellFilled />} />
              </Col>
            </Row>
            <Tag className="headerTag">
              <Space size={10}>
                <Avatar className="headerAvatar">AU</Avatar>
                <SettingOutlined className="settingIcon" />
              </Space>
            </Tag>
            <Col md={0}>
              <Row align="middle">
                <Dropdown overlay={SmallScreenMenu} trigger={["click"]}>
                  <EllipsisOutlined className="ellipsisIcon" rotate={90} />
                </Dropdown>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
