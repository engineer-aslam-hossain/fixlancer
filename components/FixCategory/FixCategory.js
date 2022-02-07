import { Col, Container, Row } from "react-bootstrap";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import classes from "./FixCategory.module.css";
import { useRouter } from "next/router";
import { view_all_category_data } from "../../dummy_data/category_data";
import ViewAllCategoryCardDropdown from "../ViewAllCategoryCard/ViewAllCategoryCard";

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
            {view_all_category_data.map((category, indx) => (
              <ViewAllCategoryCardDropdown
                key={indx}
                category={category}
                cat_class={`category_icon${indx + 1}`}
              />
            ))}
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
