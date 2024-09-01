import { Row, Col, Card, Timeline, Divider } from "antd";
import member1 from "../../assets/member1.jpg";
import member2 from "../../assets/member2.jpg";

const teamMembers = [
  {
    name: "Jimmy Law",
    title: "CEO / CTO",
    description: `Jimmy has previously held senior management roles across investment banking, data science, and technology.
    He passionately believes in the social & health benefits of playing sports and started GameOn Active because he thinks it should be really easy for everyone to find and play the sports they love.`,
    image: member1,
  },
  {
    name: "Gerald Asante",
    title: "CPO / CMO",
    description: `After graduating from Fordham University with a Computer Science & Economics degree, he spent over five years in product management and business analysis within the IT sector.
    His love for playing sports, primarily basketball, inspired him to start GameOn Active with Jimmy.`,
    image: member2,
  },
];

const About = () => {
  return (
    <div style={{ padding: "0 20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Mission Statement */}
      <section style={{ textAlign: "center", marginBottom: 50, marginTop: 30 }}>
        <h1
          className="title"
          style={{
            fontFamily: "'Fira Sans Extra Condensed', sans-serif",
            color: "black",
          }}
        >
          Our <span style={{ color: "#F95924" }}>Mission</span>
        </h1>
        <p style={{ fontSize: "1.2em", color: "#666" }}>
          Our mission is to make it easy for everyone to find and play the
          sports they love. We believe in the power of sports to bring people
          together and improve health and well-being.
        </p>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: 50 }}>
        <Divider>
          <h1
            className="title"
            style={{
              fontFamily: "'Fira Sans Extra Condensed', sans-serif",
              color: "black",
            }}
          >
            Meet <span style={{ color: "#F95924" }}>the Team</span>
          </h1>
        </Divider>
        <Row gutter={[32, 32]} justify="center">
          {teamMembers.map((member, index) => (
            <Col xs={24} md={12} key={index}>
              <Card
                style={{
                  borderRadius: 10,
                  textAlign: "center",
                  border: "1px solid #F95924",

                  background: "#001529",
                  color: "#fff",
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                  transition: "border-color 0.3s ease",
                }}
                hoverable
                className="card-hover-effect"
                cover={
                  <img
                    alt={member.name}
                    src={member.image}
                    style={{
                      borderRadius: "50%",
                      width: 150,
                      height: 150,
                      objectFit: "cover",
                      margin: "0 auto",
                      marginTop: 20,
                    }}
                  />
                }
              >
                <Card.Meta
                  title={<h2 style={{ color: "#ff4d4f" }}>{member.name}</h2>}
                  description={
                    <>
                      <h4 style={{ color: "#b0b0b0", margin: 0 }}>
                        {member.title}
                      </h4>
                      <p style={{ color: "#fff", marginTop: 10 }}>
                        {member.description}
                      </p>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* History & Milestones */}
      <section style={{ marginBottom: 50 }}>
        <Divider>
          <h1
            className="title"
            style={{
              fontFamily: "'Fira Sans Extra Condensed', sans-serif",
              color: "black",
            }}
          >
            Our <span style={{ color: "#F95924" }}>Journey</span>
          </h1>
        </Divider>
        <Timeline mode="alternate">
          <Timeline.Item color="#F95924">
            Founded the company in 2018
          </Timeline.Item>
          <Timeline.Item color="green">
            Launched the first version of our platform in 2019
          </Timeline.Item>
          <Timeline.Item color="green">
            Reached 10,000 active users in 2020
          </Timeline.Item>
          <Timeline.Item color="green">
            Expanded to international markets in 2021
          </Timeline.Item>
          <Timeline.Item color="green">
            Introduced new features based on user feedback in 2022
          </Timeline.Item>
          <Timeline.Item color="green">
            Partnered with major sports organizations in 2023
          </Timeline.Item>
        </Timeline>
      </section>

      {/* Contact Information */}
      <section style={{ textAlign: "center", marginBottom: 50 }}>
        <Divider>
          <h1
            className="title"
            style={{
              fontFamily: "'Fira Sans Extra Condensed', sans-serif",
              color: "black",
            }}
          >
            Contact <span style={{ color: "#F95924" }}>Us</span>
          </h1>
        </Divider>
        <p style={{ fontSize: "1.1em", color: "#666" }}>
          <strong>Office Address:</strong> 123 Sports Avenue, Suite 100,
          Sportstown, ST 12345
          <br />
          <strong>Phone:</strong> (123) 456-7890
          <br />
          <strong>Email:</strong> contact@gameonactive.com
        </p>
      </section>
    </div>
  );
};

export default About;
