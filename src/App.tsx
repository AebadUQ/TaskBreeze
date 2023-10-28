import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./components/HeaderComponent";
import ContentComponent from "./components/ContentComponent";

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <ContentComponent />
    </Layout>
  );
};

export default App;
