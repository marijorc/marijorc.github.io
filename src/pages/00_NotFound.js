import { Link } from 'react-router-dom';

function NotFound() {
  return(
    <section className='section'>
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to="/" className="btn">Back Home</Link>
    </section>
  );
}
 
export default NotFound;