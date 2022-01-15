import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "../NewsCard/NewsCard";
import classes from "./TheNews.module.css";

const TheNews = () => {
  const newses = [
    {
      img: "/images/news1.png",
      title:
        "How tech startup Fixlancer is changing the job market in Nigeria.",
      description:
        "The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.",
    },
    {
      img: "/images/news2.png",
      title: "Efe Ejeba Bags Fixlancer Endorsement Deal",
      description:
        "The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.",
    },
    {
      img: "/images/news3.png",
      title:
        "How Nigerian tech startup Fixlancer is changing how jobs get done",
      description:
        "The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.",
    },
    {
      img: "/images/news4.png",
      title: "Fixlancer partners with Jooble to change how jobs get done",
      description:
        "The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.",
    },
  ];
  return (
    <section className={classes.the_news}>
      <Container>
        <Row>
          <div className={classes.title}>
            <h1>In The News</h1>
          </div>
          {newses.map((news, indx) => (
            <NewsCard key={indx} indx={indx} news={news} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TheNews;
