import { Row, Col, Card } from "antd";
import "../../../App.css";
import { Button } from "@/components/ui/button";
import { TFacility } from "@/types/facility.type";
import React from "react";
import { Link } from "react-router-dom";

interface FacilityCardProps {
  facility: TFacility;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  return (
    <div>
      <Row justify="center">
        <Col xs={24} sm={12} md={8} lg={24}>
          <Card
            hoverable
            cover={
              <img
                alt={facility?.name}
                src={facility?.image}
                className="card-image"
              />
            }
            className="service-card"
          >
            <div className="card-content">
              <h1
                style={{
                  fontSize: "15px",

                  color: "#fff",
                  marginBottom: "10px",
                }}
              >
                Location:{" "}
                <span style={{ color: "#F95924" }}>{facility.location}</span>
              </h1>
              <h1
                style={{
                  fontSize: "15px",

                  color: "#fff",
                  marginBottom: "24px",
                }}
              >
                Price Per Hour:{" "}
                <span style={{ color: "#F95924" }}>
                  ${facility.pricePerHour}
                </span>
              </h1>
              <Link to={`/facility/${facility?._id}`}>
                <Button className="bg-white text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors">
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FacilityCard;
