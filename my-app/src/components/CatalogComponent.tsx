import { Button, Card } from "react-bootstrap";
import { difficultTimer } from '../index';
import {Product} from '../models/Product.model'

const CatalogComponent = () => {

    const handleAdd = (data: Product) => {
        difficultTimer.addToBasket(data);
      }
    
      const handleRemove = (data: Product) => {
        difficultTimer.removeFromBasket(data.id);

      } 
    return (<>
        <div>
        {difficultTimer.dataArray.map(x => 
          (<>
          <Card className = 'card'>
          <Card.Body>
            <div className='css-data'>{x.id} {x.name} {x.price}</div>
            <Button className='my-btn' onClick={() => handleAdd(x)}> Add to Basket </Button>
            <Button className='my-btn' onClick={() => handleRemove(x)}> Remove This Product </Button>
            </Card.Body>
            </Card>
          </>))}
        </div>
    </>)
}

export default CatalogComponent;