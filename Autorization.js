export const auth = {
    isLogged = false,
    toLogIn=()=> this.isLogged=true
}

export const AutorizationContext = React.createContext (null);

export const withAutorization = (Component)=>{
    class NewComponent extends Component {
        render(){
            return(<AutorizationContext.Consumer>{value => <Component {... value}}/>
                </AutorizationContext>);}
                
            })
        }
    }
}
