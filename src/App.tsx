import React from "react";
import { Layout } from "antd";
import Home from "./page/Home";
import HeaderComponent from "./components/HeaderComponent";
const App: React.FC = () => {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Home />
    </Layout>
  );
};

export default App;
