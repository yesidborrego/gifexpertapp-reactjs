import { useState } from "react"

export const AddCategory = ({ onNewCategory, error, onClearErrorCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }) => {
    setInputValue(target.value);
    if(error) onClearErrorCategory()
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={onChangeInput}
      />
      {
        error ? ( <p className="error-category">{ error }</p> ) : null
      }
    </form>
  )
}
