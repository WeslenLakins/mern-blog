import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Welcome to MERN Stack</h1>
        <p>
          Sign up for an account to get access to all the features, or sign in
          to your account to get access to all the features.
        </p>
      </section>

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaTicketAlt /> New Ticket
      </Link>
      <Link to='/tickets' className='btn btn-block'>
        <FaQuestionCircle /> View Tickets
      </Link>
    </>
  );
}

export default Home;
