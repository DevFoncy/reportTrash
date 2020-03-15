/**
 *
 * ListDevelopers
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import './index.less';
import { Table, Input, Divider, Modal, Button, Checkbox } from 'antd';

export class ListDevelopers extends React.Component() {
  state = {
    listUsers: [
      { id: 1, name: 'Fidel Angel', status: 'Ocupado' },
      { id: 1, name: 'Fidel Angel', status: 'Ocupado' },
      { id: 1, name: 'Fidel Angel', status: 'Ocupado' },
      { id: 1, name: 'Fidel Angel', status: 'Ocupado' },
      { id: 1, name: 'Fidel Angel', status: 'Ocupado' },
    ],
  };

  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return <div />;
  }
}

ListDevelopers.propTypes = {};

export default ListDevelopers;
