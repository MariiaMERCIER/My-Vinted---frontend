import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e) => e.preventDefault();

const Slider = ({ data }) => {
  let items = [];
  items.push(
    <img
      src={data.product_image.secure_url}
      onDragStart={handleDragStart}
      role="presentation"
    />
  );

  if (data.product_pictures) {
    for (let i = 0; i < data.product_pictures.length; i++) {
      items.push(
        <img
          src={data.product_pictures[i]}
          onDragStart={handleDragStart}
          role="presentation"
        />
      );
    }
  }

  return <AliceCarousel mouseTracking items={items} />;
};
export default Slider;
