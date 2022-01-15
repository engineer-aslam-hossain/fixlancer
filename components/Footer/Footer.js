import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import FooterLink from "../FooterLink/FooterLink";
import classes from "./Footer.module.css";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const footerInfo = [
    {
      title: "Company",
      content: [
        {
          link: "/",
          title: "About us",
        },
        {
          link: "/",
          title: "How it works",
        },
        {
          link: "/",
          title: "FAQs",
        },
        {
          link: "/",
          title: "Affiliate Program",
        },
        {
          link: "/",
          title: "Contact us",
        },
      ],
    },
    {
      title: "Quick Links",
      content: [
        {
          link: "/",
          title: "Start Selling",
        },
        {
          link: "/",
          title: "Post Job Request",
        },
      ],
    },
    {
      title: "Connect",
      content: [
        {
          link: "/",
          title: "Facebook",
        },
        {
          link: "/",
          title: "Instargram",
        },
        {
          link: "/",
          title: "Twitter",
        },
        {
          link: "/",
          title: "Linkedin",
        },
      ],
    },
    {
      title: "Leagal",
      content: [
        {
          link: "/",
          title: "Terms and Conditions",
        },
      ],
    },
  ];

  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <div className={classes.links}>
            {footerInfo.map((info, indx) => (
              <FooterLink key={indx} info={info} />
            ))}
          </div>
          <Divider className={classes.footer_divider} />
          <div className={classes.bottom_footer}>
            <Image src="/images/logo.png" alt="logo" width={210} height={77} />
            <div>
              <h4>Nigeria’s Premiumn Online Marketplace</h4>
            </div>
            <div className={classes.social_media}>
              <Link href="/">
                <a>
                  <FacebookIcon className={classes.social_icon} />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <TwitterIcon className={classes.social_icon} />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <InstagramIcon className={classes.social_icon} />
                </a>
              </Link>
            </div>
            <div className={classes.download_store}>
              <Link href="/">
                <a>
                  <Image
                    src="/images/app_store.jpg"
                    alt="download"
                    width={168}
                    height={50}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image
                    src="/images/play_store.jpg"
                    alt="download"
                    width={168}
                    height={50}
                  />
                </a>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
