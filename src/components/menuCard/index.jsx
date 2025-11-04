import './index.css';

const MenuCard = ({name, description, price, image}) => {
  return (
    <>
      <div className='menuCard'>
        <img src={image} alt={name} />
        <div className='containerUtil'>
          <div className='infoContainer'>
            <h2>{name} <span className='price'>${price}</span></h2>
            <p>
              {description}
            </p>
          </div>
          {/* <div className='callToAction'>
            <button className='buttonA' onClick={()=>{setOneClickBuy(true); handleEditable(id)}}>Compra en 1 Click</button>
            <button style={{fontSize: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14.5px'}} className={isInCart(id) ? 'buttonB' : 'inactive'} onClick={()=>{removeProduct(id)}}><FaRegTrashAlt /></button>
            <button className={isInCart(id) ? 'inactive' : 'buttonB'} onClick={()=>{setOneClickBuy(false); handleEditable(id)}} >Agregar al Carrito</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MenuCard;