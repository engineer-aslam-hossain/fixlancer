import Image from "next/image";
import { Col } from "react-bootstrap";
import classes from "./CategoryCard.module.css";

const CategoryCard = ({ category }) => {
  return (
    <Col lg="11" className={classes.category_card}>
      <div className={classes.category_name}>
        <h6>{category.name}</h6>
      </div>
      <Image
        className={classes.cat_card_img}
        src={category.img}
        alt="cat_img"
        width={330}
        height={475}
        layout="responsive"
      />
    </Col>
  );
};

export default CategoryCard;
