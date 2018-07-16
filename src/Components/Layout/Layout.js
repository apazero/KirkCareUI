import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PickList from '../PickList/PickList';

class Layout extends Component {
    render() {
      return (
        <div>
            <Header />
            <PickList />
            <Footer />
        </div>
      );
    }
  }
  
  export default Layout;