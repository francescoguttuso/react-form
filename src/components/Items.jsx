import "./Items.css";
export const Items = (props) => (
  <>
    <ul>
      {props.items.map((item) => (
        <li key={item.inputTitle}>
          {item.inputTitle}{" "}
          <button
            onClick={() =>
              props.setItems(items.filter((_item) => _item !== item))
            }
          >
            Elimina
          </button>
        </li>
      ))}
    </ul>
  </>
);
