import avatar from "../assets/images/avatar.png";
import burgerOne from "../assets/images/burger-one.png";
import burgerTwo from "../assets/images/burger-two.png";
import buritto from "../assets/images/buritto.png";
import pizzaOne from "../assets/images/pizza-one.png";
import salad from "../assets/images/salad.png";
import fries from "../assets/images/fries.png";
import avocado from "../assets/images/avocado.png";
import bacon from "../assets/images/bacon.png";
import cheese from "../assets/images/cheese.png";
import coleslaw from "../assets/images/coleslaw.png";
import cucumber from "../assets/images/cucumber.png";
import emptyState from "../assets/images/empty-state.png";
import loginGraphic from "../assets/images/login-graphic.png";
import logo from "../assets/images/logo.png";
import mozarellaSticks from "../assets/images/mozarella-sticks.png";
import mushrooms from "../assets/images/mushrooms.png";
import onionRings from "../assets/images/onion-rings.png";
import onions from "../assets/images/onions.png";
import tomatoes from "../assets/images/tomatoes.png";
import success from "../assets/images/success.png";

export const images = {
    avatar,
    burgerOne,
    burgerTwo,
    buritto,
    pizzaOne,
    salad,
    fries,
    avocado,
    bacon,
    cheese,
    coleslaw,
    cucumber,
    emptyState,
    loginGraphic,
    logo,
    mozarellaSticks,
    mushrooms,
    onionRings,
    onions,
    tomatoes,
    success,
};

export const categories = [
    {
        id: 1,
        name: 'Burger',
        image: burgerOne,
    },
    {
        id: 2,
        name: 'Pizza',
        image: pizzaOne,
    },
    {
        id: 3,
        name: 'Salad',
        image: salad,
    },
    {
        id: 4,
        name: 'Fries',
        image: fries,
    },
    {
        id: 5,
        name: 'Mexican',
        image: buritto,
    }
];

export const featured = [
    {
        id: 1,
        name: 'Classic Cheeseburger',
        image: burgerOne,
        price: '$12.99',
        description: 'Juicy beef patty with cheese, lettuce, and tomato.',
        category: 'Burger',
    },
    {
        id: 2,
        name: 'Pepperoni Pizza',
        image: pizzaOne,
        price: '$14.99',
        description: 'Classic pepperoni pizza with mozzarella cheese.',
        category: 'Pizza',
    },
    {
        id: 3,
        name: 'Caesar Salad',
        image: salad,
        price: '$9.99',
        description: 'Fresh romaine lettuce with parmesan and croutons.',
        category: 'Salad',
    },
];

export const offers = [
  { id: 1, title: 'SUMMER COMBO', color: '#DF4815', image: burgerOne },
  { id: 2, title: 'BURGER BASH', color: '#DF6C15', image: burgerTwo },
  { id: 3, title: 'PIZZA PARTY', color: '#15483F', image: pizzaOne },
  { id: 4, title: 'BURRITO DELIGHT', color: '#DF9F15', image: buritto },
];
