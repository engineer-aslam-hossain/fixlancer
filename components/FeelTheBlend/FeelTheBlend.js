import { Container, Row } from "react-bootstrap";
import classes from "./FeelTheBlend.module.css";

const FeelTheBlend = () => {
  return (
    <section className={classes.feel_the_blend}>
      <Container>
        <Row>
          <div className={classes.details}>
            <h1>Feel The Blend</h1>
            <p>
              We make buying and selling more of a colaborative relation rather{" "}
              <br />
              than a manipulative one
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default FeelTheBlend;
