import React from "react";

export interface LoginPageProps {
  title: string;
  onLogin?: (user: any) => void;
}

export interface LoginPageState {}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  render() {
    return <div>Login Page</div>;
  }
}

export default LoginPage;
