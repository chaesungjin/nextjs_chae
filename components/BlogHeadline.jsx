import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          Roy.Chae 블로그
        </h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          Front-End 전문가가 되기 위한 첫번째 프로젝트
        </p>
      </Col>
    </Row>
  );
}
