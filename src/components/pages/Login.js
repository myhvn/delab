import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getToken } from '../../actions/';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginForm extends Component {
  changeHandler = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.sendLoginReqest({
          login: values.username,
          password: values.password
        })
      }
    });
  };

  render() {
    const { user, togglePopup } = this.props
    const { getFieldDecorator } = this.props.form

    if (user === null){
      return (
        <div className='login-form-wrapper'>

        <Form onSubmit={this.handleSubmit} className={'login-form'}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <button onClick={togglePopup}></button>
          { console.log(this.props.isOpenPopup)}
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            {/* <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
        </div>

        // <div className="fitokafe">
        //   <div className="container">
        //     <form onSubmit={this.submitData}>
        //       <input value={login} onChange={changeHandler} type="email" placeholder="email" name="login" />
        //       <input value={password} onChange={changeHandler} type="password" placeholder="password" name="password" />
        //       <button style={{ background: 'red' }}>Submit</button>
        //     </form>

        //     <button onClick={this.doSmsng}> Get Private Data</button>
        //   </div>
        // </div>

      );
    } else {
      // if( this.props.location.state !== undefined ){
      //     const { pathname } = this.props.location.state.from;
      //     if (pathname !== undefined) {
      //       return (<Redirect to={pathname} />);
      //     }
      // }
      return (
        <Redirect to="/admin/" />
      )
    }

  }
}

const mapStateToProps = ({auth}) => ({
  user: auth.user,
  isOpenPopup: popup.showPopup
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  sendLoginReqest: ( data ) => {
    dispatch(getToken(data) );
  }
})

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginForm);

// ------------------------
// import { Form, Icon, Input, Button, Checkbox } from 'antd';

// class NormalLoginForm extends React.Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <Form.Item>
//           {getFieldDecorator('username', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Username"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input
//               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               type="password"
//               placeholder="Password"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(<Checkbox>Remember me</Checkbox>)}
//           <a className="login-form-forgot" href="">
//             Forgot password
//           </a>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);