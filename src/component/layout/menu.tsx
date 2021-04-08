import React, {useState, useEffect} from 'react';
import {Menu} from 'antd';
import Icon from '@ant-design/icons'
import {menuConfig, menuType} from './menu-config';
import {RouteProps, RouterProps} from 'react-router';

const {SubMenu} = Menu;

interface menuProps {
  collapsed: boolean
}

export default function MyMenu(props: (menuProps & RouteProps & RouterProps)) {
  let {collapsed} = props;
  const [openKey, setOpenKey] = useState(new Array<string>());

  const click = (path?: string) => {
    if (path) {
      props.history.push(path)
    }
  };
  const open = (path: string) => {
    if (openKey.indexOf(path) === -1) {
      setOpenKey([...openKey, path]);
    } else {
      setOpenKey(openKey.filter((value => value !== path)));
    }
  };
  useEffect(() => {
    if (props.location) {
      const arr = props.location.pathname.substring(1).split('-');
      setOpenKey([arr[0]])
    }
  }, [props.location]);

  const mkMenu = (menu: menuType) => (
    <Menu.Item key={menu.key} onClick={() => click(menu.path)}>
      {menu.icon && <Icon component={menu.icon}/>}
      <span>{menu.title}</span>
    </Menu.Item>
  )

  return (
    <Menu
      theme='dark'
      openKeys={openKey}
      mode="inline"
      className="menu"
      inlineCollapsed={collapsed}
    >
      {
        menuConfig.map((menu: menuType) => {
          if (!menu.children) {
            return mkMenu(menu)
          } else {
            return (
              <SubMenu
                key={menu.key}
                title={
                  <span>
                    <Icon component={menu.icon}/>
                    <span>{menu.title}</span>
                  </span>
                }
                onTitleClick={() => open(menu.key)}
              >
                {
                  menu.children?.map(mkMenu)
                }
              </SubMenu>
            )
          }
        })
      }
    </Menu>
  )
}
