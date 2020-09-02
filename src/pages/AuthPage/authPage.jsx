import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import { AuthForm } from '../../components/AuthForm/authForm';

const AuthPageComponent = ({ isAuthenticated }) => {
  if(isAuthenticated) {
    return (
    <Redirect to={{
      pathname: "/page_1",
      state: { from: document.location.pathname }
    }}/>
    )
  }
  return <AuthForm />;
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.isAuthenticated
  }
}

export const AuthPage = connect(mapStateToProps, null)(AuthPageComponent)