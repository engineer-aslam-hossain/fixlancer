import { Col, Container, Row } from "react-bootstrap";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FooterBottom from "../../../../components/FooterBottom/FooterBottom";
import LandingPageHeader from "../../../../components/LandingPageHeader/LandingPageHeader";
import classes from "./transactions.module.css";

const Transactions = () => {
  return (
    <section className={classes.transactions}>
      <Container>
        <Row>
          <Col lg="11 mx-auto">
            <h1 className={classes.title}>Transaction History</h1>
          </Col>
          <Col lg="8 mx-auto">
            <Row className="my-3">
              <Col lg="1">
                <div className={classes.arrow_div}>
                  <span className={classes.withdraw_arr}> &uarr;</span>
                  {/* <ArrowRightAltIcon className={classes.withdraw_arr} /> */}
                </div>
              </Col>
              <Col lg="11 mx-auto" className={classes.order_details}>
                <div>
                  <h6>
                    Fix Purchased <button>(View Order)</button>
                  </h6>
                  <span>19 Jan 2022</span>
                </div>
                <div>
                  <p className={classes.withdraw_amount}>&#x20A6;3,500</p>
                </div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col lg="1">
                <div
                  className={`${classes.arrow_div} ${classes.diposit_arr_div}`}
                >
                  <span className={classes.diposit_arr}> &darr;</span>
                  {/* <ArrowRightAltIcon className={classes.withdraw_arr} /> */}
                </div>
              </Col>
              <Col lg="11 mx-auto" className={classes.order_details}>
                <div>
                  <h6>
                    Funds cleared <button>(View Order)</button>
                  </h6>
                  <span>19 Jan 2022</span>
                </div>
                <div>
                  <p className={classes.diposit_amount}>&#x20A6;3,500</p>
                </div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col lg="1">
                <div className={classes.arrow_div}>
                  <span className={classes.withdraw_arr}> &uarr;</span>
                  {/* <ArrowRightAltIcon className={classes.withdraw_arr} /> */}
                </div>
              </Col>
              <Col lg="11 mx-auto" className={classes.order_details}>
                <div>
                  <h6>Withdrawal</h6>
                  <span>19 Jan 2022</span>
                </div>
                <div>
                  <p className={classes.withdraw_amount}>&#x20A6;3,500</p>
                </div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col lg="1">
                <div
                  className={`${classes.arrow_div} ${classes.diposit_arr_div}`}
                >
                  <span className={classes.diposit_arr}> &darr;</span>
                  {/* <ArrowRightAltIcon className={classes.withdraw_arr} /> */}
                </div>
              </Col>
              <Col lg="11 mx-auto" className={classes.order_details}>
                <div>
                  <h6>
                    Funds refunded for cancelled order{" "}
                    <button>(View Order)</button>
                  </h6>
                  <span>19 Jan 2022</span>
                </div>
                <div>
                  <p className={classes.diposit_amount}>&#x20A6;3,500</p>
                </div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col lg="1">
                <div className={classes.arrow_div}>
                  <span className={classes.withdraw_arr}> &uarr;</span>
                  {/* <ArrowRightAltIcon className={classes.withdraw_arr} /> */}
                </div>
              </Col>
              <Col lg="11 mx-auto" className={classes.order_details}>
                <div>
                  <h6>
                    Fix Purchased <button>(View Order)</button>
                  </h6>
                  <span>19 Jan 2022</span>
                </div>
                <div>
                  <p className={classes.withdraw_amount}>&#x20A6;3,500</p>
                </div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col lg="1">
                <div
                  className={`${classes.arrow_div} ${classes.diposit_arr_div}`}
                >
                  <span className={classes.diposit_arr}> &darr;</span>
                  {/* <ArrowRightAltIcon className={classes.withdraw_arr} /> */}
                </div>
              </Col>
              <Col lg="11 mx-auto" className={classes.order_details}>
                <div>
                  <h6>
                    Fix Purchased <button>(View Order)</button>
                  </h6>
                  <span>19 Jan 2022</span>
                </div>
                <div>
                  <p className={classes.diposit_amount}>&#x20A6;3,500</p>
                </div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col lg="1">
                <div className={classes.arrow_div}>
                  <span className={classes.withdraw_arr}> &uarr;</span>
                  {/* <ArrowRightAltIcon className={classes.withdraw_arr} /> */}
                </div>
              </Col>
              <Col lg="11 mx-auto" className={classes.order_details}>
                <div>
                  <h6>
                    Fix Purchased <button>(View Order)</button>
                  </h6>
                  <span>19 Jan 2022</span>
                </div>
                <div>
                  <p className={classes.withdraw_amount}>&#x20A6;3,500</p>
                </div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col lg="1">
                <div
                  className={`${classes.arrow_div} ${classes.diposit_arr_div}`}
                >
                  <span className={classes.diposit_arr}> &darr;</span>
                  {/* <ArrowRightAltIcon className={classes.withdraw_arr} /> */}
                </div>
              </Col>
              <Col lg="11 mx-auto" className={classes.order_details}>
                <div>
                  <h6>
                    Fix Purchased <button>(View Order)</button>
                  </h6>
                  <span>19 Jan 2022</span>
                </div>
                <div>
                  <p className={classes.diposit_amount}>&#x20A6;3,500</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <FooterBottom />
        </Row>
      </Container>
    </section>
  );
};

export default Transactions;

Transactions.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
