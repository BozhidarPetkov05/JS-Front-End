const userURL = 'http://localhost:3030/users';

const registerView = document.getElementById('register-view');
const loginView = document.getElementById('login-view');
const homeView = document.getElementById('home-view');
const sections = document.getElementById('views');
const mainElement = document.querySelector('body > main'); 

const userButtons = document.getElementById('user');
const guestButtons = document.getElementById('guest');

const homeLink = document.getElementById('home');
const logoutLink = document.getElementById('logout');
const loginLink = document.getElementById('login');
const registerLink = document.getElementById('register');

const loginButton = loginView.querySelector('button');
const emailElement = loginView.querySelector('input[name=email]');
const passwordElement = loginView.querySelector('input[name=password]');

const userSpanElement = document.querySelector('nav p.email span')

sections.style.display = 'none';
mainElement.appendChild(homeView);

updateNavigationData();

function updateNavigationData() {
    const username = localStorage.getItem('email')
    if (!username) {
        userButtons.style.display = 'none';
    } else {
        guestButtons.style.display = 'none';
        userSpanElement.textContent = username;
    }
}


loginLink.addEventListener('click', () => {
    hideSections();
    mainElement.appendChild(loginView);

})

loginButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${userURL}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: emailElement.value,
                password: passwordElement.value
            })
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const loginData = await response.json();
        setUserData(loginData);

        hideSections();
        mainElement.appendChild(homeView);
        updateNavigationData();
    } catch (err) {
        document.querySelector('.notification').textContent = 'Invalid username or password!';
    }
    
})

loginLink.addEventListener('click', (e) => {
    removeUserData();
    updateNavigationData();
})

function hideSections() {
    sections.appendChild(mainElement.children[0]);
}

function setUserData(userData) {
    localStorage.setItem('accessToken', userData.accessToken);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('username', userData.username);
    localStorage.setItem('_id', userData._id);
}

function removeUserData() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('_id');
}