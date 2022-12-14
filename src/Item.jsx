import React from 'react';
import styles from './Item.module.css';

const Item = ({ id, item, editItem, deleteItem }) => {
  return (
    <li className={styles.itemRow}>
      <div className={styles.item}>
        <span className={styles.span}>{item}</span>
        <div className={styles.buttonGroup}>
          <button className={styles.editBtn} onClick={() => editItem(id)}>
            <i className='fas fa-edit'></i>
          </button>
          <button className={styles.deleteBtn} onClick={() => deleteItem(id)}>
            <i className='fas fa-trash'></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Item;
