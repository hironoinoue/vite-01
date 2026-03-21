fetch('/api/posts')

.then(res => res.json())
.then(data => {

    console.log(data.contents)

    const app = document.getElementById('app')

    app.innerHTML = data.contents
    .map(item => `
        
        <div class="card">
        ${item.image ?  `<img src="${item.image.url}" alt= "${item.title}" />` : ''}
        <h2 class="card-title">${item.title}</h2>
        <p class="card-description">${item.description || ''}</p>
        </div>
        
        `)
    .join('')
})

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#site-header .nav-menu');

hamburger.addEventListener('click', () => {
    nevMenu.classList.toggle('active');
})