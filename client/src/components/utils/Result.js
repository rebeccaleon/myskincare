import React from 'react';
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      You have <strong>{props.quizResult}</strong> skin!<br/>
      <Link to={`/shop/${props.quizResult}`}>Shop products for {props.quizResult} skin</Link>
      <section><Link to={'/signup'}>Sign Up </Link></section>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;