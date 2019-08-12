import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/core';

const GoogleMap = () => {
  const googleMapRef = useRef(null);

  let googleMap = null;
  let infoWindow = null;

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=KEY&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      createGoogleMap();
      createMarkers();
    });
  }, []);

  const createGoogleMap = () => {
    infoWindow = new window.google.maps.InfoWindow();
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 11,
      center: {
        lat: 37.7555478,
        lng: -122.419163,
      },
    });
  };

  const createMarkers = () => {
    const service = new window.google.maps.places.PlacesService(googleMap);

    const requests = [
      {
        query: 'Circus Center',
        fields: ['name', 'geometry'],
      },
      {
        query: 'Circus Connections',
        fields: ['name', 'geometry'],
      },
    ];

    requests.forEach(request => {
      service.findPlaceFromQuery(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          results.forEach(result => {
            createMarker(result);
          });
        }
      });
    });
  };

  const createMarker = place => {
    const marker = new window.google.maps.Marker({
      map: googleMap,
      position: place.geometry.location,
    });

    window.google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(place.name);
      infoWindow.open(googleMap, this);
    });
  };

  return (
    <div
      id='google-map'
      ref={googleMapRef}
      css={css`
        width: 100%;
        height: 400px;
      `}
    />
  );
};

export default GoogleMap;
