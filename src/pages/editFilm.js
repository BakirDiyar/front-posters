import React, {Component} from 'react'
// import { Redirect } from 'react-router-dom'
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
        // token: ''
    }

    componentDidMount(){
        this.getFilmById()
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

    getFilmById = ()=>{
        console.log(this.props);
        const url = 'http://localhost:9000/api/films/'+this.props.match.params.id
      
        fetch(url)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                this.setState({fields: response})
                console.log('state',this.state.fields);
            })
            .catch(error => console.error('Error:', error))
    }
    
    handleSubmit = (e)=>{
        e.preventDefault()
        var url = 'http://localhost:9000/api/films';
        var data = this.state.fields
        console.log(data);
        fetch(url, this.configHeaders('PUT',data))
        .then(res => res.json())
        .then(response => {
            this.setState({notify: 'updated film sucessfull!!!!'})
            setTimeout(()=>{

                this.setState({fields:{name:'', img:''}, notify: ''})
                this.props.history.push('/films') 
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