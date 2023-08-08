import "./Home.css"
import Header from "../../Component/Header/Header"
import img2 from '../../assets/Amazon_Wallpaper.jpg'
import Product from "../../Component/Product/Product"
import img3 from "../../assets/Start_up.jpg"
import img4 from "../../assets/women.jpg"
import img5 from "../../assets/mens_shirt.jpg"
import img6 from "../../assets/Smart_Phone.jpg"
import img7 from "../../assets/Bag.jpg"
import img8 from "../../assets/Club.jpg"
//import Header from "../../Component/Header/Header"
const Home = () => {
  return (
    <div>  
       <Header/>
      <div className="home">
         <img className="home_image"
          src={img2} alt="Wallpaper Not found" /> 
     </div>
      {/* Product id, title ,rating,image */}
         <div className="home_row">
         
            <Product
           id ="123123"
           title="The Lean StartUp:How constant innovation Creates"
           price={201}
           rating={3}
           images= {img3} 
           /> 
            <Product
           id ="1231456"
           title="Sheetal Associates Women's Puff Sleeve V-Neck Bodycon Casual Mini Dress"
           price={1001}
           rating={4}
           images= {img4} 
           />
             <Product
           id ="1231456"
           title="Sheetal Associates Women's Puff Sleeve V-Neck Bodycon Casual Mini Dress"
           price={1001}
           rating={4}
           images= {img4} 
           />
         </div>

       <div className="home_row">
         <Product
           id ="123156"
           title="Urbano Fashion Men's Printed Full Sleeve Slim Fit Cotton T-Shirt"
           price={2000}
           rating={3}
           images= {img5} 
           />
       
           <Product
           id ="123126"
           title="OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)"
           price={ 852}
           rating={3}
           images= {img6} 
           />
          
           <Product
           id ="1237593"
           title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
           price={3086}
           rating={4}
           images= {img7} 
           />
         </div>
         <div className="home_row">
         <Product
           id ="123123"
           title="jaanshi Women's Clubwear Transparent Dress Strapless"
           price={2589}
           rating={5}
           images= {img8} 
           />
          <Product
           id ="1237593"
           title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
           price={3086}
           rating={4}
           images= {img7} 
           />
            <Product
           id ="1237593"
           title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
           price={3086}
           rating={4}
           images= {img7} />

         
    </div>
    </div>
  
    
  )
}

export default Home