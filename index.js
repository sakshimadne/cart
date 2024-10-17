let users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
  },
]

const userList = document.getElementById('user-list')

// Function to render user cards
function renderUsers() {
  userList.innerHTML = '' // Clear the previous user cards

  users.forEach((user) => {
    const userCard = document.createElement('div')
    userCard.classList.add('card')
    userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <button onclick="addToCart(${user.id})">Add to Cart</button>
        `
    userList.appendChild(userCard)
  })
}

// Function to add user to cart
function addToCart(id) {
  const user = users.find((user) => user.id === id)
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  cart.push(user)
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(`${user.name} added to cart!`)
}

// Render users on page load
renderUsers()
