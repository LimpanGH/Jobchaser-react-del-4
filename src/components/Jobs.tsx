//todo Fetch and render from JobTech --------------------------------------------------------------

// const urlWildcard= 'https://jobsearch.api.jobtechdev.se/search?q=muse*';
// const urlAdSearch= 'https://jobsearch.api.jobtechdev.se/search?q=Flen';
// const urlLogo = 'https://jobsearch.api.jobtechdev.se/ad/8430129/logo';
// const urlPhrase = 'https://jobsearch.api.jobtechdev.se/search?q=%22search%20for%20this%20phrase%22';
// const urlGeographicalArea = 'https://jobsearch.api.jobtechdev.se/search?q=Flen';
// const cleanEndpoint: string = 'https://jobsearch.api.jobtechdev.se/search?';

// Imports
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../ReduxToolkit/store';
import { setSearchFilter, setLoading, setJobs } from '../ReduxToolkit/JobSlice';
import { getData } from './GetData';
import { SearchField } from '../pages/Home/SearchField';
import { RenderedJobs } from './RenderedJobs';
import { Loader } from './Loader';

// Endpoint and mumber of posts
const activeEndpoint = 'https://jobsearch.api.jobtechdev.se/search?';
const limit = 40;
const offset = 0;
const url = `${activeEndpoint}&limit=${limit}&offset=${offset}`;

// Interface ---------------------------
export interface Job {
  id: string;
  employer: {
    name: string;
  };
  headline: string;
  workplace_address: {
    city: string;
  };
  logo_url?: string; // Optional
  publication_date: string;
  description?: {
    text: string;
  };
}

// Jobs -----------------------------------
export function Jobs(): JSX.Element {
  const dispatch = useDispatch();
  const searchFilter = useSelector((state: RootState) => state.job.searchFilter);
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const isLoading = useSelector((state: RootState) => state.job.isLoading);
  const [sortedJobs, setSortedJobs] = useState<Job[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        dispatch(setLoading(true));
        const data: any = await getData(url);
        dispatch(setJobs(data.hits as Job[]));

        setSortedJobs(data.hits as Job[]);

        console.log(data.hits[0].id);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const handleToggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);

    const sorted = [...jobs].sort((a, b) =>
      newSortOrder === 'asc'
        ? new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime()
        : new Date(b.publication_date).getTime() - new Date(a.publication_date).getTime()
    );
    setSortedJobs(sorted);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchFilter(e.target.value));
  };

  const formatPublicationDate = (publication_date: string) => {
    const date = new Date(publication_date);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const filteredJobs = sortedJobs.filter((job) => {
    return JSON.stringify(job).toLowerCase().match(searchFilter.toLowerCase());
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SearchField
        onChange={handleChange}
        value={searchFilter}
        onToggleSortOrder={handleToggleSortOrder}
        sortOrder={sortOrder}
      />
      <div className='w-[70%] mx-auto'>
        <div
          className='text-center bg-hits'
          style={{ marginBottom: '2rem', borderRadius: '0.2rem' }}
        >
          Din sökning gav {filteredJobs.length} träffar
        </div>
        <RenderedJobs filteredJobs={filteredJobs} formatPublicationDate={formatPublicationDate} />
      </div>
    </>
  );
}
