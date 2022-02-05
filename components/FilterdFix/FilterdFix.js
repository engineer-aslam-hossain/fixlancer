import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import CommonCard from "../Card/Card";
import classes from "./FilterdFix.module.css";
import Button from "@mui/material/Button";
import TuneIcon from "@mui/icons-material/Tune";
import FixLancerContext from "../FixLancerContext/FixLancerContext";
import { categories } from "../../dummy_data/dummy_fixes";

const FilterdFix = () => {
  const [page, setPage] = useState(1);
  const { searchInputValue } = useContext(FixLancerContext);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <section>
      <Container>
        {searchInputValue && (
          <Row>
            <div className={classes.searchResult}>
              <div>
                <h3>Showing 14,000 results for “{searchInputValue}”</h3>
              </div>
              <div>
                <Button
                  variant="outlined"
                  endIcon={<TuneIcon />}
                  className={classes.filter}
                >
                  Filter
                </Button>
              </div>
            </div>
          </Row>
        )}

        <Row>
          {categories.map((item, indx) => (
            <CommonCard key={indx} fx={item} col={3} />
          ))}
          <div className={classes.pagination_div}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handleChange}
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default FilterdFix;
