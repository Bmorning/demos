

import React from 'react';

function List() {

  function NumberList(props) {
    const nums = props.numbers;
    const listItems = nums.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  const numbers = [1,245,647,745,3445]
  return (
    <NumberList numbers={numbers} />
  );
}

export default List;
