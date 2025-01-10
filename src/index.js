// eslint-disable-next-line
import css from "./style.css"
import { setImageCarousel } from "infinite-image-carousel";

const slidesWrapper = document.querySelector(".slides-wrapper");
const leftButton = document.querySelector(".carousel-button.left");
const rightButton = document.querySelector(".carousel-button.right");
const dots = document.querySelectorAll(".carousel-dot");

setImageCarousel(slidesWrapper, leftButton, rightButton, dots);