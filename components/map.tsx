import React from 'react';

const Map = () => {
  const apiKey = process.env.Maps_API_Key;



  return (
    <div className='w-full max-w-full my-4'>
      <p className='text-xs text-black dark:text-white'>Refresh page if map is not showing</p>
      <iframe
        className='w-full h-64 md:h-96 border-2 border-black'
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJG0aHc_lGLxgRFlBKE5wuJS4&key=${apiKey}`}
      ></iframe>
    </div>
  );
}

export default Map;
