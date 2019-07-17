import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class CadVacina extends Component {
    render() {
        return (
            <div className="container"><br/>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome da Vacina</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Nome da vacina" />
                </div>
                <div className="form-group">
                    <select className="form-control">
                        <option>Dose</option>
                        <option value="1">Primeira Dose</option>
                        <option value="2">Segunda Dose</option>
                        <option value="3">Terceira Dose</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input type="date" className="form-control" id="data" />
                    <small id="data" className="form-text text-muted">Data em que a vacina foi tomada.</small>
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar Vacina</button>
                </form>
                </div>
        );
    }
}