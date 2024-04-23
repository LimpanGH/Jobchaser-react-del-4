//todo Fetch and render from JobTech --------------------------------------------------------------

// const urlWildcard= 'https://jobsearch.api.jobtechdev.se/search?q=muse*';
// const urlAdSearch= 'https://jobsearch.api.jobtechdev.se/search?q=Flen';
// const urlLogo = 'https://jobsearch.api.jobtechdev.se/ad/8430129/logo';
// const urlPhrase = 'https://jobsearch.api.jobtechdev.se/search?q=%22search%20for%20this%20phrase%22';
// const urlGeographicalArea = 'https://jobsearch.api.jobtechdev.se/search?q=Flen';
// const cleanEndpoint: string = 'https://jobsearch.api.jobtechdev.se/search?';

// Imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../ReduxToolkit/store';
import { setSearchFilter, setLoading, setJobs } from '../ReduxToolkit/JobSlice';
import { getData } from './GetData';
import { SearchField } from '../pages/Home/SearchField';
import { RenderedJobs } from './RenderedJobs';
import { Loader } from './Loader';

// Endpoint and mumber of posts
const activeEndpoint = 'https://jobsearch.api.jobtechdev.se/search?';
const limit = 40; // Specify the number of results per page
const offset = 0; // Specify the starting point of the results (0-indexed)
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
}

// Jobs -----------------------------------
export function Jobs(): JSX.Element {
  const dispatch = useDispatch();
  const searchFilter = useSelector((state: RootState) => state.job.searchFilter);
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const isLoading = useSelector((state: RootState) => state.job.isLoading);

  // Runs AFTER the first render
  // useEffect(() => {
  //   const fetchData = async (): Promise<void> => {
  //     try {
  //       setIsloading(true);
  //       const data: any = await getData(url);
  //       // await new Promise((r) => setTimeout(r, 5000)); // just to see the loading spinner
  //       dispatch(setJobs(data.hits as Job[]));
  //       console.log(data.hits[0].id);
  //       setIsloading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        dispatch(setLoading(true)); // Dispatch setLoading action
        const data: any = await getData(url);
        dispatch(setJobs(data.hits as Job[]));
        console.log(data.hits[0].id);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setLoading(false)); // Dispatch setLoading action
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchFilter(e.target.value));
  };

  if (isLoading) {
    return <Loader />;
  }

  const filteredJobs = jobs.filter((job) => {
    return JSON.stringify(job).toLowerCase().match(searchFilter.toLowerCase()); //|| job.workplace_address.city.includes(searchFilter)
  });

  return (
    <>
      <SearchField onChange={handleChange} value={searchFilter} />
      <div className='w-[70%] mx-auto'>
        <div className='text-center'>{filteredJobs.length}</div>
        <RenderedJobs filteredJobs={filteredJobs} />
      </div>
    </>
  );
}
