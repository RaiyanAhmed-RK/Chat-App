import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:6900");
// fetch a paginated records list

// you can also fetch all records at once via getFullList
const records = await pb.collection("users").getFullList({
  sort: "-created",
});

// or fetch only the first record that matches the specified filter
const record = await pb
  .collection("users")
  .getFirstListItem('someField="test"', {
    expand: "relField1,relField2.subRelField",
  });
const db = class {
  static async login(username, password) {
    let user = await pb
      .collection("users")
      .getFirstListItem(`username="${username}"`);
    if (!user) {
      return false;
    }
    if (user.password === password) {
      return true;
    }
    return false;
  }
  static async signup(username, password) {
    let user = await pb
      .collection("users")
      .getFirstListItem(`username="${username}"`);
    if (user) {
      return false;
    }
    await pb.collection("users").add({
      username: username,
      password: password,
    });
    return true;
  }
  static async checkUser(username) {
    let user = await pb
      .collection("users")
      .getFirstListItem(`username="${username}"`);
    if (user) {
      return true;
    }
    return false;
  }
  static async addSession(user) {
    await pb.collection("sessions").add(user);
  }
  static async auth(user) {
    let user = await pb
      .collection("sessions")
      .getFirstListItem(`username="${user.username}"`);
    if (user) {
      return true;
    }
    return false;
  }
  static async generateSessionId(length) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
};
