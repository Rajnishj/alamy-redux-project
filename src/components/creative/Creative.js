import React from "react";
import MainFooter from "../Footer/MainFooter";
import "./creative.scss";

const Creative = () => {
  return (
    <>
      <div className="container-fluid creative">
        <h2 className="text-center">Creative Ideas</h2>
        <div className="bg-img"></div>
        <MainFooter
          header="The comperhensive guide to buying stocks photos"
          para="We take a deep dive into licensing ,release,pricing,file size and much more"
          text="View the blog posts"
        />
      </div>
      <div className="creative-sec">
        <h2>Get creative inspiration in your inbox</h2>
        <p>Join your colleagues nd sign-upfor monthly creative ideas</p>
        <div className="mt-4">
          <input type="email" placeholder="Email address" />
          <button className="btn-sec">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Creative;
