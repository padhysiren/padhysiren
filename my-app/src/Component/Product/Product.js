import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "../../StateProvider";




const Product = ({id,title,images,price,rating}) => {
const [{basket},dispatch] = useStateValue();
  
  const addToBasket=()=>{
        // Add item to basket....
          dispatch({
          type:"ADD_TO_BASKET",
          item:{
            id:id,
            title:title,
            images:images,
            price:price,
            rating:rating
          },

        });
      }
  
  
  return (
    <div className='product'>
        <div className="product_info">
        <p>{title}</p>
        <p className='product_price'>
        <small>Rs</small>
        <strong>{price}</strong>
        </p>
        <div className="produt_rating">
        {
                Array(rating)
                  .fill()     
                  .map((_)=>(
                     <StarIcon/>
                  ))
                  }
        </div>
      </div>
              <img className="image" src= {images} alt=""  />
              <button onClick={addToBasket}>Add to basket</button>
      </div>
  )
}


export default Product;