import React from 'react'

const Map = () => {

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  return (
    <div className=' '>
      <iframe
      className='border-2 border-black my-4'
  width="800"
  height="450"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJG0aHc_lGLxgRFlBKE5wuJS4&key=${apiKey}`}>
</iframe>


    </div>
  )
}

export default Map
