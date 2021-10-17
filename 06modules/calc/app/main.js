import "./styles.css";
import { onFormClick } from "./helpers/listeners";

const calculaterElement = document.querySelector(".container");
calculaterElement.addEventListener("click", onFormClick);
