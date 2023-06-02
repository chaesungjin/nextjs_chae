import { Col, Row } from "antd";

export default function Footer() {
  return (
    <Row
      align="middle"
      style={{
        height: 50,
        textAlign: "right",
      }}
    >
      <Col span={24}>
        <p>© 2023 Roy Chae. All rights reserved.</p>
      </Col>
    </Row>
  );
}
