import { Button, Card } from 'react-bootstrap';
import { difficultTimer } from '../index';
import { Product } from '../models/Product.model';

const BasketComponent = () => {
    
      const handleRemove = (data: Product) => {
        difficultTimer.removeFromBasket(data.id);
      } 
    

    return (<>
        <div>
        {difficultTimer.basket.map(x => 
          (<>
          <Card>
          <Card.Body>
            <div className='css-data'>{x.id} {x.name} {x.price}</div>
            <Button className='my-btn' onClick={() => handleRemove(x)}> Remove This Product </Button>
            </Card.Body>
            </Card>
          </>))}
        </div>
    </>)
}

export default BasketComponent;