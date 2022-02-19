import { Container } from "@mui/material";
import { Row } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./settings.module.scss";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  marginBottom: "1.8rem",
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
const Settings = () => {
  return (
    <DashBoardLayout>
      <section className={classes.settings}>
        <Container>
          <Row>
            <div className={classes.settings_top}>
              <h4>Job Fee</h4>

              <div className={classes.top_grid}>
                <div className={classes.top_grid_card}>
                  <div className={classes.top_grid_card_top}>
                    <h6>Seller</h6>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <p>The present job fee for sellers is 15%.</p>
                    <button>
                      <CreateOutlinedIcon className={classes.pen_icon} /> Change
                      Fee
                    </button>
                  </div>
                </div>
                <div className={classes.top_grid_card}>
                  <div className={classes.top_grid_card_top}>
                    <h6>Deposit</h6>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <p>The present charge per deposit is 3%.</p>
                    <button>
                      <CreateOutlinedIcon className={classes.pen_icon} /> Change
                      Fee
                    </button>
                  </div>
                </div>
                <div className={classes.top_grid_card}>
                  <div className={classes.top_grid_card_top}></div>
                  <div className="d-flex flex-column align-items-center">
                    <p>The flutterwave Service Fee 2%</p>
                    <button>
                      <CreateOutlinedIcon className={classes.pen_icon} /> Change
                      Fee
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.settings_body}>
              <div className={classes.settings_top}>
                <h4>Withdrawal Limit</h4>

                <div className={classes.top_grid}>
                  <div className={classes.top_grid_card}>
                    <div className={classes.top_grid_card_top}>
                      <h6>Limit</h6>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <p>The present min withdrawal fee is 1500.</p>
                      <button>
                        <CreateOutlinedIcon className={classes.pen_icon} />{" "}
                        Change Fee
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.settings_top}>
                <h4>Extras</h4>

                <div className={classes.top_grid}>
                  <div className={classes.top_grid_card}>
                    <div className={classes.top_grid_card_top}>
                      <h6>Visibility</h6>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <p>
                        Visibility of extras across all fixess is currently
                        Enabled
                      </p>
                      <FormControlLabel
                        control={<Android12Switch defaultChecked />}
                        label=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.settings_second_body}>
              <div className={classes.settings_top}>
                <h4>Fix</h4>

                <div className={classes.top_grid}>
                  <div className={classes.top_grid_card}>
                    <div className={classes.top_grid_card_top}>
                      <h6>Approval</h6>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <p>Fixes to require approval is currently Disabled</p>
                      <FormControlLabel
                        control={<Android12Switch defaultChecked />}
                        label=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.settings_top}>
                <h4>Pay with Bank Transfer</h4>

                <div className={classes.top_grid}>
                  <div className={classes.top_grid_card}>
                    <div className={classes.top_grid_card_top}>
                      <h6>Visibility</h6>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <p>Payment using Bank Transfer is currently Enabled</p>
                      <FormControlLabel
                        control={<Android12Switch defaultChecked />}
                        label=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.settings_body}>
              <div className={classes.settings_top}>
                <h4>Pay with Flutterwave</h4>

                <div className={classes.top_grid}>
                  <div className={classes.top_grid_card}>
                    <div className={classes.top_grid_card_top}>
                      <h6>Visibility</h6>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <p>Payment using Flutterwave is currently Enabled</p>
                      <FormControlLabel
                        control={<Android12Switch defaultChecked />}
                        label=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Settings;

Settings.getLayout = (page) => <>{page} </>;
