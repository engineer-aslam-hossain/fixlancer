import { Col, Container, Row } from "react-bootstrap";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import classes from "./order_details.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import MakePaymentModal from "../../components/MakePaymentModal/MakePaymentModal";

const OrderDetails = () => {
  return (
    <section className={classes.order_details}>
      <Container>
        <Row>
          <Col lg="11 mx-auto">
            <div className={classes.stepper}>
              <div className={classes.step}>
                <div className={classes.step_number}>
                  <span>1</span>
                </div>
                <div className={classes.stepper_text}>
                  <span>
                    Order Details <ArrowForwardIosIcon />
                  </span>
                </div>
              </div>
              <div className={classes.step}>
                <div className={classes.step_number}>
                  <span>2</span>
                </div>
                <div className={classes.stepper_text}>
                  <span>Submit Requirements </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="9 mx-auto">
            <Row className={classes.payment_card_row}>
              <Col lg="7">
                <div className="d-flex">
                  <div>
                    <div className={classes.sqare}></div>
                  </div>
                  <div className={classes.offer_details}>
                    <h6>
                      Promote my telegram channel Promote my telegram channel{" "}
                    </h6>
                    <div className="d-flex">
                      <div className={classes.offer_by}>
                        <div className={classes.circle}></div>
                        <span>Tboy25</span>
                      </div>
                      <div className={classes.delivery_date}>
                        <DateRangeOutlinedIcon className={classes.date_range} />
                        <span>2 days delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.tips}>
                  <h6>Tips: </h6>
                  <div className={classes.tips_content}>
                    <RadioButtonCheckedOutlinedIcon
                      className={classes.radio_btn1}
                    />
                    <span>
                      Your funds are held on escrow and not sent directly to the
                      seller.
                    </span>
                  </div>
                  <div className={classes.tips_content}>
                    <RadioButtonCheckedOutlinedIcon
                      className={classes.radio_btn2}
                    />
                    <span>
                      Seller can only receive funds when you release it upon
                      satisfaction with the work done.
                    </span>
                  </div>
                  <div className={classes.tips_content}>
                    <RadioButtonCheckedOutlinedIcon
                      className={classes.radio_btn3}
                    />
                    <span>
                      100% Money Back Guarantee if you are not satisfied with
                      the work done.
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg="5">
                <div className={classes.summary_card}>
                  <h6>Summary</h6>
                  <div className={classes.summary_key_value_pair}>
                    <p>Available Balance</p>
                    <p>N72,000</p>
                  </div>
                  <div className={classes.summary_key_value_pair}>
                    <p>Fix Price</p>
                    <p>N5,000</p>
                  </div>
                  <div className={classes.summary_key_value_pair}>
                    <p>Discount</p>
                    <div className={classes.discount_input}>
                      <input type="text" placeholder="Enter promo code" />
                      <button>apply</button>
                    </div>
                  </div>
                  <div className={classes.summary_key_value_pair}>
                    <p>Fee</p>
                    <p>N72,000</p>
                  </div>
                  <div className={classes.summary_key_value_pair}>
                    <p>Total</p>
                    <p>N72,000</p>
                  </div>
                  <div className={classes.payment}>
                    <button>Pay Now (Instant)</button>
                    {/* <button>Pay Now (Bank Transfer)</button> */}
                    <MakePaymentModal />
                  </div>
                </div>
                <div className={classes.contact}>
                  <p>
                    Having difficulties making payment?
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderDetails;

OrderDetails.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
