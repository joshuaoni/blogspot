import { 
    REQUEST_BLOGS_PENDING,
    REQUEST_BLOGS_SUCCESS,
    REQUEST_BLOGS_FAILURE,
    NEW_BODY,
    NEW_TITLE,
    PENDING_STATE,
    SEARCHING_FOR,
    NEW_RESULT,
    SIGN_IN_EMAIL, 
    SIGN_IN_PASS,
    WRONG_DETAILS,
    CONFIRM_PASSWORD,
    SIGN_UP_NAME
} from "./Constants"



const initStateConfirmPass = {
    confirmPassword: ''
}

const initStateName = {
    signUpName: ''
}

const initStateEmail = {
    signInEmail: ''
}

const initStatePass = {
    signInPassword: ''
}

const initWrongDetails = {
    wrongDetails: null
}

const initStateResult = {
    result: false
}

const initialStateSearchingFor = {
    searchingFor: ''
}

const initialStatePending = {
    isPending: false
}
const initialStateBlogs = {
    isPending: false,
    blogs: [],
    error: ''
}
const initStateTitle = {
    title: ''
}
const initStateBody = {
    body: ''
}

export const setSignUpName = (state=initStateName, action={}) => {
    switch (action.type) {
        case SIGN_UP_NAME:
            return {
                signUpName: action.payload
            }
        default:
            return state;
    }
}

export const setConfirmPassword = (state=initStateConfirmPass, action={}) => {
    switch (action.type) {
        case CONFIRM_PASSWORD:
            return {
                confirmPassword: action.payload
            }
        default:
            return state;
    }
}

export const setSignInEmail = (state=initStateEmail, action={}) => {
    switch (action.type) {
        case SIGN_IN_EMAIL:
            return {
                signInEmail: action.payload
            }
        default:
            return state;
    }
}

export const setSignInPassword = (state=initStatePass, action={}) => {
    switch (action.type) {
        case SIGN_IN_PASS:
            return {
                signInPassword: action.payload
            }
        default:
            return state;
    }
}

export const setWrongDetails = (state=initWrongDetails, action={}) => {
    switch (action.type) {
        case WRONG_DETAILS:
            return {
                wrongDetails: action.payload
            }
        default:
            return state;
    }
}

export const setResult = (state=initStateResult, action={}) => {
    switch (action.type) {
        case NEW_RESULT:
            return {
                result: action.payload
            }
        default:
            return state;
    }
}

export const setSearchingFor = (state=initialStateSearchingFor, action={}) => {
    switch (action.type) {
        case SEARCHING_FOR:
            return {
                searchingFor: action.payload
            }
        default:
            return state;
    }
}

export const setTitle = (state=initStateTitle, action={}) => {
    switch (action.type) {
        case NEW_TITLE:
            return {
                title: action.payload
            }
        default:
            return state;
    }
}



export const setPendingState = (state=initialStatePending, action={}) => {
    switch (action.type) {
        case PENDING_STATE:
            return Object.assign({}, state, {isPending: action.payload})
        default:
            return state;
    }
}

export const setBody = (state=initStateBody, action={}) => {
    switch (action.type) {
        case NEW_BODY:
            return Object.assign({}, state, {body: action.payload});
        default:
            return state;
    }
}


export const requestBlogs = (state=initialStateBlogs, action={}) => {
    switch (action.type) {
        case REQUEST_BLOGS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_BLOGS_SUCCESS:
            return Object.assign({}, state, {blogs: action.payload, isPending: false});
            // return {
            //    ...state,
            //    robots: [...state.robots, action.payload] 
            //    isPending: false  }   
        case REQUEST_BLOGS_FAILURE:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}