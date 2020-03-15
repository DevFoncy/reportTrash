/**
 *
 * Login
 *
 */

import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import './index.less';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import helpdesk from '../../images/helpdesk.png';
import logo from '../../images/reportTrash.png';

import makeSelectLogin, {
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loginWatcher, loginFailed } from './actions';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      remember: true,
      disabled: false,
      logoLoaded: false,
      idAlert: -1,
    };
  }

  validate = () => {
    const { email, password } = this.state;
    if (email.length > 0 && password.length > 0) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState(
        {
          disabled: true,
        },
        () => {
          // this.props.reset()
        },
      );
    }
  };

  componentDidMount() {
      this.setState({idAlert: this.props.match.params.alerta});

  }

  handleSubmit = () => {
    const payload = {
      email: this.state.email,
      password: this.state.password,
      remember: this.state.remember,
      alerta: this.state.idAlert
    };
    this.props.onLogin(payload);
  };

  render() {
    return (
      <Fragment>
        <div className="Login">
          <div className="Login-image">
            <img src={logo} />
          </div>
          <div className="Login-form">
            <h1> Recicla el plastico ya ...</h1>
            <Form onSubmit={this.handleSubmit} className="Login-form-container">
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Usuario(correo electronico)"
                  style={{ height: '40px' }}
                  name="name"
                  id="name"
                  type="email"
                  value={this.state.email}
                  onChange={e => {
                    this.setState(
                      {
                        email: e.target.value,
                      },
                      () => {
                        this.validate();
                      },
                    );
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  name="password"
                  value={this.state.password}
                  onPressEnter={this.handleSubmit}
                  onChange={e => {
                    this.setState(
                      {
                        password: e.target.value,
                      },
                      () => {
                        this.validate();
                      },
                    );
                  }}
                  placeholder="Contraseña"
                  style={{ height: '40px' }}
                />
              </Form.Item>
              <div style={{ textAlign: 'right', marginTop: '40px' }}>
                <Button
                  shape="round"
                  size="large"
                  type="primary"
                  onClick={this.handleSubmit}
                  className="login-form-button"
                  disabled={this.state.disabled}
                  style={{ alignItems: 'right' }}
                >
                  Ingresar a Report Trash
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Fragment>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: params => dispatch(loginWatcher(params)),
    loginFailed: params => dispatch(loginFailed(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo,
)(Login);
