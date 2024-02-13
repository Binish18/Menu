import { useState } from "react";
import Title from "./Title";
import menu from './data'
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ['all',...new Set(menu.map((item)=> item.category))]
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories,setCategories]=useState(allCategories)
  
  const filterItems =(category)=>{
   console.log(category)
   const newItems = menu.filter((item) => item.category === category)
   setMenuItems(newItems)
  }
  // // for every item we should get back the category 
  // const tempCategories = menu.map((item)=> item.category);
  // // all the values are repeating 
  // const tempSet = new Set(tempCategories)
  // // with set it creates an obj with unique values 
  // // now turn this in array 
  // const tempItems = ['all',...tempSet]
  // console.log(tempItems)

  
  return <main>
<section className="menu">
 
    <Title text='Our Menu'/>
    <Categories categories={categories} filterItems={filterItems}/>  
    <Menu items={menuItems}/>
  
    </section>
  </main>;
};
export default App;
