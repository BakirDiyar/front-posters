import React from 'react';
import CreateFilm from '../pages/createFilm'
import Films from '../pages/films'
import EditFilms from '../pages/editFilm'
import Signin from '../pages/signin'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes (){
    return(
       <BrowserRouter>
            <Switch>
                <Route exact path='/signin' component={Signin}/> 
                <Route exact path='/create-film' component={CreateFilm}/> 
                <Route exact path='/films' component={Films}/>
                <Route exact path='/films/edit/:id' component={EditFilms}/>
            </Switch>
        </BrowserRouter>    
    )
}

export default Routes