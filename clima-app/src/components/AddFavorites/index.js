import React from "react";
import styles from "./styles.module.scss";
import heartfav from "../../assets/heartfav.png";

const AddFavorites = ({ handleAddFavorite }) => {
  return (
    <button className={styles.fav}>
      <img className={styles.heart} src={heartfav} alt="icono favoritos" onClick={handleAddFavorite} />
    </button>
  );
};

export default AddFavorites;
