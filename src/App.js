import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function UserGreeting(props) {
  return <h1>Welcome Back {props.name}! </h1>;
}

function GuestGreeting(props) {
  return <h1>Please Sign Up! {props.situation}</h1>;
}

function Message(props) {
  return (
    <div>
      {props.unread.length > 0 && (
        <h2>
          Hey {props.name} you have {props.unread.length} unread messages.
        </h2>
      )}
    </div>
  );
}

function App(props) {
  const isLogged = props.in;
  if (isLogged) {
    return (
      <div>
        <UserGreeting name={props.name} />
        <Message name={props.name} unread={props.unread} />
      </div>
    );
  } else {
    return <GuestGreeting />;
  }
}

function LoginBtn(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogOutBtn(props) {
  return <button onClick={props.onClick}>Log Out</button>;
}

export class LoginEl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
      name: "Rohit",
      messages: ["Re-act", "Re-React"],
    };
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogOut() {
    this.setState({ isLog: false });
  }

  handleLogIn() {
    this.setState({ isLog: true });
  }

  render() {
    const isLogged = this.state.isLog;
    let button;
    {
      isLogged
        ? (button = <LogOutBtn onClick={this.handleLogOut} />)
        : (button = <LoginBtn onClick={this.handleLogIn} />);
    }

    return (
      <div>
        <App
          in={this.state.isLog}
          name={this.state.name}
          unread={this.state.messages}
        />
        {button}
      </div>
    );
  }
}
