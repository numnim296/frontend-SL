import { useState, useEffect } from 'react';
import { Input } from 'antd';
import type { User } from '../types/user';
import UserTable from '../components/userTable';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  useEffect(() => {
    const term = searchData.toLowerCase();
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term),
      ),
    );
  }, [searchData, users]);

  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 20 }}>
      <Input.Search
        placeholder="search by name or email"
        allowClear
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <UserTable users={filteredUsers} />
    </div>
  );
}