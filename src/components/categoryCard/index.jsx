import './index.css'

const CategoryCard = ({id, title, url, click, description}) => {
    function location() {
        if (!click) return
        sessionStorage.setItem('category', JSON.stringify({id, title, url, description}));
        window.location.href = `/categorias`
    }  
  const style = {
    content: '""',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url("${url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'all 0.3s ease-in-out',
  }

  return (
    <section className='categoryCard' onClick={location}>
      <div style={style}></div>
      <h3>{title}</h3>
    </section>
  )
}

export default CategoryCard