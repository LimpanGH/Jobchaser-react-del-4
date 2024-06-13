import React, { useState, useId } from 'react';
import { TbSortAscendingNumbers, TbSortDescendingNumbers } from 'react-icons/tb';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onToggleSortOrder: () => void;
  sortOrder: 'asc' | 'desc';
};

type Tag = {
  id: number;
  text: string;
  editing?: boolean;
};

export function SearchField({ onChange, value, onToggleSortOrder, sortOrder }: Props) {
  const [tags, setTags] = useState<Tag[]>([]);
  const ageInputId = useId();

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleAddTag = (text: string) => {
    setTags((prevTags) => [...prevTags, { id: Date.now(), text, editing: false }]);
  };

  const handleEditTag = (tagId: number) => {
    setTags((prevTags) =>
      prevTags.map((tag) => (tag.id === tagId ? { ...tag, editing: true } : tag))
    );
  };

  const handleSaveTag = (tagId: number, newText: string) => {
    if (newText.trim()) {
      setTags((prevTags) =>
        prevTags.map((tag) => (tag.id === tagId ? { ...tag, text: newText, editing: false } : tag))
      );
    } else {
      setTags((prevTags) => prevTags.filter((tag) => tag.id !== tagId));
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const handleTagClick = (tagText: string) => {
    onChange({ target: { value: tagText } } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleDeleteTag = (tagId: number) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== tagId));
  };

  return (
    <div className='mt-4 rounded-md search-card bg-searchCard '>
      <form onSubmit={handleSearch} className='flex items-center'>
        <label htmlFor={ageInputId} className='sr-only'>
          Search
        </label>
        <input
          id={ageInputId}
          name='search-input'
          type='text'
          placeholder='Sök i databasen '
          value={value}
          onChange={onChange}
          className='p-1 ml-5 rounded-md'
        />
      </form>

      <button
        onClick={onToggleSortOrder}
        className={`mt-4 btn-toggleDate rounded-md  ${
          sortOrder === 'asc' ? 'bg-btnAsc' : 'bg-btnDesc'
        }`}
        style={{
          border: '1px solid black',

          padding: '0.2rem',
          marginTop: '0',
        }}
      >
        <div className='flex items-center justify-center p-1'>
          {sortOrder === 'asc' ? (
            <TbSortAscendingNumbers size={19} />
          ) : (
            <TbSortDescendingNumbers size={19} />
          )}
        </div>
      </button>

      <input
        type='text'
        className='p-1 rounded-md tag-input'
        placeholder='Skapa söktag'
        onKeyDown={(event) => {
          if (event.key === 'Enter' && event.currentTarget.value.trim()) {
            handleAddTag(event.currentTarget.value.trim());
            event.currentTarget.value = '';
          }
        }}
      />

      <div className='flex-wrap gap-1 tag-btn-container'>
        {tags.map((tag) => (
          <div key={tag.id} className='relative'>
            <div className='p-1 rounded-md tag-btn min-w-36 bg-tags'>
              {tag.editing ? (
                <input
                  type='text'
                  className='tag-input'
                  defaultValue={tag.text}
                  onBlur={(event) => handleSaveTag(tag.id, event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      handleSaveTag(tag.id, (event.target as HTMLInputElement).value);
                    }
                  }}
                />
              ) : (
                <div className='relative'>
                  <span
                    className='w-4 px-4 truncate border-none min-width-0'
                    title={tag.text.length > 9 ? tag.text : undefined}
                    onClick={() => handleTagClick(tag.text)}
                  >
                    {truncateText(tag.text, 9)}
                  </span>
                  <button onClick={() => handleEditTag(tag.id)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='absolute border border-none bottom-[calc(100%-_8px)] right-[calc(100%-_8px)] size-4  '
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleDeleteTag(tag.id)}
                    className='absolute bottom-0 right-0 p-1 transform rounded-md translate-x-2/4 -translate-y-2/4'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='border border-none size-4'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
