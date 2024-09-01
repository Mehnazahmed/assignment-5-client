import { Carousel, Card, Rate, Spin } from "antd";
import "../../../App.css";
import { useGetAllReviewsQuery } from "@/redux/features/review/review.api";

const ReviewSlider = () => {
  const { data: reviews, isLoading, isError } = useGetAllReviewsQuery({});
  console.log(reviews);
  if (isLoading) return <Spin size="large" />;
  if (isError) return <div>Error fetching reviews</div>;

  return (
    <div className="feedback-slider-container">
      <Carousel autoplay dotPosition="top" className="custom-carousel">
        {reviews?.data?.map((review, index) => (
          <div key={index} className="feedback-slide">
            <Card
              title={<span className="user-name">{review?.userName}</span>}
              bordered={false}
              className="custom-card"
            >
              <Rate
                disabled
                defaultValue={review?.rating}
                className="rating-stars"
              />
              <p className="feedback-comment">{review.comment}</p>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
