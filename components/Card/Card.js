import { Button, Card, Col } from "react-bootstrap";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import classes from "./Card.module.css";

const CommonCard = ({ fx, col }) => {
  return (
    <Col lg={col}>
      <Link href="/">
        <a className={classes.cardLink}>
          <Card
            className={classes.common_card}
            style={{ margin: col ? "1rem 0" : "1rem 0.6rem" }}
          >
            <Image src={fx.img} width={300} height={200} alt="card_img" />
            <Card.Body>
              <div className={classes.author}>
                <Image
                  src={fx.author_img}
                  width={50}
                  height={50}
                  alt="author_img"
                />
              </div>
              <div className={classes.title}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className={classes.ratings_div}>
                <div className={classes.rating}>
                  <span>
                    <StarIcon className={classes.rating_icon} /> 5.0
                  </span>
                  <span> (2444) </span>
                </div>
                <div className={classes.card_price}>
                  <span>N25000</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </Col>
  );
};

export default CommonCard;
