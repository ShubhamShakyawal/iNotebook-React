import React from "react";

function About() {
  return (
    <div className="container" style={{ margin: "0px 104.5px" }}>
      <h1 className="text-center mb-5">About</h1>
      <hr />
      <strong>iNotebook - </strong> Notes secured on cloud.
      <br />
      It is an project based on <strong>React</strong>
      <br />
      You can save your here without any doubt.
      <hr />
      <h4 className="my-4">How to Start</h4>
      <h6>
        Step 1 : Create an account <br />
        Step 2 : Log into the account
      </h6>
      <br />
      And that's all you are good to go!!
      <div className="mb-5">
        <img
          style={{
            height: "80px",
            position: "relative",
            left: "40%",
          }}
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
