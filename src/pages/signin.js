import React, {Component} from 'react'
// import { Redirect } from 'react-router-dom'
import FormLogin from '../components/formSing/formLogin'
// import './style.css'
class SignIn extends Component{
    state={
        fields:{
            email: '',
            password: ''
        },
        notify:'Enter and registre your favorites films'
    }

    handleOnChange=(e)=>{
      
        this.setState({
            fields:{
                ...this.state.fields,
                [e.target.name]: e.target.value
            },
            notify: ''
        })
        
    }

    saveToken = token =>{
        localStorage.setItem('sign', token)

    }
  
    configHeaders = (met, data)=>{
        return {
            method: met,
            body: JSON.stringify(data),
            headers:{'Content-Type': 'application/json'}
        }
    }
    

    handleSubmit = (e)=>{
        e.preventDefault()
        var url = 'http://localhost:9000/signin';
        var data = this.state.fields

        fetch(url, this.configHeaders('POST',data))
        .then(res => res.json())
        .then(response => {

            if(response.ok === 'false'){
                this.setState({notify: response.msg})
            }else{
                this.saveToken(response.token)
                this.setState({notify: 'Logged user sucessfull!!!!'})
                setTimeout(()=>{
                    this.setState({fields:{ email:'', password:''}, notify: ''})
                    this.props.history.push('/create-film') 
                },2000) 
            }           
        })
        .catch(error =>{
            this.setState({notify: error})
        } )
    }
    
    render(){
        return(
            <React.Fragment>

                <section className="createfilms">
                    <div className='container'>
                        <div className="row row-form align-items-center justify-content-center pt-6">
                            <div className="col col-md-6 col-lg-5 text-center">
                              <FormLogin 
                                onSubmit = {this.handleSubmit}
                                formData = {this.state.fields}
                                onChange = {this.handleOnChange}
                                notify = {this.state.notify}
                              /> 
                            </div>
                        </div>
                    </div>
                </section>
              
            </React.Fragment>
        ) 
    }
}

export default SignIn