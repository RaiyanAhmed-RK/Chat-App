import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:6900");

const signup = async (username, password, firstName, lastName, email) => {
  console.log("pushing to db");
  const data = {
    username: username,
    email: false,
    emailVisibility: false,
    password: password,
    passwordConfirm: password,
    firstName: firstName,
    lastName: lastName,
    user_password: password,
    email: email,
  };
  console.log(data);
  try {
    const record = await pb.collection("users").create(data);
  } catch (err) {
    console.log("push problem :< ", err);
  }
  console.log("pushed to db");
};

const login = async (username, password) => {};
export { signup };
