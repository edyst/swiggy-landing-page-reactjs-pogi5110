import './App.css';
import Jumbo from './jumbo';
import Feature from './feature-section';
import react, {Component} from 'react';
import Restaurant from './restaurants';
import Footer from './footer';

class App extends Component{
  render() {
    return(
      <div>
        <Jumbo />
        <Feature />
        <Restaurant />
        <Footer />
      </div>
    )
  }
}

export default App;
