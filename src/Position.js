import React from 'react';

export default function Position({lat,lng}) {
    return (
      <div className="col-12">
        <h3 className="header mt-3">Your position</h3>
        <div className="mt-2 mb-2">
          <span>Latitude: {lat.toFixed(3)}</span>, <span>Longitude: {lng.toFixed(3)}</span>
        </div>  
      </div> 
  );
}