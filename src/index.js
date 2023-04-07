import './styles/main.scss';

import { toggleMenu } from './script/sideNav';
import { addHoverToListElement } from './script/cardHover';

const protfolioCards = document.querySelectorAll('.portfolio__cards');
const stackCards = document.querySelectorAll('.stack__list-item')

window.addEventListener('scroll', toggleMenu);

addHoverToListElement(protfolioCards);
addHoverToListElement(stackCards);