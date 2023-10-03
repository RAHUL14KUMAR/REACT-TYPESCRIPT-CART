import {useContext,createContext,ReactNode, useState} from "react"
type ShoppingCartProviderProps = {
    children:ReactNode
}
type ShoppingCartContext={
    getItemQuantity:(id:number)=>number
    increasedQuantity:(id:number)=>void
    decreasedQuantity:(id:number)=>void
    removeFromCart:(id:number)=>void
}
type CartItem={
    id:number,
    quantity:number
}


const ShoppingCartContext=createContext({} as ShoppingCartContext)

export function ShopingCartProvider({children}:ShoppingCartProviderProps){
    const [cartItems,setCartItems]=useState<CartItem[]>([])

    function getItemQuantity(id:number){
        return cartItems.find(item=>item.id==id)?.quantity||0
    }
    function increasedQuantity(id:number){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id==id)==null){
                return [...currItems,{id,quantity:1}]
            }else{
                return currItems.map((item=>{
                    if(item.id==id){
                        return {...item,quantity:item.quantity+1}
                    }else{
                        return item
                    }
                }))
            }
        })
    }

    function decreasedQuantity(id:number){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id==id)==null){
                return [...currItems,{id,quantity:0}]
            }else{
                return currItems.map((item=>{
                    if(item.id==id){
                        return {...item,quantity:item.quantity-1}
                    }else{
                        return item
                    }
                }))
            }
        })
    }

    function removeFromCart(id:number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider value={{getItemQuantity,increasedQuantity,decreasedQuantity,removeFromCart}}>
        {children}
    </ShoppingCartContext.Provider>
}



export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}