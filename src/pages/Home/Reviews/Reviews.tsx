import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(9, 20, 35)",
        textAlign: "center",
      }}
    >
      {" "}
      <h1
        className="title"
        style={{
          fontFamily: "'Fira Sans Extra Condensed', sans-serif",

          margin: 0,
        }}
      >
        Users <span style={{ color: "#F95924" }}>Testimonials</span>
        <ReviewSlider />
      </h1>
    </div>
  );
};

export default Reviews;
