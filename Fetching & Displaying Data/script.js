document.getElementById('fetch-users').addEventListener('click', fetchUsers);

async function fetchUsers() {
    const url = 'https://reqres.in/api/users?page=1';
    
    try {
        // Fetch data from the API
        const response = await fetch(url);
        
        const data = await response.json();
        
        // Get the user list div to display the users
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear any previous data

        // Loop through the users and display them
        data.data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            
            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" class="avatar">
                <div class="user-info">
                    <h3>${user.first_name} ${user.last_name}</h3>
                    <p>${user.email}</p>
                </div>
            `;
            userList.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Something went wrong while fetching user data.');
    }
}
