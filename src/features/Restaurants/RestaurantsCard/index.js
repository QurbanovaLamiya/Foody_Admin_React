import {Card} from 'react-bootstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestaurantCardStyle  from "./RestaurantsCard.module.css";


const RestaurantsCard = () =>{
    return(
        <Card  className={RestaurantCardStyle.Card}>
        <Card.Body className={RestaurantCardStyle.Content}>
          <img className={RestaurantCardStyle.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw00jhwPqPOOkKhpzAMX8JSlfYV8HWX-YLBg&usqp=CAU" alt=""/>
          <Card.Text className={RestaurantCardStyle.Text}>
           <span className={RestaurantCardStyle.Restaurant}>Papa John’s</span>
           <span className={RestaurantCardStyle.Product}> Pizza</span>
          </Card.Text>
        <DeleteForeverIcon className={RestaurantCardStyle.Delete}/>
        </Card.Body>
      </Card>
    )
}

export default RestaurantsCard