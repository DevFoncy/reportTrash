/**
 *
 * ServiceList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {Table, Input, Divider, Modal, Button, Checkbox, Tag, Icon, Radio} from 'antd';

import './index.less';
import {columnTicket} from '../../utils/Constant';
import TicketDetail from "../TicketDetail";
import TicketAssigned from "../TicketAssigned";
import TicketAttend from "../TicketAttend";

const {Search} = Input;
const {Column, ColumnGroup} = Table;

export class ServiceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      showModalTicket: false,
      showModalDeveloper : false,
      showModalAttend:false,
      nameUpdated: null,
      ticketSelected: [],
      listUsers: [
        {id: 1, name: 'Fidel Angel', status: 'Ocupado', phone: '947826902', address: '192 Escudero'},
        {id: 2, name: 'Steve Arias', status: 'Libre', phone: '947826902', address: '192 Escudero'},
        {id: 3, name: 'Johan Aylas', status: 'Libre', phone: '947826902', address: '192 Escudero'},
        {id: 4, name: 'Migue lde la Cruz', status: 'Ocupado', phone: '947826902', address: '192 Escudero'},
        {id: 5, name: 'Rony Lindo', status: 'Libre', phone: '947826902', address: '192 Escudero'},
      ]

    };
  }

  onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
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
    let {listUsers,nameUpdated } = this.state;
    console.log("this.props.data",this.props.data);
    // const info = this.reformat(this.props.data);
    return (
      <div className="ListTicket">
        <h3> Lista de servicios</h3>
        <Table dataSource={this.props.data} onChange={this.onChange}>
          <Column title="ID" dataIndex="id" key="id"/>
          <Column title="Titulo" dataIndex="title" key="title" render={(text, record) => {
            return (
              <a href="#"> {text}</a>
            )
          }}/>
          <Column title="Tiempo de Solucion" dataIndex="time_solution" key="time_solution"/>
          <Column title="Dificultad" dataIndex="answer" key="answer"/>
          <Column title="Respuesta" dataIndex="comment" key="comment"/>


          <Column title={ () => {return (<span> Asignado <Icon style={{marginTop: "-5px", fontSize : "16px"}} type="user"/></span>)}}
                  dataIndex="assigned" key="assigned" render={(text) => {
            let assignee = listUsers.find(l => { return l.id == text })
            return (
              <span>{  assignee ? assignee.name : 'Sin Asignar'}</span>
            )
          }}/>

        </Table>
      </div>
    );
  }
}

ServiceList.propTypes = {};

export default ServiceList;
