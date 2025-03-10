import { RESPONSE } from "../../actions";

const transform = store => next => action => {

  if (action.type === RESPONSE ) {
    let transformedArray = action.data.map( obj => {
      obj.test = obj.company
      return obj
    } )

    store.dispatch({
      type: 'MODIFIED_ARRAY',
      transformedArray
    })

    action.data = transformedArray

    return next(action)
  } else {
    return next(action)
  }

}

export default transform