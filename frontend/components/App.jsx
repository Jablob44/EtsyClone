import GreetingContainer from "./greeting/greeting_container";
// import login_form_container from "./sessionform/login_form_container";
// import signup_form_container from "./sessionform/signup_form_container";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Modal from "./modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListingIndexContainer from "./listing/listing_index_container"
// import ListingIndexItem from "./listing/listing_index_item";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

// import { Switch } from "react-router-dom";
const App = () => (
    <div>
      <Modal />
      <header>
        <Link to='/' className="ununderlined-link">
          <h1 className="etsme">Etsme</h1>
        </Link>
          <input className="search-bar" placeholder="Search!" type="text" />
        <div className="right-side-header">
          <div className="login?">
            <GreetingContainer />
          </div>
          {/* <ShoppingCartContainer /> */}
          <button className="cart-button right-button">
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
            {/* <FontAwesomeIcon icon={'user-secret'} /> */}
            🛒
          </button>
        </div>
      </header>
      <div>
        {/* <h1>Product listings</h1> */}
        <Switch>
          <Route exact path='/' component={ListingIndexContainer}/>
          {/* <Route className="login-route" path="/login" component={login_form_container} />
          <Route className="signup-route" path="/signup" component={signup_form_container} /> */}
        </Switch>
      </div>
      <footer>
        <h1 className="etsme-mini">Etsme</h1>
        <p>This is a very good and complete app.</p>
      </footer>
  
    </div>
  );

export default App;