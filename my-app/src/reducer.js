export const initialState = {
    basket : [],
    user:null
}
const reducer = (state,action) => {
   
    console.log(action);
    console.log(state)
    

    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],
            }
    // Logic for adding item to basket
        case "REMOVE_FROM_BASKET":
        // LOGIC for Removing items from basket
          let newBasket = [...state.basket];   // It is current Basket
          
          const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
          if (index>=0){
            //item exists in basket,remove it ....
              newBasket.splice(index,1)
          }
        //   else{
        //     console.warn{
        //         "Can't remove product {id} as its not present"
        //     }
        //   }

          return{
            ...state,
            basket:newBasket,
          }
          default:
            return state;}
  
}

export default reducer;