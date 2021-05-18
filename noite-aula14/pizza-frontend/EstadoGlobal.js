import React from 'react';

const ContextoPrincipal = React.createContext({
    token: "",
});

export class EstadoGlobal extends React.Component { 

    state = {
        token: "ABC",
    }

    setToken = ( novoToken ) => {
         const copiaState = {...this.state};
         copiaState.token = novoToken;
         this.setState(copiaState); 
    }

    render() { 
        return (
            <ContextoPrincipal.Provider
                value = {{
                    token: this.state.token,
                    setToken: this.setToken,
                }}>
                {this.props.children}
            </ContextoPrincipal.Provider>
        );
    }
}

export default ContextoPrincipal;