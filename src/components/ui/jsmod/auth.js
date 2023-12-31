const Auth = class {
  constructor() {
    this.authenticated = false;
  }
  login(username, password) {
    console.log("user: ", username, "password: ", password);

    // make a login request
    fetch(URL + "login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          console.log(username);
        }
      });
  }
  async signup(
    username,
    firstName,
    lastName,
    password,
    confirmPassword,
    remember,
    onClose,
  ) {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await fetch("http://localhost:6969/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          firstName,
          lastName,
          password,
          remember,
        }),
      });

      if (response.ok) {
        // Registration was successful
        console.log("User registered successfully!");
        const data = await response.json();
        console.log("sign up response: ", data.message);
        alert(data.message, " sign up successfull!");
        onClose();
      } else {
        // Handle registration failure (e.g., display error message)
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  isAuthenticated() {
    fetch("http://localhost:6969/api/greet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          console.log(data.username); // Assuming you want to log the username from the response
        }
      });

    return this.authenticated;
  }
};

export default new Auth();
