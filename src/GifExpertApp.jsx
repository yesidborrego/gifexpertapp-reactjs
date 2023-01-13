import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);
  const [errorCategory, setErrorCategory] = useState(null);

  const onAddCategory = (category) => {
    if(categories.includes(category)) {
      setErrorCategory(`The category ${category} already exists`)
      return;
    }
    setCategories([category, ...categories]);
    setErrorCategory(null);
    // setCategories((cat) => [
    //   ...cat,
    //   "Valorant"
    // ]);
  }

  const onClearErrorCategory = () => {
    if(errorCategory) setErrorCategory(null);
  }

  return (
    <>
      <AddCategory onNewCategory={onAddCategory} error={errorCategory} onClearErrorCategory={onClearErrorCategory} />
      {
        categories.map((category, index) => (
          <GifGrid key={`${category}-${index}`} category={category} />
        ))
      }
    </>
  )
}
