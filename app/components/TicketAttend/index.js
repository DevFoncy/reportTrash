/**
 *
 * TicketAttend
 *
 */

import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import './index.less';
import {Button, Icon, Input, Modal, Radio, Typography, Tag, TimePicker, Rate} from "antd";
import {optionsHerramienta, optionsPregunta, optionsProblema} from "../../utils/Constant";
import moment from 'moment';


const {Text} = Typography;
const {TextArea} = Input;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const format = 'HH:mm';

export class TicketAttend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      valueRate: 3,
      comment : '',
      time_solution:'',
      answer:'',
    };
  }

  onSubmit = () => {
    const {data} = this.props;
    const {comment,time_solution, answer} = this.state;
    let object = {
      user_id: localStorage.getItem('userid'),
      ticket_id: data.id,
      comment ,
      time_solution,
      answer
    };
    let payload = {
      ticket_id: data.id,
      object
    };
    console.log("payload", payload);
    this.props.attendTicket(payload);
    this.props.handleOk('showModalAttend');
  };

  findAttribute = (list, data) => {
    if (data) {
      let value = list.find((l) => {
        return l.value === data
      });
      return value.label;
    } else {
      return ''
    }
  };


  onChange = (time, timeString) => {
    let hour = moment(time,format).format(format);
    this.setState({time_solution : hour})
  };


  handleInput = (event) => {
    this.setState({[event.target.name] : event.target.value});
  };

  handleChange = value => {
    this.setState({answer : value})
  };

  render() {
    const {data} = this.props;
    const {valueRate} = this.state;
    let time = '18:00';
    return (
      <Fragment>
        <Modal
          // title={'Registrar atencion de solicitud de servicio'}
          title={[
            <div className="header">
              <div style={{marginBottom: "10px"}}>
                <span className="title">Registrar atencion de solicitud de servicio</span>
              </div>
              <Text> <Tag color="volcano">Problema</Tag> {this.findAttribute(optionsPregunta, data.tipoPregunta)}
              </Text> |
              <Text><Tag color="green"> Categoria</Tag> <span>{data.category_id}</span> </Text> <br/>
            </div>

          ]}
          visible
          onOk={() => this.props.handleOk('showModalAttend')}
          onCancel={() => this.props.handleCancel('showModalAttend')}
          style={{width: "800px"}}
          centered
          footer={[
            <Button key="submit" type="primary" onClick={this.onSubmit}>
              Guardar Registro de Solicitud
            </Button>,
          ]}
        >
          <div className="AttendTicket">
            <div className={{display: "inline-flex"}}>
              <Text> Herramienta: {this.findAttribute(optionsHerramienta, data.tipoHerramienta)}</Text>
              <Text
                style={{marginLeft: '25px'}}> Pregunta: {this.findAttribute(optionsProblema, data.tipoProblema)}</Text>
            </div>
            <div style={{marginTop: "10px"}}>
              <Text> Tiempo de solucion : </Text>
              <TimePicker  onChange={this.onChange}   defaultValue={moment(time, format)} format={format}/>
            </div>
            <div>
              <Text> Respuesta del Ticket :</Text> <br/>
              <TextArea name="comment" onChange={(e) =>  this.handleInput(e)}   style={{marginTop: '10px'}} rows={3}/>
            </div>
            <div>
              <Text> Dificultad</Text> <br/>
              <span>
                <Rate tooltips={desc} name="answer" onChange={this.handleChange}   valueRate={valueRate}/>
                        {valueRate ? <span className="ant-rate-text">{desc[valueRate - 1]}</span> : ''}
              </span>
            </div>


          </div>

        </Modal>
      </Fragment>
    )
  }
}

TicketAttend.propTypes = {};
export default TicketAttend;
