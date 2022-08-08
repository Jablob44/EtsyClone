import GreetingContainer from "./greeting/greeting_container";
// import login_form_container from "./sessionform/login_form_container";
// import signup_form_container from "./sessionform/signup_form_container";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Modal from "./modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListingIndexContainer from "./listing/listing_index_container"
import ListingShowContainer from "./listing/listing_show_container";
import SearchBar from "./search/search_bar";
import UserShow from "./user/user_show_container";
import ListingForm from "./listing/listing_form_container";
import ListingFormEdit from "./listing/listing_form_edit";
import { Redirect } from "react-router-dom";
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
          {/* <input className="search-bar" placeholder="Search!" type="text" />
           */}
          <SearchBar />
        <div className="right-side-header">
          <div className="login?">
            <GreetingContainer />
          </div>
          {/* <ShoppingCartContainer /> */}
          <button className="cart-button right-button">
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
            {/* <FontAwesomeIcon icon={'user-secret'} /> */}
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </header>
      <div className="page-contents">
        {/* <h1>Product listings</h1> */}
        <Switch>
          <Route exact path='/' component={ListingIndexContainer}/>
          <Route exact path='/listings/:listingId' component={ListingShowContainer}/>
          <Route exact path='/users/:userId' component={UserShow}/>
          <Route exact path='/createListing' component={ListingForm}/>
          <Route exact path='/listings/:listingId/edit' component={ListingFormEdit}/>
          {/* <Redirect to="/"/> */}
        </Switch>
      </div>
      <footer>
        <div className="what-is-etsme">
          <h1 className="desc-title">What is Etsme?</h1>
          <p className="desc">Etsme is inspired by the e-commerce website known as Etsy, where you buy/sell handmade items.</p>
        </div>
        <div className="footerfooter">
          <h1 className="etsme-mini">Etsme</h1>
          <a>https://github.com/Jablob44/EtsyClone</a>
          <a>https://www.linkedin.com/feed/</a>
          <p className="right-side-footer">This is a very good and complete app.</p>
        </div>
      </footer>
  
    </div>
  );

export default App;