// import  { configureStore } from  "@reduxjs/toolkit" ;
// import cartReducer from './cartSlice'

// const appStore = configureStore ({
// reducer:{
//     cart:cartReducer ,
// }
// })

// export default appStore ;


import { configureStore} from "@reduxjs/toolkit"
import  cardReducer  from "./cartSlice";
const appStore = configureStore({
    reducer:{
     card: cardReducer
    }
})

export default appStore;