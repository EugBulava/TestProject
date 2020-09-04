import React from 'react';
import { ListOfParams } from '../ListOfParams/listOfParams'
import styles from './listContainer.module.css'
import { List } from '@material-ui/core';

export const ListContainer = () => {

  return (
    <div className={styles.listContainer}>
      <List className={styles.list}>
        <ListOfParams />
      </List>
    </div>
  )
}