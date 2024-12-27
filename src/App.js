import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Updated local candidate data with 10 entries
  const candidatesData = [
    { id: 1, name: 'Shubham', skills: 'React, Node.js', experience: 5 },
    { id: 2, name: 'Shivam', skills: 'Angular, Java', experience: 3 },
    { id: 3, name: 'Ravi', skills: 'Python, Django', experience: 7 },
    { id: 4, name: 'Shashank', skills: 'Vue.js, PHP', experience: 2 },
    { id: 5, name: 'Valmiki', skills: 'React Native, GraphQL', experience: 4 },
    { id: 6, name: 'Sarah Lee', skills: 'Go, Kubernetes', experience: 6 },
    { id: 7, name: 'Chris Evans', skills: 'C++, Unreal Engine', experience: 8 },
    { id: 8, name: 'Sophia Martinez', skills: 'Swift, iOS Development', experience: 5 },
    { id: 9, name: 'Ayush Johnson', skills: 'Ruby on Rails, Postgres', experience: 3 },
    { id: 10, name: 'purushottam', skills: 'JavaScript, TypeScript', experience: 4 },
  ];

  const [candidates, setCandidates] = useState(candidatesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sort candidates by experience
  const handleSort = () => {
    const sortedCandidates = [...candidates].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.experience - b.experience;
      } else {
        return b.experience - a.experience;
      }
    });
    setCandidates(sortedCandidates);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
  };

  // Filter candidates based on search term
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Candidate List Viewer</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Name or Skills"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />

      {/* Sorting Button */}
      <button onClick={handleSort} style={{ marginBottom: '20px', padding: '10px' }}>
        Sort by Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>

      {/* Display Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Experience (Years)</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.skills}</td>
              <td>{candidate.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
