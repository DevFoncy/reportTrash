/**
 *
 * AccountProfile
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import './index.less';
import UserImage from '../../images/user.jpg';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

export class AccountProfile extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`,
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    // const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    const prefixSelector = (
      <Select defaultValue="86" style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <div className="Profile">
        <div className="Profile-col1">
          <img src={UserImage} alt="" />
        </div>
        <div className="Profile-col2">
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Correo electronico">
              <Input />
            </Form.Item>
            <Form.Item label="Contraseña" hasFeedback>
              <Input.Password />
            </Form.Item>
            <Form.Item label="Confirmar contrasena" hasFeedback>
              <Input.Password onBlur={this.handleConfirmBlur} />
            </Form.Item>
            <Form.Item label="Direccion ">
              <Input />
            </Form.Item>
            <Form.Item label="Telefono">
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="URL">
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            </Form.Item>

            <div>
              <Button type="primary" style={{ float: 'right' }}>
                Actualizar cuenta
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

AccountProfile.propTypes = {};

export default AccountProfile;
