import image1 from "@/assets/photo1.webp";
import image2 from "@/assets/photo2.webp";
import image3 from "@/assets/photo3.jpg";
import image4 from "@/assets/photo4.png";
import image5 from "@/assets/photo5.jpg";
import image6 from "@/assets/photo6.jpg";
import image7 from "@/assets/photo7.webp";
import image8 from "@/assets/photo8.jpg";

const images = [
  { src: image1, colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: image2, colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: image3, colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: image8, colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },

  { src: image4, colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: image5, colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: image6, colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: image7, colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
];
const Gallery = () => {
  return (
    <div
      className="bg-gray-100 px-4 md:px-28"
      style={{ backgroundColor: "rgb(9, 20, 35)" }}
    >
      <section className="py-12">
        <h1
          className="title"
          style={{
            fontFamily: "'Fira Sans Extra Condensed', sans-serif",
            textAlign: "center",
          }}
        >
          Photo <span style={{ color: "#F95924" }}>Gallery</span>
        </h1>
        <div className="container mx-auto w-full md:px-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${image.colSpan} ${image.rowSpan} w-full h-full overflow-hidden rounded-lg shadow-md`}
              >
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
