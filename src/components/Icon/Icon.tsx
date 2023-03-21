import { FunctionComponent, createElement } from "react";
import { Space } from "antd";

interface IconProps {
  icon: FunctionComponent;
  text: string;
}

const Icon: FunctionComponent<IconProps> = ({ icon, text }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

export default Icon;
