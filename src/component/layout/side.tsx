import React, {ExoticComponent} from 'react';
import {RouterProps} from 'react-router';
import Icon from '@ant-design/icons';
import Menu from './menu'
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

export default function Side(props: RouterProps) {
  let [collapsed, setCollapsed] = React.useState(false);
  const onCollapse = () => setCollapsed(!collapsed);
  return (
    <div className="side">
      <Menu collapsed={collapsed} {...props} />
      <div className="colseMenu"
           onClick={onCollapse}
           style={{width: collapsed ? '80px' : '200px'}}>
        <Icon component={(collapsed ? RightOutlined : LeftOutlined) as ExoticComponent}/>
      </div>
    </div>
  )
}
