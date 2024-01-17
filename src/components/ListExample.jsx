import React, { useState } from 'react';

const ListExample = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const repositionItem = (oldIndex, newIndex) => {
    const newItems = [...items];
    const [removedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, removedItem);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => repositionItem(index, index - 1)}>Move Up</button>
          <button onClick={() => repositionItem(index, index + 1)}>Move Down</button>
        </li>
      ))}
    </ul>
  );
};

export default ListExample;