const Card = ({ img, download }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt="QR-Code" />
      <button
        className="w-full bg-gray-300 focus:outline-none  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded rounded-t-none inline-flex items-center"
        onClick={() => download(undefined, undefined, img)}
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download</span>
      </button>
    </div>
  );
};

export default Card;
