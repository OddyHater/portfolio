import './styles/main.scss';

import { toggleMenu } from './script/sideNav';
import { addHoverToListElement } from './script/cardHover';

window.addEventListener('scroll', toggleMenu);

const protfolioCards = document.querySelectorAll('.portfolio__cards');
const stackCards = document.querySelectorAll('.stack__list-item')

addHoverToListElement(protfolioCards);
addHoverToListElement(stackCards);