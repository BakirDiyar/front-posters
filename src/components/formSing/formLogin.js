import React, {Component} from 'react'
import './style.css'

class FormLogin extends Component{
      
    render(){
    
        
        return(
            <React.Fragment>
                <form onSubmit={this.props.onSubmit} className="form-app">
                    <h3 className="title-form">{this.props.notify}</h3>
                    <div className="form-group">
                        <input type="email" 
                            autoComplete="false" 
                            className="form-control" 
                            name='email'
                            onChange = {this.props.onChange}
                            value = {this.props.formData.email}
                            placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            autoComplete='false'
                            name='password'
                            className="form-control"  
                            onChange = {this.props.onChange}
                            value = {this.props.formData.password}
                            placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-form">Login</button>
                    </div>
                </form>
            </React.Fragment>
        ) 
    }
}

export default FormLogin