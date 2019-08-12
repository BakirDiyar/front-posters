const STATE ={
    films: [],
    error: '',
    load: false
}

function reducer(state = STATE, action){
    switch(action.type){
        case 'GET_FILMS':
            return {...state, error:'', load:false, films: action.payload}
        case 'ERROR':
            return{...state, error: action.payload, load:false}
        case 'LOAD':
            return{...state, error:'', load: true}
        
        default: return state
    }
}

export default reducer