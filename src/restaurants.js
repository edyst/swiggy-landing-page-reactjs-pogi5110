import react, {Component} from "react";
import ios from './img/iOS.png'
import gplay from './img/playstore.png'
import rest1 from './img/restr-1.png'
import rest2 from './img/restr-2.png'
import './restaurants.css'

class Restaurant extends Component{
    render() {
        return(
            <div class="restaurant-container">
                <div class="flex-rest">
                <div class="rest-written">
                    <div class="text-rest">
                    <h1 class="head">Restaurants in <br/>your pocket</h1>
                    <p class="rest-descrip">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.<br/><br/></p>
                    </div>
                    <div class="download">
                        <a href=" "><img src={ios} alt="ios" class="down-img"></img></a>
                        <a href=" "><img src={gplay} alt="play store" class="down-img"></img></a>
                    </div>
                </div>
                <div>
                    <img src={rest1} alt="sample"class="sample"></img>
                    <img src={rest2} alt="sample"class="sample"></img>
                </div>
                </div>
            </div>
        )
    }
}
export default Restaurant