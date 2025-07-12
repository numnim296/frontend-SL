import { Table } from 'antd';
import type { User } from '../types/user';

interface Props {
  users: User[];
}

export default function UserTable({ users }: Props) {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
  ];

  return <Table rowKey="id" dataSource={users} columns={columns} pagination={{ pageSize: 5 }} />;
}