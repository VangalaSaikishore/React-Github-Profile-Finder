import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="sm:flex sm:justify-center sm:items-center" style={{color: '#fffacd'}}>
      <MdError className="text-10xl mx-auto sm:mx-0" style={{color: '	#ff1493'}} />
      <div className="not-found-text text-3xl text-4xl font-bold text-center mx-9">
        <h2>Oops.... It's a wrong path</h2>
        <p className="text-2xl mt-2">404 Page Not Found !!!!</p>
        <Link to="/" className="btn mt-4 text-xl">
         Kindly Return to HomePage !!!!!
         
        </Link>
      </div>
    </div>
  );
};

export default NotFound;