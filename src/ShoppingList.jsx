import React, { useRef, useState } from 'react';
import Item from './Item';
import styles from './ShoppingList.module.css';

const ShoppingList = () => {
  const formRef = useRef();
  const inputRef = useRef();
  // let update = false;

  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(0);

  const submit = (event) => {
    event.preventDefault();

    if (editId) {
      const editList = items.find((i) => i.id === editId);
      const updatedItems = items.map((t) =>
        t.id == editList.id
          ? (t = { id: t.id, item })
          : { id: t.id, item: t.item }
      );
      setItems(updatedItems);
      setEditId(0);
      setItem('');
      return;
    }

    if (item !== '') {
      setItems([{ id: `${item}-${Date.now()}`, item }, ...items]);
      setItem('');
    }
    // const inputValue = inputRef.current.value;
    // console.log(update);
    // if (!inputValue) return;
    // if (update) {
    //   formRef.current.reset();
    //   return inputValue;
    // }
    // setItems([...items, inputValue]);
    // formRef.current.reset();
  };

  // const onChange = (e) => {
  //   setItem(e.target.value);
  // };

  const editItem = (id) => {
    console.log(id);
    const editList = items.find((i) => i.id === id);
    setItem(editList.item);
    setEditId(id);
    // formRef.value = item;
    // setUpdate(true);
    // const replaceValue = () => onChange();
    // setItems([
    //   ...items,
    //   items.map((list) => {
    //     list === item ? (list = replaceValue) : list;
    //   }),
    // ]);
    //   items.delete();
    // };
  };

  const deleteItem = (id) => {
    setItems(items.filter((list) => list.id !== id));
    setEditId(id);
  };

  return (
    // <div className={body}>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Shopping List</h1>
      </header>
      <form ref={formRef} onSubmit={submit} className={styles.form}>
        <input
          ref={inputRef}
          type='text'
          value={item}
          className={styles.input}
          onChange={(e) => setItem(e.target.value)}
          placeholder='eg. Egg'
        />
        <button type='submit' className={styles.submitBtn}>
          {editId ? 'Edit' : 'Submit'}
        </button>
      </form>
      <ul className={styles.items}>
        {items &&
          items.map((list) => (
            <Item
              id={list.id}
              item={list.item}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ))}
      </ul>
      <button className={styles.clearBtn}>Clear Items</button>
    </div>
    // </div>
  );
};

export default ShoppingList;
