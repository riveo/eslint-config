import { useEffect, useState } from 'react';

export function HooksAndA11ySmoke() {
  const [query, setQuery] = useState('React');

  useEffect(() => {
    document.title = `Search for ${query}`;
  }, [query]);

  return (
    <form>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <h2>Search for {query}</h2>
      <img src="/icons.svg" alt="Application icons" />
      <button type="button">Submit</button>
    </form>
  );
}
