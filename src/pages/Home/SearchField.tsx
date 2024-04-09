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

// convert the code to use useState() with something like this ⬇ -------------------------------
// import React, { useState } from 'react';
// import { useId } from 'react';

// type Props = {
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   value: string;
//   setValue: React.Dispatch<React.SetStateAction<string>>; // Setter function for value
// };

// export function SearchField({ onChange, value, setValue }: Props) {
//   const ageInputId = useId();

//   const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Implement search logic here if needed
//   };

//   return (
//     <div className='search-card'>
//       <form onSubmit={handleSearch}>
//         <label htmlFor={ageInputId}></label>
//         <input
//           id={ageInputId}
//           name='search-input'
//           type='text'
//           placeholder='Sökelisök'
//           value={value}
//           onChange={(e) => setValue(e.target.value)} // Update value using setValue
//           className='ml-5 border border-black'
//         />
//         <SearchBtn />
//       </form>

//       <div className='tag-btn-container'>
//         <div className='tag-btn'>tag1</div>
//         <div className='tag-btn'>tag1</div>
//       </div>
//     </div>
//   );
// }

// function SearchBtn() {
//   return (
//     <div>
//       <button type='submit' className='ml-5'>🔎</button>
//     </div>
//   );
// }

// // Usage example in parent component:
// // const [searchValue, setSearchValue] = useState('');

// // <SearchField
// //   onChange={(e) => setSearchValue(e.target.value)}
// //   value={searchValue}
// //   setValue={setSearchValue}
// // />
