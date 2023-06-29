import { useEffect, useState } from 'react';
import EmployeeItem from './EmployeeItem';

const SearchUsers = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const allEmployees = [];

      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await response.json();
        allEmployees.push(...data.data);
        totalPages = data.total_pages;
        page++;
      }

      setEmployees(allEmployees);
    };

    fetchData().catch(error => console.log(error));
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
