

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10 ">
      <div className="container mx-auto flex justify-between items-center px-14">
        <div className="flex items-center">
          <img className=" lg:h-16 md:h-16 h-11 pt-2 "
            src="https://i.ibb.co/FgwgMQV/logo-removebg-preview.png"
            alt=""/>
          <h1 className="text-2xl font-bold lg:block   text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">BrainStrom</h1>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/altaj.ahamedalen/" target="_blank" className="text-white hover:text-gray-400" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.349C0 23.407.593 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.462.099 2.793.142v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/al-taj1/" target="_blank" className="text-white hover:text-gray-400" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.72v20.56C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.72V1.72C24 .774 23.208 0 22.23 0zM7.08 20.452H3.56V9.057h3.52v11.395zM5.32 7.588c-1.127 0-1.822-.773-1.822-1.74 0-.98.712-1.74 1.853-1.74 1.14 0 1.823.76 1.837 1.74 0 .967-.698 1.74-1.868 1.74zm15.13 12.864h-3.52v-6.144c0-1.476-.527-2.484-1.848-2.484-.96 0-1.526.645-1.775 1.267-.092.222-.115.532-.115.843v6.518h-3.52s.046-10.577 0-11.395h3.52v1.614c.467-.723 1.303-1.75 3.17-1.75 2.319 0 4.057 1.516 4.057 4.768v6.764z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; 2024 Brainstrom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
