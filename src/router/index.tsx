import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../component/layout';
import Triangle from '../page/triangle'
import Calendar_S from '../page/calendar'
import Calendar_A from '../page/calendar/analysis'
import Sale_S from '../page/sale'
import Sale_A from '../page/sale/analysis'
import Commission from '../page/commission'
import TelCharge from '../page/tel-charge'
import Junit from '../page/junit'
import Driver from '../page/driver_stub'
import Tool from '../page/tool'
import Printer_A from '../page/printer/analysis'
import Printer_S from '../page/printer/system'
import Nine from '../page/nine'

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/triangle',
        component: Triangle
      },
      {
        path: '/calendar-system',
        component: Calendar_S
      },
      {
        path: '/calendar-analysis',
        component: Calendar_A
      },
      {
        path: '/sale-system',
        component: Sale_S
      },
      {
        path: '/sale-analysis',
        component: Sale_A
      },
      {
        path: '/commission',
        component: Commission
      }, {
        path: '/tel-charge',
        component: TelCharge
      }, {
        path: '/junit',
        component: Junit
      }, {
        path: '/driver-stub',
        component: Driver
      }, {
        path: '/tool',
        component: Tool
      }, {
        path: '/printer-analysis',
        component: Printer_A
      }, {
        path: '/printer-system',
        component: Printer_S
      }, {
        path: '/nine',
        component: Nine
      }
    ]
  }
];

export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} {...route} />}
    />
  )
}
