/**
 *
 * TicketDetail
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Modal, Typography, Input } from 'antd';

import {
  optionsPregunta,
  optionsProblema,
  optionsHerramienta,
} from '../../utils/Constant';

import './index.less';

const { Text } = Typography;
const { TextArea } = Input;

export class TicketDetail extends React.Component {
  findAttribute = (list, data) => {
    if (data) {
      const value = list.find(l => l.value === data);
      return value.label;
    }
    return '';
  };

  render() {
    const { data } = this.props;
    // console.log("props data", this.props.data);

    return (
      <Fragment>
        <Modal
          title={`Solicitud de Servicio  : ${data.title}` ? data.title : ''}
          visible
          onOk={() => this.props.handleOk('showModalTicket')}
          onCancel={() => this.props.handleCancel('showModalTicket')}
        >
          <Text code> Categoria : {data.category_id}</Text> <br />
          <Text code>
            {' '}
            Tipo de Problema :{' '}
            {this.findAttribute(optionsPregunta, data.tipoPregunta)}
          </Text>{' '}
          <br />
          <Text code>
            {' '}
            Tipo de Herramienta :{' '}
            {this.findAttribute(optionsHerramienta, data.tipoHerramienta)}
          </Text>{' '}
          <br />
          <Text code>
            {' '}
            Tipo de Pregunta :{' '}
            {this.findAttribute(optionsProblema, data.tipoProblema)}
          </Text>{' '}
          <br />
          <TextArea
            style={{ marginTop: '10px' }}
            value={data.description}
            rows={4}
          />
          <div style={{ width: '100%' }}>
            <small
              style={{ marginTop: '20px', display: 'grid', textAlign: 'right' }}
            >
              {' '}
              Fecha de creacion : {data.created_at}{' '}
            </small>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

TicketDetail.propTypes = {};

export default TicketDetail;
