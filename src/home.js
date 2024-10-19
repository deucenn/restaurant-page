function renderHome() {
    const content = document.getElementById('content');

    const home = document.createElement('div');
    content.appendChild(home);
    home.classList.add('main');
    
    const greeting = document.createElement('h1');
    greeting.textContent = 'Buongiorno';
    greeting.classList.add('greeting');
    home.appendChild(greeting);

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'La Dolce Vita';
    restaurantName.classList.add('main-headline');
    home.appendChild(restaurantName);

    const divider = document.createElement('div');
    divider.classList.add('main-divider');
    home.appendChild(divider);

    const description = document.createElement('h2');
    description.textContent = 'Authentic Neapolitan Pizza';
    description.classList.add('description');
    home.appendChild(description)

    const viewMenu = document.createElement('button');
    viewMenu.textContent = 'View Menu';
    viewMenu.classList.add('view-menu');
    viewMenu.setAttribute('id','menu-btn');
    home.appendChild(viewMenu)
}

export { renderHome };
