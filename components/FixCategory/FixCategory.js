import { Container, Row } from "react-bootstrap";
import CategoryCard from "../CategoryCard/CategoryCard";
import classes from "./FixCategory.module.css";
import Slider from "react-slick";

const FixCategory = () => {
  const categories = [
    {
      name: "Graphics Design",
      img: "/images/cat1.png",
    },
    {
      name: "Music & Audio",
      img: "/images/cat2.png",
    },
    {
      name: "Digital Marketing",
      img: "/images/cat3.png",
    },
    {
      name: "Writing",
      img: "/images/cat4.png",
    },
    {
      name: "Video & Animation",
      img: "/images/cat5.png",
    },
    {
      name: "Graphics Design",
      img: "/images/example.jpg",
    },
  ];

  const cateslider = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    autoplay: true,
    speed: 200,
    slidesToShow: 5,
    swipeToSlide: true,
    // slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipeToSlide: true,
          slidesToShow: 3,
          // slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          swipeToSlide: true,
          slidesToShow: 2,
          // slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          swipeToSlide: true,
          slidesToShow: 2,
          // slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className={classes.fixCategory_section}>
      <Container>
        <Row>
          <div className={classes.fix_cat_title}>
            <h2>Fix Category</h2>
          </div>
          <Slider {...cateslider}>
            {categories.map((category, indx) => (
              <CategoryCard key={indx} category={category} />
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default FixCategory;
