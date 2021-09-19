import react, {Component} from "react";
import minOrder from './img/No-min-order.png';
import orderTracking from './img/Live-order.png';
import fastDelivery from './img/Fast-af.png';
import './feature-section.css';

class Feature extends Component{
    render () {
        return(
            <div class="container">
                <div class="flex-start">
                <div class="minOrder">
                    <table>
                        <tr><img src={minOrder} alt="No Minimum Order" class="feature-img"></img></tr>
                        <tr><h1 class="feature-heading">No Minimum Order</h1></tr>
                        <tr><p class="feature-description">Order in for yourself or for the group,<br /> with no restrictions on order value</p></tr>
                    </table>
                </div>
                <div class="ordertrack">
                    <table>
                        <tr><img src={orderTracking} alt="No Minimum Order" class="feature-img"></img></tr>
                        <tr><h1 class="feature-heading">Live Order Tracking</h1></tr>
                        <tr><p class="feature-description">Know where your order is at all times,<br/> from the restaurant to your doorstep</p></tr>
                    </table>
                </div>
                <div class="fastDelivery">
                    <table>
                        <tr><img src={fastDelivery} alt="No Minimum Order" class="feature-img"></img></tr>
                        <tr><h1 class="feature-heading">Lightning-Fast Delivery</h1></tr>
                        <tr><p class="feature-description">Experience Swiggy's superfast delivery<br/> for food delivered fresh & on time</p></tr>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}
export default Feature;