import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import LoginButton from "./ui/LoginButton";
import SignUpButton from "./ui/SignUpButton";
import auth from "./ui/jsmod/auth.js";
export default class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col h-[80vh] w-1/2 min-w-[300px] m-auto items-center justify-center ">
          <h1>Welcome to R-chat APP</h1>
          <p>
            We are happy to make one of our parts as a family togather to form a
            alliance and community.
          </p>
          <div className="flex block mx-auto mt-2">
            <LoginButton name={"Login"} />
            <SignUpButton name={"Sign Up"} />
            <Button
              onPress={() => {
                console.log("hello");
                auth.greet();
              }}
              color="primary"
              variant="shadow"
              className="hover:bg-transparent hover:text-primary m-3"
            >
              Greet!
            </Button>
          </div>
        </div>
      </>
    );
  }
}
