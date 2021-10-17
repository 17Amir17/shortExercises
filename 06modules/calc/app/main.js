import './styles.css';
import { onFormClick } from './helpers/listeners.js';

const calculaterElement = document.querySelector('.container');
calculaterElement.addEventListener('click', onFormClick);
