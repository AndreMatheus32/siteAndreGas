import React from 'react';
import { GoogleMap, useJsApiLoader , Marker } from '@react-google-maps/api';


const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBTXjeQzmqJjRGXT7_Kp2UfwguMLOdBQsY"
      })
    const position = {lat: -23.557900371161804 , lng : -51.49107361775747 }

    return (<div  className='map'>
        {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width:'80%' , height:'500px' }}
        center={position}
        zoom={15}
      >
        <Marker position={position} options={{
            label : {
                text:'André Gás' ,
                className : 'map-marker'
            }}}/> 
        <></>
      </GoogleMap>
  ) : <></> }

    </div>)




}

export default Map;