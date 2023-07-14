import React from 'react';
import { GoogleMap, LoadScript, MarkerF,  InfoWindow } from '@react-google-maps/api';

const Map = () => {
  return (
    <div className="google-map-code md:mt-0 mt-10">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35508.8031530856!2d-103.43310524711835!3d20.69384710081822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3ea6d9f38bd%3A0x8216df72e19a8ed5!2sStellaSolar!5e0!3m2!1sen!2sus!4v1688412640995!5m2!1sen!2sus"
      className="w-full h-[300px] xl:h-[350px] xl:w-[550px] md:h-[350px] md:w-[400px]"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  
  );
}


export default Map

// const containerStyle = {
//   width: '400px',
//   height: '300px'
// };

// const apiKey = process.env.GOOGLE_MAPS_API_KEY;




// const center = {
//   lat: 20.683769251602122,
//   lng: -103.42843335581337
// };


// const Map = () => {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBLNpXSgAaKaMpGLxl7DrWaYkj3Qc2-McE">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={13}
//       >
//         <MarkerF position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;