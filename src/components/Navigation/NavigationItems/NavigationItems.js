import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
const navigationItems = () => (
  <ul className={styles.navigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
