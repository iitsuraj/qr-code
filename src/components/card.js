const Card = ({ img }) => {
  function Download(dataURI, filename = "download.png") {
    /// create an "off-screen" anchor tag
    var lnk = document.createElement("a"),
      e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    lnk.href = dataURI;
    /// create a "fake" click-event to trigger the download
    if (document.createEvent) {
      e = document.createEvent("MouseEvents");
      e.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );

      lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
      lnk.fireEvent("onclick");
    }
  }
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt="QR-Code" />
      <button
        className="w-full bg-gray-300 focus:outline-none  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded rounded-t-none inline-flex items-center"
        onClick={() => Download(img)}
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
