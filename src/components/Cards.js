import React from "react";
import { Card, Row, Col, Button, Typography } from "antd";
import { WalletOutlined, FundOutlined, FileDoneOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function Cards({
  currentBalance,
  income,
  expenses,
  showExpenseModal,
  showIncomeModal,
  reset,
}) {
  return (
    <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
      <Col xs={24} sm={12} md={8}>
        <Card
          hoverable
          bordered={false}
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            background: "#f9f9f9",
            padding: "16px",
            transition: "all 0.2s ease",
          }}
          cover={<WalletOutlined style={{ fontSize: 24, color: "#4CAF50" }} />}
        >
          <Title level={5} style={{ color: "#333", fontWeight: 500, fontSize: "1rem" }}>
            Current Balance
          </Title>
          <Text style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333" }}>
            ₹{currentBalance}
          </Text>
          <Button
            type="primary"
            size="small"
            block
            style={{
              marginTop: "12px",
              backgroundColor: "#4CAF50",
              borderColor: "#4CAF50",
              borderRadius: "4px",
              fontSize: "14px",
            }}
            onClick={reset}
            icon={<WalletOutlined />}
          >
            Reset
          </Button>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8}>
        <Card
          hoverable
          bordered={false}
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            background: "#f9f9f9",
            padding: "16px",
            transition: "all 0.2s ease",
          }}
          cover={<FundOutlined style={{ fontSize: 24, color: "#2196F3" }} />}
        >
          <Title level={5} style={{ color: "#333", fontWeight: 500, fontSize: "1rem" }}>
            Total Income
          </Title>
          <Text style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333" }}>
            ₹{income}
          </Text>
          <Button
            type="primary"
            size="small"
            block
            style={{
              marginTop: "12px",
              backgroundColor: "#2196F3",
              borderColor: "#2196F3",
              borderRadius: "4px",
              fontSize: "14px",
            }}
            onClick={showIncomeModal}
            icon={<FundOutlined />}
          >
            Add Income
          </Button>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8}>
        <Card
          hoverable
          bordered={false}
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            background: "#f9f9f9",
            padding: "16px",
            transition: "all 0.2s ease",
          }}
          cover={<FileDoneOutlined style={{ fontSize: 24, color: "#FF5722" }} />}
        >
          <Title level={5} style={{ color: "#333", fontWeight: 500, fontSize: "1rem" }}>
            Total Expenses
          </Title>
          <Text style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333" }}>
            ₹{expenses}
          </Text>
          <Button
            type="primary"
            size="small"
            block
            style={{
              marginTop: "12px",
              backgroundColor: "#FF5722",
              borderColor: "#FF5722",
              borderRadius: "4px",
              fontSize: "14px",
            }}
            onClick={showExpenseModal}
            icon={<FileDoneOutlined />}
          >
            Add Expense
          </Button>
        </Card>
      </Col>
    </Row>
  );
}

export default Cards;
  