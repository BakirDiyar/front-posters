import React, {Component} from 'react'
import './style.css'
import { Link } from "react-router-dom";

class FilmsList extends Component{
      
    render(){
       
        const films = this.props.filmList
        
        return(
            <React.Fragment>
                {
                    films.map((f)=>{
                        return(
                            <div className="col-4 col-md-2 film" key={f._id}>
                               {/* <Link to= {'/films/edit/'+f._id}>  es5*/}
                               
                               <Link to= {`/films/edit/${f._id}`}>
                                    <img src={f.img} alt={f.name} />
                                    <p>{f.name.toUpperCase()}</p>
                                </Link>
                            </div>  
                        )
                    })
                }  
            </React.Fragment>
        ) 
    }
}

export default FilmsList