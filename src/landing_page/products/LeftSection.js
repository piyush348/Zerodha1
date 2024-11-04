import React from "react";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL}/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
          <a href={tryDemo} style={{marginRight:"50px", textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
          <a href={googlePlay}>
            <img src="Images/googlePlayBadge.svg" 
            style={{marginRight:"50px"}}/>
          </a>
          <a href={appStore}>
            <img src="Images/appstoreBadge.svg" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
