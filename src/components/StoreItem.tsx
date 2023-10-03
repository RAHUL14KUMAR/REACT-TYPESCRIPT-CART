type StoreItemsProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

import { useShoppingCart } from "../context/ShoppingCartContext"
import {Card,Button} from "react-bootstrap"
import { formatCurrency } from "../utilites/formatCurrency"
function StoreItem({id, name, price, imgUrl}:StoreItemsProps) {
    const {
        getItemQuantity,
        increasedQuantity,
        decreasedQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity = getItemQuantity(id)
    
  return (
    <Card key={id} className="h-100">
        <Card.Img 
        variant="top" 
        src={imgUrl} 
        height="250px" 
        style={{objectFit:"cover"}}
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-space-between align-items-baseline">
                <span className="fs-2">{name}</span>
                <span className="fs-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
            {
                quantity===0?(
                    <Button className="w-100" onClick={() => increasedQuantity(id)}>AddTocart</Button>
                ):(<div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                        <Button onClick={() => decreasedQuantity(id)} value={quantity}>-</Button>
                        <div>
                        <span className="fs-3">{quantity}</span>in the cart
                        </div>
                        <Button onClick={() => increasedQuantity(id)} value={quantity}>+</Button>
                    </div>
                    <div>
                        <Button 
                        onClick={() => removeFromCart(id)}
                        variant="danger" size="sm">Remove</Button>
                    </div>
                </div>)
            }
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem
