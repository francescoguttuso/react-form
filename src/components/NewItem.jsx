import "./NewItem.css";
export const NewItem = (props) => (
  <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (props.inputValue.trim() !== "") {
          props.setItems((items) => items.concat(props.inputValue));
          props.setInputValue("");
        }
      }}
    >
      <input
        type="text"
        placeholder="Inserisci nuovo elemento"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
      <button type="submit">Invia</button>
    </form>
  </>
);
