import { getCategories } from '../../api/products.js'
import CategoryCard from '../../components/categoryCard/index.jsx'

function MenuPage (){
    return(
        <>
            <div className="menuContainer">
                <h1 className="title">Que se te antoja?</h1>
                <div className="cardsContainer">
                    {
                        getCategories().map(i => {
                            return <CategoryCard key={i.id} click={true} title={i.name} url={i.image} description={i.description}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MenuPage