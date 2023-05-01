import { Link } from "react-router-dom"

const CategoryCard = (props:any) => {
  return (
    <>
    <Link to="/"><img src={`/images/category${props.index}.jpg`} alt="category" className="w-full h-full" /></Link>
    </>
  )
}

export default CategoryCard