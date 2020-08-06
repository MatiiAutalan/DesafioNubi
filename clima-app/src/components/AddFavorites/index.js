import React from "react";
import styles from "./styles.module.scss";
import heartfav from "../../assets/heartfav.png";

const AddFavorites = () => {
  const handleClick = () => {
    alert("Agregado a favoritos");
  };
  return (
    <button className={styles.fav}>
      <img className={styles.heart} src={heartfav} alt="icono favoritos" onclick={handleClick}/>
    </button>
  );
};

export default AddFavorites;
