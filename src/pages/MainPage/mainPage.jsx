import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const MainPageComponent = ({ isAuthenticated }) => {
  return (
    <Redirect to={{
      pathname: `${isAuthenticated ? '/page_1' : '/auth'}`,
      state: { from: document.location.pathname }
    }}/>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.isAuthenticated
  }
}

export const MainPage = connect(mapStateToProps, null)(MainPageComponent)