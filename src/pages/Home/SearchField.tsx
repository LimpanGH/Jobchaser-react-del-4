import React, { useState } from 'react';
import { useId } from 'react';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export function SearchField({ onChange, value }: Props) {
  const ageInputId = useId();
  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  
  {
    console.log('Generated ID:', ageInputId);
  }

  return (
    <div className='search-card'>
      <form onSubmit={handleSearch}>
        <label htmlFor={ageInputId}></label>
        <input
          id={ageInputId}
          name='search-input'
          type='text'
          placeholder='Sökelisök'
          // defaultValue='Sökelisök'
          value={value}
          onChange={onChange}
          className='ml-5 border border-black'
        />
        <SearchBtn />
      </form>

      <div className='tag-btn-container'>
        <div className='tag-btn'>tag1</div>
        <div className='tag-btn'>tag1</div>
      </div>
    </div>
  );
}

function SearchBtn() {
  return (
    <div>
      <button type='submit' className='ml-5'>
        🔎
      </button>
    </div>
  );
}