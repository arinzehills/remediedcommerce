import React from "react";
import shoping from "../../assets/shoping.png";
import useStyles from "./styles";
import "./slider_animation.css";
import "./cssStyles.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Link } from "react-scroll";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Body = () => {
  const classes = useStyles();
  const slides = [
    {
      title: "Remedied Shopping ",
      description:
        "the best e-shop for e-gadgets online from anywhere around the world",
      img: "../../assets/shoping.png",
    },
    {
      title: "Shopping the best way you can",
      description:
        "Remedied commerce allows you to shop\nfrom the comforts of you home",
      img: "../../assets/shoping.png",
    },
    {
      title: "Best way to Shop\nE-Materials",
      description: "We sell all kinds of laptops, iphone and many IT equipment",
      img: "https://i.imgur.com/DCdBXcq.jpg",
    },
  ];
  return (
    <>
      <div className="slide-body">
        <Slider autoplay={500} infinite={true}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="outer">
                <h1>{slide.title}</h1>
              </div>
              <div className="inner">
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="img">
          <img src={shoping} alt="" />
        </div>
        <div class="circle"></div>
        <div class="circle1"></div>
        <div class="circle2"></div>
        <Button
          component={Link}
          className={classes.red}
          to="products"
          aria-label="Show cart items"
          color="primary"
        >
          Start Shopping <ArrowForwardIosIcon />
        </Button>
      </div>
    </>
  );
};

export default Body;
