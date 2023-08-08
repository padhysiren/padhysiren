import "./Checkout.css"
import Header from "../../Component/Header/Header"
import { useStateValue } from "../../StateProvider"
import img9  from "../../assets/prime.jpg"
import CheckoutProduct from "../../CheckoutProduct"
import Subtitle from "../../Subtitle"

const Checkout = () => {
  const [{basket}] = useStateValue()
  return (
    <div> <Header/>
    <div className="checkout">
        <div className="checkout_left">
        <img className="checkout_ad"
         src={img9} alt="" />

         {basket?.length === 0 ? (
          <div>
               <h2>Your Shopping Basket is Empty</h2>
               <p>
                You have no items in your basket.To buy one or more items,click   "Add to basket" next to the item.
               </p>
             </div>
         ):(
             <div>
              <h2 className="checkout_title">Your Shopping Basket</h2>
                      {basket.map((item)=>(
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.images}
                          price={item.price}
                          rating={item.rating}
                        />
                      ))}  
                 </div>
                )}
            </div>
          {basket.length > 0 && (
                 <div className="checkout_right">
                       <h1>Subtotal</h1>
                        <Subtitle/> 
                 </div>

          ) } 








    </div>
    </div>
  )
}

export default Checkout