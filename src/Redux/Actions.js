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



export const setSignUpName = (text) => ({
    type: SIGN_UP_NAME,
    payload: text
})

export const setConfirmPassword = (text) => ({
    type: CONFIRM_PASSWORD,
    payload: text
})

export const setSignInEmail = (text) => ({
    type: SIGN_IN_EMAIL,
    payload: text
})

export const setSignInPassword = (text) => ({
    type: SIGN_IN_PASS,
    payload: text
})

export const setWrongDetails = (text) => ({
    type: WRONG_DETAILS,
    payload: text
})

export const setResult = (boolean) => ({
    type: NEW_RESULT,
    payload: boolean
})

export const setSearchingFor = (text) => ({
    type: SEARCHING_FOR,
    payload: text
})

export const setPendingState = (boolean) => ({
    type: PENDING_STATE,
    payload: boolean
})

export const setTitle = (text) => ({
    type: NEW_TITLE,
    payload: text
})

export const setBody = (text) => ({
    type: NEW_BODY,
    payload: text
})

export const requestBlogs = (url) => (dispatch) => {
    dispatch({type: REQUEST_BLOGS_PENDING});
    fetch(url)     // set the url as the useEffect dependency so that it runs anytime the url you pass from the component using this custom hook changes.
    .then(response => {
        if (!response.ok) {
            throw Error ('Could not fetch');
        }
        return response.json()
    })                  //for the response object that we get here, if response.ok = true, then we fetched the data from the server successfully. Otherwise, the server might have sent a response object that doesn't contain the data. In this case, the catch block can't catch this error, so we have to throw an Error and catch this error (eg; if the request is denied, or the end-point is faulty)
    .then(data => dispatch({type: REQUEST_BLOGS_SUCCESS, payload: data}))
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('fetch aborted')
        } else {
            dispatch({type: REQUEST_BLOGS_FAILURE, payload: err})
        }   
    })
}