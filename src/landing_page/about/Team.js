import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="Images/My_photo.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-5">Piyush Chaturvedi</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 text-muted">
          <p>
            Piyush bootstrapped and founded BullRun in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            BullRun has changed the landscape of the Indian broking industry.<br/><br/> He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC). <br/> <br/>Playing basketball is
            his zen.
          </p>
          <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
