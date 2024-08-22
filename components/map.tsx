import React from "react";

const Map = () => {
  return (
    <div className="w-full max-w-full my-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4212.887708982148!2d37.00110177588016!3d-1.1246364754244969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f46f97387461b%3A0x2e252e9c134a5016!2sKenyatta%20Road%20Business%20Centre!5e0!3m2!1sen!2ske!4v1724349376412!5m2!1sen!2ske"
        className="w-full h-64 md:h-96 border-2 border-black"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
