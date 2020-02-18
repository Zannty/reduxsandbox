import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <p>{counter}</p>
      <button onClick={dec} className="btn btn-danger btn-lg">
        DEC
      </button>
      <button onClick={inc} className="btn btn-danger btn-lg">
        INC
      </button>
      <button onClick={rnd} className="btn btn-danger btn-lg">
        RND
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(Counter);
