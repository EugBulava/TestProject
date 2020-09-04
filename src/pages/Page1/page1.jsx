import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Container, Button, Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import { ListContainer } from '../Page1/components/ListContainer/listContainer'

import styles from './page1.module.css'

const Page1Component = ({ isAuthenticated }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if(!isAuthenticated) {
    return (
    <Redirect to={{
      pathname: "/auth",
      state: { from: document.location.pathname }
    }}/>
    )
  }

  const Buttons = () => {

    return [].map.call('_'.repeat(50), (a,i)=>(i+1).toString()).map((el, idx) => {
      return (
        <a className={styles.buttonLink} href={`#List-${idx+1}`} key={idx+1}>
          <Button className={styles.numberButton} variant="contained" size="small" key={idx+1}>
            {el}
          </Button>
        </a>
      )
    })
  }

  return (
    <Container className={styles.contentContainer} maxWidth={"md"}>
      <Button className={styles.openButton} variant="contained" color="primary" size="large" onClick={handleClickOpen}>Открыть окно</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Список'}</DialogTitle>
        <DialogContent>
          <div className={styles.numberButtons}>
            <Buttons />
          </div>
          <ListContainer />
        </DialogContent>
      </Dialog>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.isAuthenticated
  }
}

export const Page1 = connect(mapStateToProps, null)(Page1Component)