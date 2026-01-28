export default function GoogleMap() {
  return (
    <div className="w-full lg:w-1/2 h-auto mx-auto mt-8">
      <p className="text-xl text-center">Locate us </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.2439572161828!2d77.5945235189887!3d12.846753608565551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4770dc673bfb0423%3A0x5165a1a9a6ff20ac!2sSerah%20Construction!5e0!3m2!1sen!2sin!4v1765948004911!5m2!1sen!2sin"
        width={300}
        height={200}
        className="border-0 overflow-hidden w-full h-70 mt-2"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
