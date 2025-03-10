import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, user, ...rest}) => {

  // console.log('user in Private Route:', user, user === null );
  return(
    <Route
      {...rest}
      render={props => {
        if (user === null){
          return(
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        } else {
          return (
            <Component {...props} />
          )
        }
      }}
    />
  )
};


const mapStateToProps = ( state ) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, null)(PrivateRoute);
