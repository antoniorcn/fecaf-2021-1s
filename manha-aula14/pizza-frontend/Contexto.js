import React from 'react';

export default ContextoPizza = React.createContext({});

export class EstadoGlobalPizza extends React.Component { 

    state = { 
        token: "",
        username: "",
    }

    setToken = (novoToken) => { 
        const novoState = {...this.state};
        novoState.token = novoToken;
        this.setState(novoState);
    }

    setUsername = (novoUsername) => { 
        const novoState = {...this.state};
        novoState.username = novoUsername;
        this.setState(novoState);
    }

    render() { 
        return (
            <ContextoPizza.Provider value={
                {
                    token: this.state.token,
                    username: this.state.username,
                    setToken: this.setToken,
                    setUsername: this.setUsername,
                }
            }>
                {this.props.children}
            </ContextoPizza.Provider>
        );
    }


}