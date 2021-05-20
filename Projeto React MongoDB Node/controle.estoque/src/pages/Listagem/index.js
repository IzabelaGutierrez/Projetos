import React, { Component } from 'react';
import api from '../Services/services';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { GoTrashcan } from 'react-icons/go';
import { GoPencil } from 'react-icons/go'

export default class Listagem extends Component {
    state = {
        produtos: [],
        produtosInfo: {},
        page: 1
    };

    componentDidMount(){
        this.loadProdutos();        
    }

    loadProdutos = async (page = 1) => {
        const response = await api.get('/produtos?page=${page}');
        const {docs, ...produtosInfo} = response.data;
        this.setState ({ produtos: docs, produtosInfo, page});
    }

    render(){
        const {produtos, produtosInfo, page} = this.state;
        return(
        <div>
           <br></br>
            <h2>Listagem Produtos x Estoque</h2>
            <hr></hr>
            <br></br>

            <Table hover>
                <thead>
                    <tr>
                    <th style={{width:"5%"}}>#</th>
                    <th style={{width:"25%"}}>Título do Livro</th>
                    <th style={{width:"20px"}}>Autor</th>
                    <th style={{width:"15%"}}>Qtde em Estoque</th>
                    <th style={{width:"10%"}}>Vendidos</th>
                    <th style={{width:"15%"}}>Status</th>
                    <th style={{width:"10%"}}></th>
                    </tr>
                </thead>
            </Table>
            {this.state.produtos.map(produto => (
                <article key={produto._id}>
            <Table hover style={{marginTop: "-18px"}}>
                <tbody> 
                    <tr>
                    <th style={{width:"5%"}} scope="row">{produto.codigo}</th>
                    <td style={{width:"25%"}}>{produto.nomeDoLivro}</td>
                    <td style={{width:"20%"}}>{produto.autor}</td>
                    <td style={{width:"15%"}}>{produto.quantidadeEstoque}</td>
                    <td style={{width:"10%"}}>{produto.vendidos}</td>
                    <td style={{width:"15%"}}>{produto.status}</td>
                    <td style={{width:"10%"}}>
                        
                            <GoTrashcan />
                        
                       
                            <Link to={'/produtos/${produto._id}'}> <GoPencil /></Link>
                            
                            
                    </td>
                    </tr>                 
                </tbody>
            </Table>
            </article>
            ))}

       </div>

   
       

    );
}

}


