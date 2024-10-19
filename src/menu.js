const dishes = [
    {
        name: 'Pizza Margherita',
        price: '10€',
        description: 'Marinara sauce · mozzarella · tomatoes · basil · olives · fresh parsley',
    },
    {
        name: 'Pizza Suprema',
        price: '12€',
        description: 'Marinara sauce · mozzarella · tomatoes · basil · olives · cherry tomatoes · fresh parsley',
    },
    {
        name: 'Pizza Capricciosa',
        price: '14€',
        description: 'Marinara sauce · mozzarella · tomatoes · basil · olives · cherry tomatoes · spinach · fresh parsley',
    },
]

function renderMenu() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    content.appendChild(menu);
    menu.classList.add('main');

    const greeting = document.createElement('h1');
    greeting.textContent = 'Buongiorno';
    greeting.classList.add('greeting');
    menu.appendChild(greeting);

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Menu';
    restaurantName.classList.add('main-headline');
    menu.appendChild(restaurantName);

    const divider = document.createElement('div');
    divider.classList.add('main-divider');
    menu.appendChild(divider);

    dishes.forEach((item) => {
        const dish = document.createElement('div');
        dish.classList.add('dish');
        menu.appendChild(dish);

        const dishName = document.createElement('h3');
        dishName.textContent = item.name;
        dishName.classList.add('dish-name');
        dish.appendChild(dishName);

        const dishPrice = document.createElement('p');
        dishPrice.textContent = `- ${item.price} -`;
        dishPrice.classList.add('dish-price');
        dish.appendChild(dishPrice);

        const dishDescription = document.createElement('p');
        dishDescription.textContent = item.description;
        dishDescription.classList.add('dish-description');
        dish.appendChild(dishDescription);

        const smallDivider = document.createElement('div');
        smallDivider.classList.add('small-divider');
        dish.appendChild(smallDivider);
    })
}

export { renderMenu };
