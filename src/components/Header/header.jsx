import React from 'react'
import { useLocation } from "react-router-dom";

import { pathes } from '../../constants/pages';

import styles from './header.module.css'

export const Header = () => {

  const location = useLocation();

  return (
    <>
      <header className={styles.header}>{pathes[Object.keys(pathes).find((el) => el === location.pathname)]}</header>
    </>
  );
}