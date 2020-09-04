import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Container } from '@material-ui/core';

const Page3Component = ({ isAuthenticated }) => {
  if(!isAuthenticated) {
    return (
    <Redirect to={{
      pathname: "/auth",
      state: { from: document.location.pathname }
    }}/>
    )
  }
  return (
    <Container maxWidth={"md"}>
      <h2>Page 3</h2>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.isAuthenticated
  }
}

export const Page3 = connect(mapStateToProps, null)(Page3Component)