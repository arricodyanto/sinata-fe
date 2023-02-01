import React, { useState } from 'react';
import data from '../../../json/events.json'

// interface Props {
//   data: { title: string }[];
// }

export default function InputSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<{ title: string }[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
        setSearchResults(results);
    }
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map(item => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

// export default InputSearch;
