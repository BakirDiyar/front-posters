import React, {Component} from 'react'
import Form from '../components/form/form'
import Letter from '../components/viewtext/letters'
import './style.css'

class FilmNew extends Component{
    state={
        fields:{
            name:'',
            img: ''
        },
        notify:'',
        token: ''
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
    

    configHeaders = (met, data)=>{
        return {
            method: met,
            body: JSON.stringify(data),
            headers:{'Content-Type': 'application/json',
                    'Accept' : 'application/json',
                    // 'Authorization': 'bearer '+ this.state.token
                 }
        }
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        var url = 'http://localhost:9000/api/films';
        var data = this.state.fields

        fetch(url, this.configHeaders('POST',data))
            .then(res => res.json())
            .then(response => {
                this.setState({notify: 'created film sucessfull!!!!'})
                setTimeout(()=>{
                    this.setState({fields:{name:'', img:''}, notify: ''})
                },2000)
            })
            .catch(error => console.error('Error:', error))
    }
    
    render(){
        return(
            <React.Fragment>

                <section className="createfilms">
                    <div className='container'>
                        <div className='row pt-4'>
                            <div className='col-12 col-md-6 pt-4'>
                                <Form 
                                    onChange={this.handleOnChange} 
                                    formData={this.state.fields}
                                    onSubmit = {this.handleSubmit}
                                />
                            </div>
                            <div className='col-12 col-md-6'>
                                <Letter dataForm ={this.state.fields}/>
                                <div className="notify">
                                    <h3 >
                                        {this.state.notify}
                                    </h3>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
              
            </React.Fragment>
        ) 
    }
}

export default FilmNew