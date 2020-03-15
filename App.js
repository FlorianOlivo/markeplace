import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const AutorizationContext = React.createContext(null);

class AutorizationProvider extends React.Component {
  state = {
    isLogged : false,
    toLogin : ()=> this.setState({isLogged : !this.state.isLogged}),
    toLogout: ()=> this.setState({isLogged : false}),
    count: ()=> this.incrementCount()
  }
  
  render() {
    return (
      <AutorizationContext.Provider value = {this.state}>
        {this.props.children}
      </AutorizationContext.Provider>
      )
  }
}

const withAutorization = (Component) => {
  class NewComponent extends React.Component {
    render() {
      return(
        <AutorizationContext.Consumer>
        { value => <Component {...value}{...this.props}/>}
        </AutorizationContext.Consumer>
        )
    }
  }
  return NewComponent;
}

const useStyles = theme => ({
  root: {
    backgroundColor: "blue"
  }
})

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
 }
 
 incrementCount= () => {
  this.setState({
    count:this.state.count+1
  })
}
 
  render() {
    return (
      <div  className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="panier">
          
            <Link to="/panier">Panier - {this.state.count} articles</Link>
          </li>
          <li className="connexion">
            <Link to="/signin">{this.props.isLogged ? "Se connecter" : "Se déconnecter"}</Link>
          </li>
          
         {/* <li className="connexion">
            <Link to="/signup">Sign up</Link>
          </li> */}
        </ul>

        <hr />
        

      </div>)
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
 }
 
 incrementCount= () => {
  this.setState({
    count:this.state.count+1
  })
}
  render() {
    const { classes } = this.props;
  return (
    
    <div className = "articles">
    <h3>Nombre d'articles dans le panier: {this.state.count}</h3>
    
    <figure className="article_card">
        <div className="image">
          <div className="test" style={{ backgroundImage: "url(" + "https://lh3.googleusercontent.com/proxy/hwwIsl6dqYRfaM0wIJk1imX60rS189__mGt7OLtHG2fQXS0-W52txdPEc0oaXzPGziSqtSsx6urXpGL5-K03yHFCaNMFkN1o3ZOme79cM1gDqu4ujiLoyKGJfareAwVCfx2YWbkVB0Cx4rrgXyhZyZh7VVWkjDZ3ZNmdYMTe5bOrUlNE9Ij1idFEjNCbzIT1lHtisDKt0DCFVcck2M8FmQ" + ")",backgroundSize: 'cover',}}></div>
          <a href="#" className="add-to-cart" onClick={this.incrementCount}>Ajouter au panier</a>
        </div>
        <figcaption>
          <h2>AIR MAX 95 Monarch</h2>
          <p>Des jolies sneakers</p>
          <div className="price">227€ </div>
        </figcaption>
      </figure>
      
      <figure className="article_card">
        <div className="image">
          <div className="test" style={{ backgroundImage: "url(" + "https://www.prodirectfit.com/productimages/Main/203482_Main_Thumb_0535603.jpg" + ")",backgroundSize: 'cover',}}></div>
          <a href="#" className="add-to-cart" onClick={this.incrementCount}>Ajouter au panier</a>
        </div>
        <figcaption>
          <h2>AIR MAX 200</h2>
          <p>Des jolies sneakers</p>
          <div className="price">90€ </div>
        </figcaption>
      </figure>
      
      <figure className="article_card">
        <div className="image">
          <div className="test" style={{ backgroundImage: "url(" + "https://lh3.googleusercontent.com/proxy/hwwIsl6dqYRfaM0wIJk1imX60rS189__mGt7OLtHG2fQXS0-W52txdPEc0oaXzPGziSqtSsx6urXpGL5-K03yHFCaNMFkN1o3ZOme79cM1gDqu4ujiLoyKGJfareAwVCfx2YWbkVB0Cx4rrgXyhZyZh7VVWkjDZ3ZNmdYMTe5bOrUlNE9Ij1idFEjNCbzIT1lHtisDKt0DCFVcck2M8FmQ" + ")",backgroundSize: 'cover',}}></div>
          <a href="#" className="add-to-cart" onClick={this.incrementCount}>Ajouter au panier</a>
        </div>
        <figcaption>
          <h2>AIR MAX 95 Monarch</h2>
          <p>Des jolies sneakers</p>
          <div className="price">227€ </div>
        </figcaption>
      </figure>
      
      <figure className="article_card">
        <div className="image">
          <div className="test" style={{ backgroundImage: "url(" + "https://www.prodirectfit.com/productimages/Main/203482_Main_Thumb_0535603.jpg" + ")",backgroundSize: 'cover',}}></div>
          <a href="#" className="add-to-cart" onClick={this.incrementCount}>Ajouter au panier</a>
        </div>
        <figcaption>
          <h2>AIR MAX 200</h2>
          <p>Des jolies sneakers</p>
          <div className="price">90€ </div>
        </figcaption>
      </figure>
      
      <figure className="article_card">
        <div className="image">
          <div className="test" style={{ backgroundImage: "url(" + "https://lh3.googleusercontent.com/proxy/hwwIsl6dqYRfaM0wIJk1imX60rS189__mGt7OLtHG2fQXS0-W52txdPEc0oaXzPGziSqtSsx6urXpGL5-K03yHFCaNMFkN1o3ZOme79cM1gDqu4ujiLoyKGJfareAwVCfx2YWbkVB0Cx4rrgXyhZyZh7VVWkjDZ3ZNmdYMTe5bOrUlNE9Ij1idFEjNCbzIT1lHtisDKt0DCFVcck2M8FmQ" + ")",backgroundSize: 'cover',}}></div>
          <a href="#" className="add-to-cart" onClick={this.incrementCount}>Ajouter au panier</a>
        </div>
        <figcaption>
          <h2>AIR MAX 95 Monarch</h2>
          <p>Des jolies sneakers</p>
          <div className="price">227€ </div>
        </figcaption>
      </figure>
      
      <figure className="article_card">
        <div className="image">
          <div className="test" style={{ backgroundImage: "url(" + "https://www.prodirectfit.com/productimages/Main/203482_Main_Thumb_0535603.jpg" + ")",backgroundSize: 'cover',}}></div>
          <a href="#" className="add-to-cart" onClick={this.incrementCount}>Ajouter au panier</a>
        </div>
        <figcaption>
          <h2>AIR MAX 200</h2>
          <p>Des jolies sneakers</p>
          <div className="price">90€ </div>
        </figcaption>
      </figure>
      
      
    </div>
  );
}
}

class SignIn extends Component {
  state = {email : "", password : ""}
  
  handleChange=(event)=>{
   
    this.setState({[event.target.name]:event.target.value})
    console.log(this.state.email)
  }
  
  handleSubmit=(event)=>{
    
    this.props.toLogin();
}

  
  render() {
    console.log(this.props)
  return (
    <div>
      <h2> {this.props.isLogged ? "Vous êtes connecté" : "Vous êtes déconnecté"}</h2>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="email" name="email" onChange =  {this.handleChange}/>
            <input type="password" placeholder="password" name="password" onChange =  {this.handleChange} />
            <Link to="/"><button onClick = {this.handleSubmit}>Connexion</button></Link>
            <p className="message">
              Pas encore inscrit ? <Link to="/signup">Créez votre compte</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
}

class SignUp extends Component {
  
  state = {email : "", password : "", username :""}
  
  handleChange=(event)=>{
   
    this.setState({[event.target.name]:event.target.value})
    console.log(this.state.email)
  }
  
  render() {
  return (
    <div>
      <h2>S'inscrire</h2>
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" name="username" onClick={this.handleChange} placeholder="username" />
            <input type="password" name="password" onClick={this.handleChange} placeholder="password" />
            <input type="text" name="email" onClick={this.handleChange} placeholder="email address" />
            <button>S'inscrire</button>
            <p className="message">
              Déja inscrit ? <Link to="/signin">Connectez-vous</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
}


const SignInWithAutorization = withAutorization(SignIn)
const SignUpWithAutorization = withAutorization(SignUp)
const MenuWithAutorization = withAutorization(Menu)
const HomeWithAutorization = withAutorization(withStyles(useStyles())(Home))





export default class Marketplace extends Component {
 // state = {isLogged: false, toLogIn: ()=> this.setState({isLogged: true}) toLogOut: ()=> this.setState({isLogged: false?}) };
  
  render() {
  
  return (
   <AutorizationProvider>
    <BrowserRouter> 
    <MenuWithAutorization />
      
        <Switch>
          <Route exact path="/">
            <HomeWithAutorization />
          </Route>
          <Route path="/signin">
            <SignInWithAutorization/>
          </Route>
          <Route path="/signup">
            <SignUpWithAutorization />
          </Route>
        </Switch>
      
    </BrowserRouter>
    </AutorizationProvider>
  );
}
}


// You can think of these components as "pages"
// in your app.







