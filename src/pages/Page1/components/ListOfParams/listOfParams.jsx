import React from 'react';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './listOfParams.module.css'

export const ListOfParams = () => {

  return [].map.call('_'.repeat(50), (a,i)=>(i+1).toString()).map((el, idx) => {
    return (
      <ListItem button key={idx+1} className={styles.listItem} id={`List-${idx+1}`}>
        <ListItemText primary={`${el} Text`} />
      </ListItem>
    )
  })
}