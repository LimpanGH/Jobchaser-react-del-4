// * Endpoints: https://gitlab.com/arbetsformedlingen/job-ads/jobsearch-apis/-/blob/main/docs/GettingStartedJobSearchSE.md#Endpoints

export async function getData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // console.table(data);
    // console.log(data.hits);
    console.log(data.hits[0].employer.name);
    // console.log(data.hits[0].application_details.reference);
    

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
