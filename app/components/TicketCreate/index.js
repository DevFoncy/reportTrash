/**
 *
 * CreateTicket
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  Form,
  Select,
  Input,
  Button,
  Upload,
  Icon,
  Steps,
  message,
  Typography,
  Radio,
} from 'antd';
import { Checkbox } from 'antd';

import './index.less';

const { Option } = Select;
const { Search, TextArea } = Input;
const { Step } = Steps;
const { Title } = Typography;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Preguntas Comerciales', value: 'comerciales', name: 'comerciales' },
  { label: 'Preguntas Tecnicas', value: 'tickets', name: 'tickets' },
];

const optionsHerramienta = [
  { label: ' Bitrix24 Self Hosted', value: 'hosted' },
  { label: ' Bitrix24 On Cloud', value: 'cloud' },
];

const optionsProblema = [
  { label: ' No puede iniciar sesion', value: 'problema1' },
  { label: ' Informar de un error ', value: 'problema2' },
  { label: ' Como funciona ', value: 'problema3' },
  { label: ' Solicitar caracteristica', value: 'problema4' },
];

const steps = [
  {
    title: 'Primer paso',
    content: 'First-content',
    value: 'first',
  },
  {
    title: 'Segundo paso',
    content: 'Second-content',
    value: 'second',
  },
  {
    title: 'Ultimo paso',
    content: 'Last-content',
    value: 'last',
  },
];

export class CreateTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // collapsed: false,
      tipoPregunta: 'comerciales',
      tipoHerramienta: 'cloud',
      tipoProblema: 'problema1',
      description: '',
      title: '',
      current: 0,
    };
  }

  handleInput = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const {
      title,
      tipoPregunta,
      tipoHerramienta,
      tipoProblema,
      description,
    } = this.state;
    const object = {
      user_id: localStorage.getItem('userid'),
      title: title || 'Ejemplo de Ticket',
      tipoPregunta,
      tipoHerramienta,
      tipoProblema,
      description,
    };
    // console.log("object",object);
    this.props.handleSubmit(object);
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current, tipoPregunta, tipoHerramienta, tipoProblema } = this.state;
    return (
      <div className="CreateTicket">
        <h2> Crear Ticket</h2>
        <div>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Fragment>
            <div className="steps-content">
              {steps[current].value === 'first' && (
                <div className="step-one">
                  <Title level={4} style={{ marginTop: 0 }}>
                    Titulo del ticket
                  </Title>
                  <Input
                    value={this.state.title}
                    onChange={e => this.handleInput(e)}
                    name="title"
                    style={{ width: 500 }}
                    placeholder="Ingrese el titulo del ticket"
                  />
                  <Title level={4}>Seleccione el tipo de pregunta</Title>
                  <Radio.Group
                    options={options}
                    onChange={e => {
                      this.setState({ tipoPregunta: e.target.value });
                    }}
                    value={tipoPregunta}
                  />
                </div>
              )}
              {steps[current].value === 'second' && (
                <div className="step-second">
                  <Title style={{ marginTop: 0 }} level={4}>
                    Seleccione el tipo de herramienta
                  </Title>
                  <Radio.Group
                    options={optionsHerramienta}
                    onChange={e => {
                      this.setState({ tipoHerramienta: e.target.value });
                    }}
                    value={tipoHerramienta}
                  />
                  <h4> Que te ocurrio</h4>
                  <Radio.Group
                    options={optionsProblema}
                    onChange={e => {
                      this.setState({ tipoProblema: e.target.value });
                    }}
                    value={tipoProblema}
                  />
                  />
                </div>
              )}
              {steps[current].value === 'last' && (
                <div className="step-second">
                  <Title style={{ marginTop: 0 }} level={4}>
                    {' '}
                    Breve descripcion
                  </Title>
                  <TextArea
                    name="description"
                    rows={4}
                    onChange={e => this.handleInput(e)}
                  />

                  <Form.Item label="Adjunte un archivo">
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">Arrastra un archivo aca</p>
                      <p className="ant-upload-hint">
                        {/* Support for a single or bulk upload. */}
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </div>
              )}

              <div className="steps-action">
                {current < steps.length - 1 && (
                  <Button
                    type="primary"
                    style={{ float: 'right' }}
                    onClick={() => this.next()}
                  >
                    > > Siguiente
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    style={{ float: 'right' }}
                    onClick={this.onSubmit}
                  >
                    > > Crear Ticket
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Atras
                  </Button>
                )}
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    );
  }
}

CreateTicket.propTypes = {};

export default CreateTicket;
