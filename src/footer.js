import react, {Component} from "react";
import ios from './img/iOS.png'
import gplay from './img/playstore.png'
import pnglogo from './img/logopng.png';
import fb from './img/fb.webp';
import insta from './img/insta.webp';
import twitter from './img/twitter.webp';
import pin from './img/pinterest.webp';
import './footer.css';
import City from './cities';

class Footer extends Component{
    render(){
        return(
            <div class="footer">
                <div class="flexbox">
                    <div class="up">
                        <div class="first">
                            <div class="footer-head">COMPANY</div>
                            <ul>
                                <li><a href=" " class="lists">About Us</a></li>
                                <li><a href=" " class="lists">Team</a></li>
                                <li><a href=" " class="lists">Careers</a></li>
                                <li><a href=" " class="lists">Swiggy Blog</a></li>
                                <li><a href=" " class="lists">Bug Bounty</a></li>
                                <li><a href=" " class="lists">Swiggy Super</a></li>
                                <li><a href=" " class="lists">Swiggy Corporate</a></li>
                                <li><a href=" " class="lists">Swiggy Instamart</a></li>
                            </ul>
                        </div>
                        <div class="second">
                            <div class="footer-head">CONTACT</div>
                            <ul>
                                <li><a href=" " class="lists">Help & Support</a></li>
                                <li><a href=" " class="lists">Partner with us</a></li>
                                <li><a href=" " class="lists">Ride with us</a></li>
                            </ul>
                        </div>
                        <div class="third">
                            <div class="footer-head">LEGAL</div>
                            <ul>
                                <li><a href=" " class="lists">Terms & Conditions</a></li>
                                <li><a href=" " class="lists">Refund & Cancellation</a></li>
                                <li><a href=" " class="lists">Privacy Policy</a></li>
                                <li><a href=" " class="lists">Cookie Policy</a></li>
                                <li><a href=" " class="lists">Offer Terms</a></li>
                                <li><a href=" " class="lists">Phishing & Fraud</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li class="down-list"><a href=" " class="list"><img src={ios} alt="ios" class="down-button"></img></a></li>
                                <li class="down-list"><a href=" " class="list"><img src={gplay} alt="gplay" class="down-button"></img></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="middle">
                        <p class="footer-head">WE DELIVER TO</p>
                        <City />
                    </div>
                    <div class="down">
                        <div><a href=" "><img src={pnglogo} alt="logo" class="pnglogo"></img></a></div>
                        <div class="font-up">© 2021 Swiggy</div>
                        <div>
                            <a href=" "><img src={fb} alt="fb" class="socials"></img></a>
                            <a href=" "><img src={pin} alt="pinterest" class="socials"></img></a>
                            <a href=" "><img src={insta} alt="insta" class="socials"></img></a>
                            <a href=" "><img src={twitter} alt="twitter" class="socials"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer