export type CoffeeItem = {
    id: string;
    name: string;
    price: string;
    image: any;
};

export const coffeeData: CoffeeItem[] = [
    {
        id: '1',
        name: 'Cappuccino',
        price: '$10',
        image: require('../assests/images/americano.jpg')
    },
    { id: '2', name: 'Latte Coffee', price: '$10', image: require('../assests/images/CafeLatte.jpg') },
    { id: '3', name: 'Americano', price: '$10', image: require('../assests/images/Cappuccino.jpg') },
    { id: '4', name: 'Café Latte', price: '$10', image: require('../assests/images/Latte.jpg') },
    { id: '5', name: 'Café Mocha', price: '$10', image: require('../assests/images/americano.jpg') },
    { id: '6', name: 'Espresso', price: '$10', image: require('../assests/images/americano.jpg') },
];

export const coldCoffeeData: CoffeeItem[] = [
    { id: '7', name: 'Cold Brew', price: '$10', image: require('../assests/images/americano.jpg') },
    { id: '8', name: 'Iced Latte', price: '$10', image: require('../assests/images/americano.jpg') },
    { id: '9', name: 'Frappuccino', price: '$10', image: require('../assests/images/americano.jpg') },
    { id: '10', name: 'Iced Americano', price: '$10', image: require('../assests/images/americano.jpg') },
    { id: '11', name: 'Iced Tea', price: '$10', image: require('../assests/images/americano.jpg') },
    { id: '12', name: 'Iced Chai Latte', price: '$10', image: require('../assests/images/americano.jpg') },
];
