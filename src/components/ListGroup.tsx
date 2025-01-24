import { useState } from "react";

function ListGroup() {
  const items = ["Francis", "Angelo", "Cute", "Hehe", "Hatdog"];

  //State Hook - helps to have function that changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  items.map((item) => <li>{item}</li>);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
