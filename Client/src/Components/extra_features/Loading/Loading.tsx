import React from "react";
import { connect } from "react-redux";
import LoadingImage from "../../../Images/LoadingImage/Loading.gif";
import "./Loading.scss";
import { ActionType } from "../../../Redux/Loading/ActionType/LoadingActionType";
import { Dispatch } from "redux";
import { Actions } from "../../../Redux/Loading/Actions/LoadingAction";

interface props {
  Onload: () => void;
  EndLoad: () => void;
}

const Loading: React.FC<props> = ({ Onload, EndLoad }) => {
  // useEffect(() => {
  //   Onload();
  // }, []);

  setTimeout(() => {
    EndLoad();
  }, 4000);

  return (
    <div className="loadingContainer">
      <div className="loading">
        <img src={LoadingImage} alt="loading" />
        <h1>Loading</h1>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return {
    Onload: () =>
      dispatch({
        type: ActionType.ON_LOADING,
      }),
    EndLoad: () =>
      dispatch({
        type: ActionType.END_LOADING,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Loading);
