import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { FormGroup } from 'reactstrap';

class CadastroProduto extends Component{
    constructor(){
        super();

        this.state = {
            produto: {
                codigo: 0,
                nomeDoLivro: "",
                autor: "",
                quantidadeEstoque: 0,
               
            },
            redirect: false,
        }
    }

    render () {
        const {redirect} = this.state;
        if(redirect) {
            return <Redirect to="/" />
        }else{
            return(
                <form onSubmit={this.handleSubmit}>  
                    <fieldset>
                    <legend>Cadastro de Produtos</legend>
                    <div>
                        <label>Código: </label>
                        <input 
                        type="number" 
                        name="codigo" 
                        id="codigo" 
                        placeholder="Insira código"
                        
                        onChange={this.handleInputChange}
                       />
                    </div>
                    <div>
                        <label>Nome do Livro: </label>
                        <input 
                        type="text" 
                        name="nomeDoLivro" 
                        id="nomeDoLivro" 
                        placeholder="Insira nome do livro"
                        value={this.state.produto.nomeDoLivro}
                        onChange={this.handleInputChange}
                        
                        />
                    </div>
                    <div>
                        <label>Autor: </label>
                        <input 
                        type="text" 
                        name="autor" 
                        id="autor" 
                        placeholder="Insira nome do autor"
                        value={this.state.produto.autor}
                        onChange={this.handleInputChange}
                        
                       />
                    </div>
                    <div>
                        <label>Quantidade: </label>
                        <input 
                        type="number" 
                        name="quantidadeEstoque" 
                        id="quantidadeEstoque" 
                        placeholder="Insira quantidade"
                        value={this.state.produto.quantidadeEstoque}
                        onChange={this.handleInputChange}
                        
                        />
                    </div>               
                            
                    <button type="submit">Cadastrar</button>
                    </fieldset>
                </form>
            )
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const codigo = target.codigo;
        const value = target.value;

        this.setState(prevState => ({
            produto: {...prevState.produto, [codigo]: value}
        }))
    };

    handleSubmit = event => {
        fetch("http://localhost:3005/sistema/produtos", {
            method:"post",
            body: JSON.stringify(this.state.produto),
            headers: {
                "Content-Type":"application/json"
            }
        })

        .then(data => {
            if(data.ok){
                this.setState({redirect: true})
            }
        })

        event.preventDefault();
    }


}

export default CadastroProduto;