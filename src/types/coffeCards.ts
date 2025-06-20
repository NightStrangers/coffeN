import { images } from "./image";
import {CoffeeCard} from './CoffeCard';

export const coffeeCards: CoffeeCard[] = [
    {
        img: images.caramel,
        title: 'Карамельный вулкан',
        price: '1 200 ₽',
        roastLevel:  2 ,
        
        
    },
    {
        img: images.dragon,
        title: 'Драконий вздох ',
        price: '1 890 ₽',
        roastLevel:  1 ,
    },
    {
        img: images.samurai,
        title: 'Дымчатый самурай',
        price: '940 ₽',
        roastLevel:  3 ,
    },
    {
        img: images.maracu,
        title: 'Маракуйя-ристретто',
        price: ' 1 230 ₽',
        roastLevel:  2 ,
    },
    {
        img: images.vintage,
        title: 'Винтажный мох',
        price: ' 1 450 ₽',
        roastLevel:  3 ,
    },
    {
        img: images.storm,
        title: 'Черничный шторм',
        price: ' 1 000 ₽',
        roastLevel:  1 ,
    },
]
