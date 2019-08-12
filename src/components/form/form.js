import React, {Component} from 'react';
import './style.css'

class Form extends Component{

    render(){

         return (
             
             <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        autoComplete='off'
                        name='name'
                        placeholder="Enter film name"
                        onChange= {this.props.onChange}
                        value={this.props.formData.name }
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        name='img'
                        autoComplete='off'
                        placeholder="Enter url img"
                        onChange= {this.props.onChange}
                        value={this.props.formData.img}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-film">Register film</button>
            </form>
    
        )
    }
   
}

export default Form