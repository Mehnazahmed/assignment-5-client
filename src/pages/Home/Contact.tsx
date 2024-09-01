import React from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const { Title, Paragraph } = Typography;

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: ContactFormValues) => {
    console.log("Form values:", values);
  };

  const center: LatLngTuple = [51.505, -0.09];

  return (
    <div style={{ padding: "20px" }}>
      <h1
        className="title"
        style={{
          fontFamily: "'Fira Sans Extra Condensed', sans-serif",
          color: "black",
          textAlign: "center",
        }}
      >
        Contact <span style={{ color: "#F95924" }}>Us</span>
      </h1>

      <Card style={{ marginBottom: "20px" }}>
        <Title style={{ textAlign: "center" }} level={4}>
          Get in Touch
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please input the subject!" }]}
          >
            <Input placeholder="Enter the subject" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter your message" />
          </Form.Item>
          <Form.Item>
            <Button className="bg-orange-600" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card style={{ marginBottom: "20px" }}>
        <h1
          className="title"
          style={{
            fontFamily: "'Fira Sans Extra Condensed', sans-serif",
            color: "black",
            textAlign: "center",
          }}
        >
          Our <span style={{ color: "#F95924" }}>Location</span>
        </h1>
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={center}>
            <Popup>Your location</Popup>
          </Marker>
        </MapContainer>
      </Card>

      <Card>
        <Title style={{ textAlign: "center" }} level={4}>
          Contact Details
        </Title>
        <Row>
          <Col span={24}>
            <Paragraph>
              <strong>Phone:</strong> +1 234 567 890
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> contact@example.com
            </Paragraph>
            <Paragraph>
              <strong>Address:</strong> 1234 Street Name, City, Country
            </Paragraph>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ContactPage;
