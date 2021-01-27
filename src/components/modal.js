const Modal = ({ canvas, modalContainerClass, openFilePicker, downloadQR }) => {
  return (
    <div className={modalContainerClass}>
      <div className={"bg-white shadow-lg animated fadeInUp"}>
        <div
          className="bg-white object-cover object-center w-auto text-center"
          style={{ minHeight: "280px", minWidth: "280px" }}
          id="QRCODE"
          ref={canvas}
        ></div>
        <div className="">
          <button
            className="flex items-center transition duration-200 justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 w-full focus:outline-none"
            title="Add logo"
            onClick={openFilePicker}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 fill-current text-white"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mx-3 text-white font-semibold text-lg">
              Add logo
            </span>
          </button>
          <button
            onClick={downloadQR}
            title="Download"
            className="flex items-center transition duration-200 justify-center px-6 py-3 bg-green-500 hover:bg-green-600 focus:bg-green-700 w-full focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 fill-current text-white"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mx-3 text-white font-semibold text-lg">
              Download
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
