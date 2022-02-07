import { Button, Card, Col } from "react-bootstrap";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import classes from "./Card.module.css";

const CommonCard = ({ fx, col }) => {
  return (
    <Col lg={col}>
      <Link href="/usename/fix_name_or_title">
        <a className={classes.cardLink}>
          <Card
            className={classes.common_card}
            style={{ margin: col ? "1rem 0" : "1rem 0.6rem" }}
          >
            <Image src={fx.img} width={300} height={150} alt="card_img" />
            <Card.Body>
              <div className={classes.author_info}>
                <div className={classes.author}>
                  <Image
                    src={fx.author_img}
                    width={50}
                    height={50}
                    alt="author_img"
                    objectFit="fill"
                    priority={true}
                  />
                </div>
                <p>elijahTomilawa</p>
              </div>
              <div className={classes.title}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className={classes.ratings_div}>
                <div className={classes.rating}>
                  <p>
                    <StarIcon className={classes.rating_icon} /> 5.0
                  </p>
                  <span> (2444) </span>
                </div>
                <div className={classes.card_price}>
                  <p>&#x20A6;25000</p>
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
