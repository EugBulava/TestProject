import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const Page2Component = ({ isAuthenticated }) => {
  if(!isAuthenticated) {
    return (
    <Redirect to={{
      pathname: "/auth",
      state: { from: document.location.pathname }
    }}/>
    )
  }
  return <h2>Page 2</h2>;
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.isAuthenticated
  }
}

export const Page2 = connect(mapStateToProps, null)(Page2Component)