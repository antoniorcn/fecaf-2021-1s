import React from 'react';
export const MeuContexto = React.createContext(
    { 
        token: "",
        nome: "",
        atualizarState : () => {}
    }
);

export class ContextoPrincipal extends React.Component { 
    atualizarState = (field, value) => { 
        const novoState = {...this.state};
        novoState[field] = value;
        this.setState(novoState);
    }

    state = { 
        token: "",
        nome: "",
        atualizarState : this.atualizarState
    }

    render() {
        return (
            <MeuContexto.Provider value={this.state}>
                {this.props.children}
            </MeuContexto.Provider>
        );
    }
}
