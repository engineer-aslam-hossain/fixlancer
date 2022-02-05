import { Container, Row } from "react-bootstrap";
import CommonCard from "../../../../components/Card/Card";
import LandingPageHeader from "../../../../components/LandingPageHeader/LandingPageHeader";
import { categories } from "../../../../dummy_data/dummy_fixes";
import classes from "./subcategory.module.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const SubCateGory = ({ params }) => {
  let { category, subcategory } = params;

  return (
    <section className={classes.sub_category}>
      <Container>
        <Row>
          <div>
            <h6 className={classes.cat_sub_cat}>
              {category}
              <ArrowForwardIosOutlinedIcon className={classes.arrow_forward} />
              {subcategory}
            </h6>
            <h2 className={classes.subcat}>{subcategory}</h2>
          </div>
          {categories.map((item, indx) => (
            <CommonCard key={indx} fx={item} col={3} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  return {
    props: {
      params,
    },
  };
}

export default SubCateGory;
