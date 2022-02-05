import { Col, Container, Row } from "react-bootstrap";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import classes from "./FixCategory.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import AdbIcon from "@mui/icons-material/Adb";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useRouter } from "next/router";

const FixCategory = () => {
  const router = useRouter();
  return (
    <section className={classes.fixCategory_section}>
      <Container>
        <Row>
          <Col lg="12" className={classes.fix_cat_title}>
            <h2>Category</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg="10" className={classes.category_card_col}>
            <div
              className={classes.category_card}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="0"
            >
              <h6>Graphics & Design</h6>
              <div className={classes.category_icon1}>
                <PhotoOutlinedIcon className={classes.icon} />
              </div>
            </div>
            <div
              className={classes.category_card}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <h6>Writing</h6>
              <div className={classes.category_icon2}>
                <BorderColorOutlinedIcon className={classes.icon} />
              </div>
            </div>
            <div
              className={classes.category_card}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
            >
              <h6>Video & Animation</h6>
              <div className={classes.category_icon3}>
                <SubscriptionsIcon className={classes.icon} />
              </div>
            </div>
            <div
              className={classes.category_card}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <h6>Music & Audio</h6>
              <div className={classes.category_icon4}>
                <MusicNoteIcon className={classes.icon} />
              </div>
            </div>
            <div
              className={classes.category_card}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <h6>SEO</h6>
              <div className={classes.category_icon5}>
                <ImportantDevicesIcon className={classes.icon} />
              </div>
            </div>
            <div
              className={classes.category_card}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              <h6>Programming & Tech</h6>
              <div className={classes.category_icon6}>
                <AdbIcon className={classes.icon} />
              </div>
            </div>
          </Col>
          <Col lg="2">
            <button
              className={classes.view_all}
              onClick={() => router.push("/?login=true")}
            >
              View All
              <ArrowForwardIosOutlinedIcon className={classes.right_arr} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FixCategory;
