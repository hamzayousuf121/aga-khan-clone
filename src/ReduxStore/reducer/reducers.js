import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    adminUser:'',
    currentUser:{},
    authed:false
   
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.AUTHED:
        console.log(action.payload)
            return ({
                ...state,
               authed: action.payload
                
            })
        case ActionTypes.ADMINLOGIN:
            return ({
                ...state,
                adminUser: action.payload
                
            })
        case ActionTypes.ADMINLOGIN:
            return ({
                ...state,
                adminUser: action.payload
            })
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })  
        case ActionTypes.GETSLOTS:
            return ({
                ...state,
                slots: action.payload
            })
        case ActionTypes.TIME:
            return({
                ...state,
                time: action.payload
            })
        
        default:
            return state;
    }

}