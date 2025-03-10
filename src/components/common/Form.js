import React from 'react';
import { connect } from "react-redux";
import { Form as FormAnt, Input, Icon, message, AutoComplete } from 'antd';

import { addFeedback } from '../../actions'

const { TextArea } = Input;
class DynamicForm extends React.Component {
  state = {
    checkNick: false,
    dataSourceEmail: []
  };

  handleChangeEmail = value => {
    this.setState({
      dataSourceEmail:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@yahoo.com`, `${value}@mail.ru`, `${value}@yandex.ru`],
    });
  }

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        message.success(`Мы в скором времени с вами свяжемся!`);
      }
    });
  };

  handleChange = e => {
    if( this.props.setActive !== undefined ){
      this.props.setActive();
    }

    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const concatPhone = `+38-${values.prefix[1]}-${values.phone}`
        values.phone = concatPhone

        this.props.sendFeedback(values)
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className="form-wrap">
        <FormAnt
          className="form"
          onSubmit={this.handleSubmit}
        >
          <FormAnt.Item
            hasFeedback={true}
            className="form-item"
          >
            {
              getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Пожалуйста введите свое Имя',
                },
              ],
            })(<Input
                placeholder="Имя"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            )
            }
          </FormAnt.Item>

          <FormAnt.Item
            hasFeedback={true}
            className="form-item form-item-email"
          >
            {
              getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Пожалуйста введите свой Email',
                  },
                ],
              })(
                <AutoComplete
                  dataSource={this.state.dataSourceEmail}
                  onChange={this.handleChangeEmail}
                >
                  <Input
                    placeholder="Email"
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
                </AutoComplete>
              )
            }
          </FormAnt.Item>

          <FormAnt.Item
            hasFeedback={true}
            className="form-item"
          >
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: 'Введите Номер телефона'
              }],
            })(
              <Input
                type="number"
                style={{ width: '100%' }}
                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            )}
          </FormAnt.Item>
          <FormAnt.Item className="form-item">
            {
              getFieldDecorator('question', {
              rules: [
                {
                  required: false
                },
              ],
              })(<TextArea
                  className="form-item-textarea"
                  placeholder="Ваш вопрос(необязательно)"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
            )
            }
          </FormAnt.Item>
          <FormAnt.Item className="btn-submit-item">
            <button onClick={this.check} className="btn shutter-out-horizontal">
              Send
            </button>
          </FormAnt.Item>
        </FormAnt>
      </div>
    );
  }
}

const Form = FormAnt.create({ name: 'dynamic_rule' })(DynamicForm);

const mapStateToProps  = () => ({})

const mapDispatchToProps = (dispatch) => ({
  sendFeedback: (data) => {
    dispatch(addFeedback(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)