import React from 'react';

const Search: React.FC<{ callback(e: { target: { value: string } }): void; term: string }> = (
  props
) => {
  const { term } = props;
  return (
    <div style={{ display: 'flex', width: '90vw', justifyContent: 'flex-end', margin: 25 }}>
      <input
        type="text"
        onChange={props.callback}
        value={term}
        placeholder="Search"
        style={{ width: 250, borderRadius: '15px', height: 18, padding: 5 }}
      />
    </div>
  );
};

export default Search;
