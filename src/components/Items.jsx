import "./Items.css";
export const Items = (props) => (
  <>
    <ul className="book-list">
      {props.items.map((item) => (
        <li key={item.title} className="book-item">
          <div className="book-info">
            <span className="book-title">{item.title}</span>
            <span className="book-author">di {item.author}</span>
          </div>
          <button
            className="delete"
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
