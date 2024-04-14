import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Order from '@/components/Order';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '待支付',
    children: <Order />,
  },
  {
    key: '2',
    label: '待发货',
    children: '这里是你的待发货订单',
  },
  {
    key: '3',
    label: '待收货',
    children: '这里是你的待收货订单',
  },
  {
    key: '4',
    label: '待评价',
    children: '这里是你的待评价订单',
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;