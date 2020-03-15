/**
 *
 * TicketAssigned
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Modal, Typography, Input, Radio, Icon, Button } from 'antd';

import {
  optionsPregunta,
  optionsProblema,
  optionsHerramienta,
} from '../../utils/Constant';
import './index.less';

const { Text } = Typography;

export class TicketAssigned extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      listUsers: [
        {
          id: 1,
          name: 'Fidel Angel',
          status: 'Ocupado',
          phone: '947826902',
          address: '192 Escudero',
        },
        {
          id: 2,
          name: 'Steve Arias',
          status: 'Libre',
          phone: '947826902',
          address: '192 Escudero',
        },
        {
          id: 3,
          name: 'Johan Aylas',
          status: 'Libre',
          phone: '947826902',
          address: '192 Escudero',
        },
        {
          id: 4,
          name: 'Migue lde la Cruz',
          status: 'Ocupado',
          phone: '947826902',
          address: '192 Escudero',
        },
        {
          id: 5,
          name: 'Rony Lindo',
          status: 'Libre',
          phone: '947826902',
          address: '192 Escudero',
        },
      ],
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
    // console.log("value",this.state.value);
  };

  onSubmit = () => {
    const { data } = this.props;
    const object = {
      user_id: localStorage.getItem('userid'),
      ticket_id: data.id,
      assignee: this.state.value,
    };
    const payload = {
      ticket_id: data.id,
      object,
    };
    this.props.assignTicket(payload);
    this.props.handleOk('showModalDeveloper');
    this.props.getTicket();
  };

  render() {
    const { data } = this.props;

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const user = this.state.listUsers.find(l => l.id === this.state.value);
    return (
      <Fragment>
        <Modal
          title={`Asignacion de Ticket : ${data.title}`}
          visible
          onOk={() => this.props.handleOk('showModalDeveloper')}
          onCancel={() => this.props.handleCancel('showModalDeveloper')}
          footer={[
            <Button key="submit" type="primary" onClick={this.onSubmit}>
              Asignar Colaborador
            </Button>,
          ]}
        >
          <span>Seleccione el colaborador a asignar:</span>
          <br />
          <div className="AsigneeTicket">
            <div>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                {this.state.listUsers.map((user, index) => (
                  <Radio
                    style={radioStyle}
                    value={user.id}
                    onChange={this.onChange}
                  >
                    <Icon style={{ marginTop: '-5px' }} type="user" />{' '}
                    {user.name ? user.name : '123'}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
            <div
              className="AsigneeTicket-Detail"
              style={{ paddingTop: '15px' }}
            >
              <Text code> Nombre : {user.name}</Text> <br />
              <Text code> Estado : {user.status}</Text> <br />
              <Text code> Telefono : {user.phone}</Text>
              <br />
              <Text code> Direccion : {user.address}</Text> <br />
            </div>
            <div />
          </div>
        </Modal>
      </Fragment>
    );
  }
}

TicketAssigned.propTypes = {};

export default TicketAssigned;
