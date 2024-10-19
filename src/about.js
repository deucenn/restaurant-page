function renderAbout() {
    const content = document.getElementById('content');

    const about = document.createElement('div');
    content.appendChild(about);
    about.classList.add('main');

    const greeting = document.createElement('h1');
    greeting.textContent = 'Buongiorno';
    greeting.classList.add('greeting');
    about.appendChild(greeting);

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'About';
    restaurantName.classList.add('main-headline');
    about.appendChild(restaurantName);

    const divider = document.createElement('div');
    divider.classList.add('main-divider');
    about.appendChild(divider);

    const aboutText = document.createElement('p');
    aboutText.textContent = 'La Dolce Vita is a family-owned Italian restaurant located in the heart of Florence, Italy. We specialize in creating delicious, fresh, and comforting meals for our guests. Our menu features a wide range of authentic Neapolitan pizza, pasta, and desserts.'
    aboutText.classList.add('about-text');
    about.appendChild(aboutText);

    const openingHoursHeader = document.createElement('h2');
    openingHoursHeader.textContent = 'Opening Hours';
    openingHoursHeader.classList.add('opening-hours');
    about.appendChild(openingHoursHeader);

    const openingHours = document.createElement('p');
    openingHours.innerHTML = 'Monday - Friday: 11:00 AM - 10:00 PM<br>Saturday: 11:00 AM - 12:00 AM<br>Sunday: Closed';
    openingHours.classList.add('about-text');
    about.appendChild(openingHours);
    
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact';
    contactHeader.classList.add('contact');
    about.appendChild(contactHeader);

    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = 'Phone: (012) 345-6789<br>Email: contact@example.com<br>Address: 123 Main St, Florence, Italy';
    contactInfo.classList.add('about-text');
    about.appendChild(contactInfo);
}

export { renderAbout };
