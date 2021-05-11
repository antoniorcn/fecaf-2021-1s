import React from 'react';

export default Contexto = React.createContext(
    {
        nome: "",
        token: "",
        setToken: () => {},
        setNome: () => {}
    }
);

export class EstadoGlobal extends React.Component { 
    state = { 
        token: "",
        nome: "",
    }

    // setEstado = (field, value) => { 
    //     const novoState = {...this.state};
    //     novoState[field] = value;
    //     this.setState(novoState);
    // }

    setToken = (token) => { 
        const novoState = {...this.state};
        novoState.token = token;
        this.setState(novoState);
    }

    setNome = (nome) => { 
        const novoState = {...this.state};
        novoState.nome = nome;
        this.setState(novoState);
    }


    render() {
        return (
            <Contexto.Provider value={
                { 
                    token: this.state.token,
                    nome: this.state.nome,
                    setToken : this.setToken,
                    setNome : this.setNome
                }
            }>
                {this.props.children}
            </Contexto.Provider>
        );
    }
}
