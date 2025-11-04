import './index.css'
import CategoryCard from '../../components/categoryCard';
import { getProducts } from '../../api/products';
import { PiKeyReturnThin } from "react-icons/pi";

function CategoriesPage() {
  const category = JSON.parse(sessionStorage.getItem('category'));

  return (
    <>
      <div className="categories-page">
        <CategoryCard
          id={category.id}
          title={category.title}
          url={category.url}
          click={false}
        />
        <div className='categoryDescription'>
          <p>{category.description}</p>
        </div>
        <div className='productContainer'>
          {getProducts().filter(product => product.category === category.title).map(product => (
            <div key={product.id} className='product'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>${product.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='returnbutton'>
        <a href="/menu"><PiKeyReturnThin />Volver al menu</a>
      </div>
    </>
  )
}

export default CategoriesPage