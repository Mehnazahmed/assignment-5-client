import { Typography, Card } from "antd";
import "./common.css";

const { Title, Paragraph } = Typography;

const steps = [
  {
    id: 1,
    title: "Sign Up or Log In",
    description: "Create an account or log in to start booking.",

    icon: "https://res.cloudinary.com/dj3m1cb0v/image/upload/v1725380508/signup_j1cqn5.jpg",
  },
  {
    id: 2,
    title: "Browse Facilities",
    description: "Explore available sports facilities.",
    icon: "https://res.cloudinary.com/dj3m1cb0v/image/upload/v1725380296/facilities_ltnsts.jpg",
  },
  {
    id: 3,
    title: "Book a Facility",
    description: "Choose the best facility according to your choice.",
    icon: "https://res.cloudinary.com/dj3m1cb0v/image/upload/v1725380551/select_nj4lec.svg",
  },
];

const HowItWorks = () => (
  <div className="how-it-works " style={{ backgroundColor: "rgb(9, 20, 35)" }}>
    <h1
      className="title"
      style={{ fontFamily: "'Fira Sans Extra Condensed', sans-serif" }}
    >
      How It <span style={{ color: "#F95924" }}>Works</span>
    </h1>
    <div className="steps-container">
      {steps.map((step, index) => (
        <div key={step.id} className="step">
          <Card className="step-card">
            <img src={step.icon} alt={step.title} className="step-icon" />
            <Title level={4} className="step-title">
              {step.title}
            </Title>
            <Paragraph className="step-description">
              {step.description}
            </Paragraph>
          </Card>
          {index < steps.length - 1 && <div className="arrow" />}
        </div>
      ))}
    </div>
  </div>
);

export default HowItWorks;
