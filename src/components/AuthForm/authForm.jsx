import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

import { changeLoginForm, changePasswordForm } from './actions';
import { changeAuthorizationState, changeUserId } from '../../pages/AuthPage/actions';
import { users } from '../../constants/users'

import styles from './authForm.module.css'

const AuthFormComponent = ({currentLogin, currentPass, handleLoginChange, handlePasswordChange, handleButtonClick }) => {

  function ErrorAlert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [visibleProgress, setVisibleProgress] = useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClickWithErrorValues = () => {
    setOpenError(true);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  return (
    <Container className={styles.container} maxWidth="sm">
      <form className={styles.authForm} autoComplete="off">
        <span className={styles.enterText}>Enter to the system</span>
        <TextField className={styles.textInput} label="Login" variant="outlined" onChange={handleLoginChange} />
        <TextField className={styles.textInput} label="Password" type="password" variant="outlined" onChange={handlePasswordChange} />
        <Button className={styles.enteryButton} type={"submit"} size="large" variant="contained" color="primary" onClick={handleButtonClick(currentLogin, currentPass, setVisibleProgress, handleClickWithErrorValues)}>Log In</Button>
        {visibleProgress ? (
          <div className={styles.mt20px}>
            <CircularProgress color="secondary" />
        </div>
        ): null}
        <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
          <ErrorAlert onClose={handleCloseError} severity="error">
            Invalid login or password!
          </ErrorAlert>
        </Snackbar>
      </form>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    currentLogin: state.authForm.currentLogin,
    currentPass: state.authForm.currentPass,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLoginChange: (event) => dispatch(changeLoginForm(event.target.value)),
  handlePasswordChange: (event) => dispatch(changePasswordForm(event.target.value)),
  handleButtonClick: (currentLogin, currentPass, setVisibleProgress, handleClickWithErrorValues) => (event) => {
    event.preventDefault();

    setVisibleProgress(true);

    let signIn = false;

    users.map((user) => {
      if(user.validLogin === currentLogin && user.validPass === currentPass) {
        signIn = true;
        setTimeout(() => {
          dispatch(changeAuthorizationState(true));
          localStorage.setItem('auth', true);
          dispatch(changeUserId(user.id));
          localStorage.setItem('userId', user.id);
          setVisibleProgress(false);
        }, 2000);
      }
      return user;
    })
    if(!signIn) {
      setTimeout(() => {
        setVisibleProgress(false);
        handleClickWithErrorValues();
      }, 2000);
    }
  }
});

export const AuthForm = connect(mapStateToProps, mapDispatchToProps)(AuthFormComponent)