import React, {Component} from 'react'
import {link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Cartão de Vacina</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(Página atual)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vacinas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Campanhas</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}