import { useEffect, useState } from 'react';
import EmployeeItem from './EmployeeItem';

const SearchUsers = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setEmployees(data.data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredEmployees.map(employee => (
        <EmployeeItem
          key={employee.id}
          id={employee.id}
          avatar={employee.avatar}
          firstName={employee.first_name}
        />
      ))}
    </div>
  );
};

export default SearchUsers;
