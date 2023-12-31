const URL = "http://localhost:6969/api";

const Auth = class {
  constructor() {
    this.authenticated = false;
  }
  login(username, password) {
    console.log("user: ", username, "password: ", password);

    // make a login request
    fetch(URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      credentials: "include",
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
    email,
    onClose,
  ) {
    console.log("password: ", password, "confirmPassword: ", confirmPassword);
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await fetch(URL + "/signup", {
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
          email,
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
    fetch(URL + "/greet", {
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
          console.log(data.username);
        }
      });
    return this.authenticated;
  }
  greet() {
    fetch(URL + "/greet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          console.log(data.username);
        }
      });
  }
};

export default new Auth();
