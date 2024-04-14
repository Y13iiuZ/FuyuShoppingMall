import React from 'react';
import { Descriptions,Input } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: <Input defaultValue='ztx'/>,
  },
  {
    key: '2',
    label: 'Telephone',
    children: '18381037727',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hi四川成都',
  },
  {
    key: '4',
    label: 'Remark',
    children: 'Russell',
  },
  {
    key: '5',
    label: 'Address',
    children: <Input placeholder='请输入你的住址'/>,
  },
];

const UserSetting: React.FC = () => <Descriptions title="User Info" items={items} />;

export default UserSetting;