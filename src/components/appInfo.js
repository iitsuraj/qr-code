const AppInfo = () => {
  return (
    <div className="py-10" id="AppInfo">
      <div className={"my-10"}>
        <h1 className="font-bold">Logo QR Code Generator</h1>
        <p className="my-3">
          Is a Free online QR Code generator tool. With the help of it, you can
          create QR Code With Logo. Just Paste your Link/Text/E-Mail/Phone
          Number in the Input Box and press "Generate QR Code" and That's it.
        </p>
      </div>
      <div className={"my-10"}>
        <h2 className={"font-semibold"}>How to Create Logo QR Code?</h2>
        <ol className="p-5 list-decimal">
          <li>
            Select QR Code generate Type - URL or Link / Text / E-Mail / Phone.
          </li>
          <li>Enter Your URL / Text / E-Mail / Phone Number.</li>
          <li>Click on the "Generate QR Code" Button.</li>
          <li>
            You will get a list of all The Available / Supported options list.
          </li>
          <li>
            Click on Add Logo(This will open a file picker dialog select your
            logo).
          </li>
          <li>Your Logo QR Code generated Successfully.</li>
          <li>
            Click on the Download Button, and Your Logo QR Code will be
            downloaded in your Device Storage.
          </li>
        </ol>
      </div>
      <div className="my-10">
        <h2 className={"font-semibold"}>WHAT IS QR Code?</h2>
        <p className="my-3">
          "QR" stands for "Quick Response", which refers to the instant access
          to the information hidden in the Code (they can be read quickly by a
          cell phone). They are used to take a piece of information from a
          transitory media and put it in to your cell phone. You may soon see QR
          Codes in a magazine advert, on a billboard, a web page or even on
          someone's t-shirt.
        </p>
      </div>
      <div className="my-10">
        <h2 className={"font-semibold"}>USE QR Now</h2>
        <p className="my-3">
          QR codes can be used to get customers to download apps, initiate
          customer service, access WiFi networks without a password, and
          purchase products and the list is endless.
        </p>
      </div>
      <div className="my-10">
        <h2 className={"font-semibold"}>Why Use Logo QR Cod ?</h2>
        <p className="my-3">
          Make your brand instantly recognizable as your company logo becomes
          the center of attention on your QR Code.
        </p>
      </div>
    </div>
  );
};
export default AppInfo;
