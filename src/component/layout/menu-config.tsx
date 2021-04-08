import {
  ProjectOutlined,
  CalendarOutlined,
  PoundOutlined,
  EditOutlined,
  PrinterOutlined,
  TagsOutlined,
  DollarOutlined,
  SmileOutlined,
  SolutionOutlined
} from "@ant-design/icons";
import {ExoticComponent} from "react";


export interface menuType {
  title: string,
  key: string,
  icon?: ExoticComponent,
  path?: string,
  children?: menuType[]
}

export const menuConfig: menuType[] = [
  {
    title: '三角形问题',
    key: 'triangle',
    icon: ProjectOutlined,
    path: '/triangle'
    // children: [
    //     {
    //         title: 'è¾¹ç•Œå€¼æ³•',
    //         key: 'triangle-border',
    //         path: '/triangle-border'
    //     },{
    //         title: 'ç­‰ä»·ç±»æ³•',
    //         key: 'triangle-equ',
    //         path: '/triangle-equ'
    //     }]
  },
  {
    title: "万年历问题",
    key: 'calendar',
    icon: CalendarOutlined,
    // path: '/calendar'
    children: [
      {
        title: '系统',
        key: 'calendar-system', 
        icon: CalendarOutlined,
        path: '/calendar-system'
      }, {
        title: '分析',
        key: 'calendar-analysis',
        icon: SolutionOutlined,
        path: '/calendar-analysis'
      }]
  },
  {
    title: "佣金问题",
    key: 'commission',
    icon: PoundOutlined,
    path: '/commission'
    // children: [
    //     {
    //         title: 'è¾¹ç•Œå€¼æ³•',
    //         key: 'commission-border',
    //         path: '/commission-border'
    //     },
    // ]
  },
  {
    title: "Junit原理",
    key: 'junit',
    icon: EditOutlined,
    path: '/junit'
  },
  {
    title: '定义driver和stub',
    key: 'driver_stub',
    icon: EditOutlined,
    path: '/driver-stub'
  },
  {
    title: '测试工具',
    key: 'tool',
    icon: EditOutlined,
    path: '/tool'
  },
  {
    title: '打印机问题',
    key: 'printer',
    icon: PrinterOutlined,
    children: [
      {
        title: '系统',
        key: 'printer-system',
        icon: PrinterOutlined,
        path: '/printer-system'
      }, {
        title: '分析',
        key: 'printer-analysis',
        icon: SolutionOutlined,
        path: '/printer-analysis'
      }
    ]
  },
  {
    title: "销售问题",
    key: 'sale',
    icon: TagsOutlined,
    // path: '/sale'
    children: [
      {
        title: '系统',
        key: 'sale-system',
        path: '/sale-system'
      }, {
        title: '分析',
        key: 'sale-analysis',
        path: '/sale-analysis'
      }]
  },
  {
    title: "电信收费问题",
    key: 'tel-charge',
    icon: DollarOutlined,
    path: '/tel-charge'
    // children: [
    //     {
    //         title: "è¾¹ç•Œå€¼æ³•",
    //         key: 'tel-charge-border',
    //         path: '/tel-charge-border'
    //     },
    //     {
    //         title: "ç­‰ä»·ç±»æ³•",
    //         key: 'tel-charge-equ',
    //         path: '/tel-charge-equ'
    //     },{
    //         title: 'å†³ç­–è¡¨æ³•',
    //         key: 'tel-charge-decision',
    //         path: '/tel-charge-decision'
    //     }
    // ]
  },
  {
    title: '第9题',
    key: 'nine',
    icon: SmileOutlined,
    path: '/nine'
  }
];
