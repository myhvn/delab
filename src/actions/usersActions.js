export const REQUEST = "REQUEST"
export const RESPONSE = "RESPONSE"
export const ERROR = "ERROR"

const getResponse = ( data ) => ({
  type: RESPONSE,
  data: data
})

export const getUsersData = ( args ) => ( dispatch, getState ) => {
  dispatch( { type: REQUEST } )
  fetch('http://www.json-generator.com/api/json/get/bVbvtiEkya?indent=2')
    .then( res => res.json() )
    .then( res => dispatch( getResponse( res ) ))
    .catch( error => dispatch({ type: ERROR, error }))
}