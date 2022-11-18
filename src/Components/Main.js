import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <>
    <div class="jumbotron jumbotron-fluid text-center">
  <div class="container">
    <h1 class="display-3">Welcome Everyone</h1>
    <p class="lead display-6">This is a best temple and I must to say go and Pray with your family.</p>
  </div>
</div>
      <div className="container my-5">
        <div className="row">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Main;
