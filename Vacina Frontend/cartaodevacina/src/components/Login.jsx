import React, {Component} from 'react'

export default class Login extends Component {
    render() {
        return(
            <div className="container"><br/>
                <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Endereço de email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                    <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                </div>
                <button type="submit" className="btn btn-primary">Fazer Login</button>
                </form>
            </div>
        );
    }
}