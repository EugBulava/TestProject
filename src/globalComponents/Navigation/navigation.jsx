import React from 'react'
import {Link as ReactRouterLink, useLocation } from "react-router-dom";
import styles from './navigation.module.css'
import { ListItem, ListItemIcon, List } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import { interiorPages } from '../../constants/pages';

export const Navigation = () => {

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  const location = useLocation();

  return location.pathname !== '/auth' ? (
    <nav className={styles.nav}>
      <List>
        {Object.entries(interiorPages).map((el, idx) => (
        <ReactRouterLink to={`${el[0]}`} key={idx} className={styles.link}>
          <ListItem button key={idx}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText primary={el[1]} />
          </ListItem>
        </ReactRouterLink>
        ))}
      </List>
    </nav>
  ) : null
}
