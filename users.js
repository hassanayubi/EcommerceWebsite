
    // Array to store user data
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Function to save user data
    function saveUser() {
        // Get input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (!name || !email || !password) {
            alert("Please enter all details");
        } else {
            // Create user object
            var user = {
                name: name,
                email: email,
                password: password
            };

            // Push user object to users array
            users.push(user);
            alert("User created successfully");

            console.log(users);
            localStorage.setItem('users', JSON.stringify(users));
            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }
    }

    function loginUser() {
        // Get input values
        var email = document.getElementById("loginEmail").value.trim().toLowerCase();
        var password = document.getElementById("loginPassword").value.trim();

        // Search for the user in the users array
        var user = users.find(function (user) {
            return user.email === email && user.password === password;
        });

        // Check if the user was found
        if (user) {
            alert("User Logged in successfully");
            window.location.href = 'index.html'; // Redirect to index page after login
        } else {
            alert("User not found or invalid credentials");
        }

        // Clear input fields
        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPassword").value = "";
    }