import { Container, Row } from "react-bootstrap";
import classes from "./FeaturedFixes.module.css";
import Slider from "react-slick";
import CommonCard from "../Card/Card";

const FeaturedFixes = () => {
  const categories = [
    {
      author: "sadically_creative",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "10,000",
      img: "/images/fix1.png",
      ratings: [4.9, 5, 4, 4, 4.7, 3.5, 5],
      author_img: "/images/author.jpg",
    },
    {
      author: "sadically_creative",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "10,000",
      img: "/images/fix2.png",
      ratings: [4.9, 5, 4, 4, 4.7, 3.5, 5],
      author_img: "/images/author2.png",
    },
    {
      author: "sadically_creative",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "10,000",
      img: "/images/fix3.png",
      ratings: [4.9, 5, 4, 4, 4.7, 3.5, 5],
      author_img: "/images/author.jpg",
    },
    {
      author: "sadically_creative",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "10,000",
      img: "/images/fix4.png",
      ratings: [4.9, 5, 4, 4, 4.7, 3.5, 5],
      author_img: "/images/author2.png",
    },
    {
      author: "sadically_creative",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "10,000",
      img: "/images/fix5.png",
      ratings: [4.9, 5, 4, 4, 4.7, 3.5, 5],
      author_img: "/images/author2.png",
    },
    {
      author: "sadically_creative",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "10,000",
      img: "/images/fix6.png",
      ratings: [4.9, 5, 4, 4, 4.7, 3.5, 5],
      author_img: "/images/author.jpg",
    },
  ];

  const cateslider = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    autoplay: false,
    speed: 200,
    slidesToShow: 4,
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
          slidesToShow: 1,
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
            <h2>Featured Fixes</h2>
          </div>
          <Slider {...cateslider}>
            {categories.map((category, indx) => (
              <CommonCard key={indx} fx={category} />
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedFixes;
