import React from "react"
import  heart  from "../../../images/heart-solid.svg";
import  share  from "../../../images/share.svg";

const Post = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>ⓥ{props.creator}</strong>
            <span className="badge text-bg-dark">{props.tags}</span>
          </div>
        </div>
        <div>
          <img src={props.selectedFile} className=" img-fluid w-100" alt="..." style={{maxHeight:"180px"}}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title.length>30?props.title.slice(0,18)+"...":props.title}</h5>
          <p className="card-text">{props.message.length>40?props.message.slice(0,40)+"...":props.message}</p>
          {/* <a href="#" className="btn btn-dark w-100">
            Read more
          </a> */}
          <div className="d-flex justify-content-between">
          <em className="d-flex" style={{flexFlow:"row nowrap"}}>
          <img
            src={heart}
            height="20"
          ></img>
          <p className="mx-2">2,3443</p>
          </em>
          
          <em className="d-flex" style={{flexFlow:"row nowrap"}}>
          <img
            src={share}
            height="20"
          ></img>
          </em>
          
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          {new Date(props.createdAt).toDateString()}
        </div>
      </div>
    </div>
  );
};

export default Post;