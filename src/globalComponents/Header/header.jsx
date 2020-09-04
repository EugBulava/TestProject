import React from 'react'
import { useLocation } from "react-router-dom";
import { Button, Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

import { pathes } from '../../constants/pages';
import styles from './header.module.css'
import { users } from '../../constants/users';
import { changeAuthorizationState, changeUserId } from '../../pages/AuthPage/actions';

const HeaderComponent = ({isAuthenticated, userId, handleLogOutButton}) => {

  const location = useLocation({ isAuthenticated, userId });

  return (
    <>
      <header className={styles.header}>
        <span className={styles.pageName}>{pathes[Object.keys(pathes).find((el) => el === location.pathname)]}</span>
        {(() => {
          if(isAuthenticated) {
            const currentUser = users.find((user) => user.id === Number(userId));
            return (
              <div className={styles.userBlock}>
                <span className={styles.userName}>{currentUser.name}</span>
                <Avatar className={styles.userIcon} alt="icon" src={`${currentUser.avatar}`}></Avatar>
                <Button className={styles.userButton} onClick={handleLogOutButton} variant="contained" color="secondary" size="medium">LogOut</Button>
              </div>
            )
          } 
        })()}
      </header>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.isAuthenticated,
    userId: state.authState.userId
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogOutButton: () => {
    localStorage.setItem('auth', false);
    localStorage.setItem('userId', null);
    setTimeout(() => {
      dispatch(changeAuthorizationState(false));
      dispatch(changeUserId(null))
    }, 1000)
  }
})

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)