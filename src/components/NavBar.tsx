import { Link } from 'react-router-dom';
export function NavBar() {
  return (
    <div className='bg-blue-100 w-[500px] flex gap-8'>
      <Link to='/home' className='text-3xl '>
        Home
      </Link>
      <Link className='text-3xl ' to='/jobs'>
        Jobs
      </Link>
      <Link className='text-3xl ' to='/dashboard'>
        Dashboard
      </Link>
      <Link className='text-3xl ' to='/signup'>
        Signup
      </Link>
      <Link className='text-3xl ' to='/signin'>
        Signin
      </Link>
      {/* <Link to='/'>Home</Link>
      <Link to='/'>Home</Link>
      <Link to='/'>Home</Link>
      <Link to='/'>Home</Link> */}
    </div>
  );
}
