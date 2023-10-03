type StoreItemsProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}
import {Card} from "react-bootstrap"
import { formatCurrency } from "../utilites/formatCurrency"
function StoreItem({id, name, price, imgUrl}:StoreItemsProps) {
  return (
    <Card key={id}>
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
        </Card.Body>
    </Card>
  )
}

export default StoreItem
