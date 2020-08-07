import React from "react";
import heartfav from "../../../../assets/heartfav.png";

import styles from './styles.module.scss';

const EmptyFavourite = () => {
  return (
    <div className={styles.text}>
        <h2>Actualmente no posees favoritos.</h2>
        <h3>¡Presiona en el botón<img className={styles.heart} src={heartfav} alt="icono favoritos" /> para tener el clima de tus ciudades favoritas!</h3>
    </div>
  );
};

export default EmptyFavourite;
