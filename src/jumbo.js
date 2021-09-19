import react, {Component} from "react";
import logo from './img/Swiggy-logo.png';
import './jumbo.css';

class Jumbo extends Component{
    render(){
        return(
            <div class="main">
                        <div class="main-left">
                            
                            <div>
                                <img src={logo} alt="logo" class="logo-main"/>
                                <div class="login-cont">
                                    <a class="login-button" href=" ">Login</a>
                                    <a class="signup-button" href=" ">Sign up</a>
                                </div>
                            </div>
                            <div>
                                <h1 class="big-head">Hungry?</h1> 
                                <p class ="small-head">Order food from favourite restaurants near you.</p> 
                            </div>
                            <div class="input-field">
                                <input class="input-location" placeholder="Enter your delivery location" value=""></input>
                                <div class="locate-button">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"></path></svg>
                                <span> Locate Me</span>
                                </div>
                                <label><a class="find-food" href=" ">FIND FOOD</a></label>
                            </div>
                            <div>
                                <p class="grey-head">POPULAR CITIES IN INDIA</p>
                                <a href=" " class="dark">Ahmedabad </a>
                                <a href=" "class="light">Bangalore </a>
                                <a href=" "class="dark">Chennai </a>
                                <a href=" "class="light">Delhi </a>
                                <a href=" "class="dark">Gurgaon </a>
                                <a href=" "class="light">Hyderabad </a>
                                <a href=" "class="dark">Kolkata </a>
                                <a href=" "class="light">Mumbai </a>
                                <a href=" "class="dark">Pune </a>
                                <a href=" "class="light">&more. </a>
                            </div>
                        </div>
                    
                        <div class="main-right">
                            
                        </div>
            </div>
            
        )
    }
}
export default Jumbo