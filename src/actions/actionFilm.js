
export const getFilms =()=> async(dispatch)=>{
    dispatch({
        type:'LOAD',
    })
    
    try{
        var url = 'http://localhost:9000/api/films';
        var data= await fetch(url)
        var res= await data.json()
    
        dispatch({
            type: 'GET_FILMS',
            payload : res.docs
        })


    }catch(e){
        dispatch({
           type: 'ERROR',
           payload: 'error, try again or later'
        })
    }
   
}