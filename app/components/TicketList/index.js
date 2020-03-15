/**
 *
 * TicketList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  Table,
  Input,
  Divider,
  Modal,
  Button,
  Checkbox,
  Tag,
  Icon,
  Radio,
} from 'antd';

import './index.less';
import { columnTicket } from '../../utils/Constant';
import TicketDetail from '../TicketDetail';
import TicketAssigned from '../TicketAssigned';
import TicketAttend from '../TicketAttend';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export class TicketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      showModalTicket: false,
      showModalDeveloper: false,
      showModalAttend: false,
      nameUpdated: null,
      ticketSelected: [],
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

  handleOk = modal => {
    this.setState({
      [modal]: false,
    });
  };

  handleCancel = modal => {
    this.setState({
      [modal]: false,
    });
  };

  showModal = (id, modal) => {
    const { data } = this.props;
    const ticket = data.find(d => d.id === id);
    this.setState({
      [modal]: true,
      ticketSelected: ticket,
    });
  };

  // showModalDevelopers = (id) => {
  //   let {data} = this.props;
  //   let ticket = data.find((d) => {
  //     return d.id === id
  //   })
  //   this.setState({
  //     showModalDeveloper: true,
  //     ticketSelected: ticket
  //   });
  // };

  onChange(pagination, filters, sorter, extra) {
    // console.log('params', pagination, filters, sorter, extra);
  }

  reformat(data) {
    const newData = [];
    if (data.length > 0) {
      data.map(d => {
        if (d.category_id === 1) {
          d.category_id = 'Bitrix24 Self Hosted';
        } else {
          d.category_id = 'Bitrix24 On Cloud';
        }
        newData.push(d);
      });
      return newData;
    }
  }

  // updateTicket = (data) => {
  //
  // }

  render() {
    const { listUsers, nameUpdated } = this.state;
    const info = this.reformat(this.props.data);
    return (
      <div className="ListTicket">
        <h4> Ingrese el titulo</h4>

        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <br />
        <br />
        <Table dataSource={info} onChange={this.onChange}>
          <Column title="ID" dataIndex="id" key="id" />
          <Column
            title="Titulo"
            dataIndex="title"
            key="title"
            render={(text, record) => (
              <a
                href="#"
                onClick={() => this.showModal(record.id, 'showModalTicket')}
              >
                {' '}
                {text}
              </a>
            )}
          />
          <Column
            title={() => (
              <span>
                {' '}
                Asignado{' '}
                <Icon
                  style={{ marginTop: '-5px', fontSize: '16px' }}
                  type="user"
                />
              </span>
            )}
            dataIndex="assigned"
            key="assigned"
            render={text => {
              const assignee = listUsers.find(l => l.id == text);
              return <span>{assignee ? assignee.name : 'Sin Asignar'}</span>;
            }}
          />
          <Column title="Prioridad" dataIndex="priority" key="priority" />
          <Column
            title="Tipo de problema"
            dataIndex="category_id"
            key="problem"
          />
          <Column
            title="Acciones"
            key="action"
            render={(text, record) => (
              <span>
                <Tag
                  className="TicketAttend"
                  onClick={() => this.showModal(record.id, 'showModalAttend')}
                  color="orange"
                >
                  {' '}
                  Atender
                </Tag>
                <Tag
                  className="TicketAttend"
                  onClick={() =>
                    this.showModal(record.id, 'showModalDeveloper')
                  }
                  color="green"
                >
                  Asignar
                </Tag>
                <Tag color="red">
                  <Icon style={{ marginTop: '-5px' }} type="delete" />
                </Tag>
              </span>
            )}
          />
        </Table>

        {this.state.showModalTicket && (
          <TicketDetail
            data={this.state.ticketSelected}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
          />
        )}
        {this.state.showModalDeveloper && (
          <TicketAssigned
            getTicket={this.props.getTicket}
            assignTicket={this.props.assignTicket}
            data={this.state.ticketSelected}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
          />
        )}

        {this.state.showModalAttend && (
          <TicketAttend
            attendTicket={this.props.attendTicket}
            data={this.state.ticketSelected}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
          />
        )}
      </div>
    );
  }
}

TicketList.propTypes = {};

export default TicketList;
