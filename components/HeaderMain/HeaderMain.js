import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import classes from "./HeaderMain.module.css";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const HeaderMain = () => {
  return (
    <section className={classes.section_headerMain}>
      <Container className={classes.header_main_container}>
        <Row className="align-items-end h-100">
          <Col lg="5" className={classes.left_header_main}>
            <div className={classes.find_service}>
              <h1>
                <span>Find Services</span> For Your Business
              </h1>
            </div>
            <div>
              <div className={classes.search_input}>
                <SearchIcon className={classes.searchIcon} />
                <Form.Control
                  size="lg"
                  type="search"
                  onFocus={() => false}
                  placeholder="Job title or keyword and location"
                />
                <button>Search</button>
              </div>
            </div>
            <div>
              <div className={classes.app_download_title}>
                <h4>Download Our App</h4>
              </div>
              <div className={classes.app_download}>
                <div className={classes.app_store}>
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/app_store.png"
                        alt="app_store"
                        width={127}
                        height={44}
                      />
                    </a>
                  </Link>
                </div>
                <div className={classes.play_store}>
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/play_store.png"
                        alt="play_store"
                        width={160}
                        height={44}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeaderMain;
