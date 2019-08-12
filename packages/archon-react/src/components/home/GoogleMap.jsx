import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/core';

const GoogleMap = props => {
  const googleMapRef = useRef(null);

  let googleMap = null;

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDRW8j77JHIfsgSBRZv68Iax9b_-DZVhwg&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      createGoogleMap();
      createMarkers();
    });
  }, []);

  const createGoogleMap = () => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 11,
      center: {
        lat: 37.7555478,
        lng: -122.419163,
      },
    });
  };

  const createMarkers = () => {
    new window.google.maps.Marker({
      position: { lat: 37.7655478, lng: -122.4569743 },
      map: googleMap,
    });

    new window.google.maps.Marker({
      position: { lat: 37.7509482, lng: -122.4064738 },
      map: googleMap,
    });
  };

  return (
    <div
      id='google-map'
      ref={googleMapRef}
      css={css`
        width: 100%;
        height: 350px;
      `}
    />
  );
};

export default GoogleMap;
