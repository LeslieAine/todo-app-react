/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  // const [updateInput, setUpdateInput] = useState(itemProp.title);
  const editInputRef = useRef(null);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button onClick={() => delTodo(itemProp.id)}><FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} /></button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>

      </div>
      <input
        type="text"
                // value={updateInput}
        className={styles.textInput}
        style={editMode}
                // onChange={(e) => setUpdateInput(e.target.value)}
        ref={editInputRef}
        defaultValue={itemProp.title}
        onKeyDown={handleUpdatedDone}
      />
    </li>

  );
};

export default TodoItem;
