import React, {Component} from 'react'
import FilmsList from '../components/filmsList/filmsList'
import {connect} from 'react-redux'
import * as actionFilm from '../actions/actionFilm';
import './style.css';


class Films extends Component{
   
    componentDidMount(){
        // if(this.props.films.length<=0){
            this.props.getFilms()
        // }
    }

    showFilms = ()=>{

        if(this.props.error) return <h3 className='text-white'>Error, try again or later</h3>

        if(this.props.load) return <h3 className='text-white'>Loading....</h3>
        
        return <FilmsList filmList={this.props.films}/>
    }

    render(){
      
        return(
            <section className='films-sect'>
                <div className='container'>
                    <div className='row pt-4'>
                        {this.showFilms()}
                    </div>
                </div>
            </section>
        ) 
    }
}

const props = reducers => reducers.reduFilms

export default connect(props, actionFilm)(Films)