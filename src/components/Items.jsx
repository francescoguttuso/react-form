import "./Items.css";
export const Items = (props) => (
  <>
    <ul>
      {props.items.map((item) => (
        <li key={item.title}>
          {item.title}{" "}
          <button
            onClick={() =>
              props.setItems((items) => items.filter((_item) => _item !== item))
            }
          >
            Elimina
          </button>
        </li>
      ))}
    </ul>
  </>
);
