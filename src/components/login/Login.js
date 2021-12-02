import React, { Component } from "react";
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Iniciar sesión</h3>

                <div className="form-group">
                    <h4><label>Correo electrónico</label></h4>
                    <h5><input type="email" className="form-control" placeholder="Enter e-mail" /></h5>
                </div>


                <div className="form-group">
                    <h4><label>Contraseña</label></h4>
                    <h5><input type="password" className="form-control" placeholder="Enter password" /></h5>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordar cuenta</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                <a href="/signup"><button type="register" className="btn btn-primary btn-block">Registrarse</button></a>
                <p className="forgot-password text-right">
                    <a href="#">Recordar contraseña</a>
                </p>
            </form>
        );
    }
}