 
import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["nombre"] = "";
          fields["apellidos"] = "";
          fields["telefono1"] = "";
          fields["telefono2"] = "";
          fields["apartado_postal"] = "";
          fields["pais"] = ""
          fields["provincia"] = "";
          fields["ciudad"] = "";
          fields["direccion"] = "";

          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["nombre"]) {
        formIsValid = false;
        errors["nombre"] = "*Por favor digite su nombre.";
      }

      if (!fields["apellidos"]) {
        formIsValid = false;
        errors["apellidos"] = "*Por favor digite sus apellidos.";
      }

      if (!fields["telefono1"]) {
        formIsValid = false;
        errors["telefono1"] = "*Por favor digite su teléfono principal.";
      }

      if (typeof fields["telefono1"] !== "undefined") {
        if (!fields["telefono1"].match(/^[0-7]{8}$/)) {
          formIsValid = false;
          errors["telefono1"] = "*Por favor digite un teléfono celular válido.";
        }
      }

      if (typeof fields["telefono2"] !== "undefined") {
        if (!fields["telefono2"].match(/^[0-7]{8}$/)) {
          formIsValid = false;
          errors["telefono2"] = "*Por favor digite un teléfono celular válido.";
        }
      }


      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Página de registro</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Nombre: </label>
        <input type="text" name="nombre" value={this.state.fields.nombre} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.nombre}</div>
        
        <label>Apellidos: </label>
        <input type="text" name="apellidos" value={this.state.fields.apellidos} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.apellidos}</div>

        <label>Telefono #1: </label>
        <input type="text" name="telefono1" value={this.state.fields.telefono1} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.telefono1}</div>

        <label>Telefono #2: </label>
        <input type="text" name="telefono1" value={this.state.fields.telefono2} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.telefono2}</div>

        <label>Apartado postal: </label>
        <input type="text" name="apartado_postal" value={this.state.fields.apartado_postal} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.apartado_postal}</div>

        <label>Pais: </label>
        <input type="text" name="pais" value={this.state.fields.pais} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.pais}</div>

        <label>Provincia: </label>
        <input type="text" name="provincia" value={this.state.fields.provincia} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.provincia}</div>

        <label>Ciudad: </label>
        <input type="text" name="ciudad" value={this.state.fields.ciudad} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.ciudad}</div>

        <label>Direccion: </label>
        <input type="text" name="direccion" value={this.state.fields.direccion} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.direccion}</div>
       
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;