/**
 *
 * Sider
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import './index.less';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class SiderDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      showMantenimiento: false,
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[this.props.item]}
          mode="inline"
          defaultOpenKeys={[this.props.menu]}
        >
          <SubMenu
            key="ticket"
            title={
              <span>
                <Icon type="book" />
                <span>Tickets</span>
              </span>
            }
          >
            <Menu.Item key="list-ticket">
              {' '}
              <Link to="/dashboard"> Lista de Tickets </Link>
            </Menu.Item>
            <Menu.Item key="create-ticket">
              <Link to="/dashboard/create/ticket">Registrar Ticket</Link>
            </Menu.Item>
            <Menu.Item key="list-service">
              {' '}
              <Link to="/dashboard/services"> Solicitud de Servicios </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="user"
            title={
              <span>
                <Icon type="user" />
                <span>Usuarios</span>
              </span>
            }
          >
            <Menu.Item key="3">Lista de Usuarios</Menu.Item>
            <Menu.Item key="4">Editar Roles</Menu.Item>
          </SubMenu>
          <SubMenu
            key="account"
            title={
              <span>
                <Icon type="smile" />
                <span>Mi cuenta</span>
              </span>
            }
          >
            <Menu.Item key="profile">
              <Link to="/dashboard/account">Editar Perfil</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="10">
            <Icon type="logout" />
            <span onClick={this.props.onLogout}> Cerrar Session </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

SiderDashboard.propTypes = {};

export default SiderDashboard;
