import react from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import CadastroProdutos from './pages/CadastroProduto';
import Listagem from './pages/Listagem';

/*Article = rota*/

function Article (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/cadastroprodutos" component={CadastroProdutos}/>
                <Route path="/produtos" component={Listagem}/>
                <Route path="/listagem" component={Listagem}/>
            </Switch>        
        </BrowserRouter>
    )
}

export default Article;