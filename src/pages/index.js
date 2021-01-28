import { useEffect, useRef, useState } from "react";
import * as QRCode from "easyqrcodejs";
import Modal from "components/modal";
import { addANewDownload, lastDownloadedStorage } from "lib/index";
import Card from "components/card";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Home = () => {
  const [textValue, setTextValue] = useState("");
  const canvas = useRef(null);
  const overlay = useRef(null);
  const inputFile = useRef(null);
  var options = {
    text: "https://qr-code.itsuraj.com/",
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
    logoBackgroundColor: "#ffff",
    logoBackgroundTransparent: true,
    tooltip: true,
    quietZone: 10,
  };
  const onLogoCahnge = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        canvas.current.innerHTML = "";

        new QRCode(canvas.current, {
          ...options,
          logo: reader.result,
          text: `${tool.prefix}${textValue.replace(/^.*:\/\//i, "")}`,
        });
      };
    } else {
      generateQRCode();
    }
  };
  const supportedFormates = [
    {
      slug: "url",
      name: "URL",
      placeholder: "Enter Your Website Address",
      custom: false,
      logo: "🌐",
      prefix: "http://",
    },
    {
      slug: "text",
      name: "TEXT",
      custom: false,
      placeholder: "Enter Your Text",
      logo: "📝",
      prefix: "",
    },
    {
      slug: "email",
      name: "E-MAIL",
      placeholder: "Enter E-mail Address",
      custom: true,
      logo: "📧",
      prefix: "mailto:",
    },
    // {
    //   slug: "sms",
    //   name: "SMS",
    //   placeholder: "Enter your text",
    //   custom: true,
    //   logo: "📱",
    // },
    {
      slug: "phone",
      name: "PHONE",
      placeholder: "Enter Phone Number",
      custom: false,
      logo: "☎ ",
      prefix: "tel:",
    },
  ];
  const [tool, setTool] = useState(supportedFormates[0]);
  const [modalContainerClass, setModalContainerClass] = useState(
    "fixed modal overflow-hidden z-50 hidden opacity-0"
  );
  const useThisTool = (tool) => {
    setTool(tool);
    setTextValue("");
  };

  const generateQRCode = () => {
    if (textValue) {
      overlay.current.className =
        "fixed w-full h-screen top-0 left-0 transition-all bg-gray-500 bg-opacity-50 blur animated fadeIn visible opacity-100";
      setModalContainerClass(
        "fixed modal overflow-hidden z-50 rounded-lg visible opacity-100"
      );
      canvas.current.innerHTML = "";
      new QRCode(canvas.current, {
        ...options,
        text: `${tool.prefix}${textValue.replace(/^.*:\/\//i, "")}`,
      });
    }
  };

  const closeModal = () => {
    overlay.current.className =
      "fixed w-full h-screen top-0 left-0 transition-all bg-gray-500 bg-opacity-50 blur animated fadeOut hidden opacity-0";
    setModalContainerClass("fixed modal overflow-hidden z-50 hidden opacity-0");
  };
  const openFilePicker = () => {
    inputFile.current.click();
  };
  function canvasDownload(canvas, filename) {
    /// create an "off-screen" anchor tag
    var lnk = document.createElement("a"),
      e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL("image/png;base64");
    addANewDownload(lnk.href);
    setLastDownloads([...new Set([lnk.href, ...lastDownloads])]);
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
  const downloadQR = () => {
    var canvas = document.querySelector("#QRCODE canvas");
    canvasDownload(canvas, "download.png");
  };
  const [lastDownloads, setLastDownloads] = useState([]);
  useEffect(() => {
    const data = lastDownloadedStorage();
    if (data && Array.isArray(data)) {
      setLastDownloads(data);
    }
  }, []);
  const home = {
    title: "Logo QR Code Generator | Make Your Free QR Codes",
    description:
      "Free for everyone (commercial and print usage allowed). QR codes on business cards, T-Shirts, mugs and more! Logo QR code possible.",
    url: "https://qr-code.itsuraj.com/",
    image: "https://qr-code.itsuraj.com/social-1200x800.png",
  };
  return (
    <section className="container mx-auto h-screen">
      <NextSeo
        title={home.title}
        description={home.description}
        canonical={home.url}
        openGraph={{
          title: home.title,
          description: home.description,
          url: home.url,
          images: [
            {
              url: home.image,
            },
          ],
        }}
      />
      <Head>
        <meta name="twitter:title" content={home.title} />
        <meta name="twitter:description" content={home.description} />
        <meta name="twitter:image" content={home.image} />
      </Head>
      <div className=" bg-white shadow-lg py-10 px-5 text-center sm:text-left">
        {supportedFormates.map((links) => (
          <button
            className="inline-block text-gray-600 bg-gray-100 hover:bg-gray-300 p-2 my-2 text-xs font-bold mr-3 cursor-pointer outline-none border-none focus:bg-gray-300 focus:outline-none"
            style={{ minWidth: "89px" }}
            onClick={() => useThisTool(links)}
            key={links.slug}
          >
            {links.logo} {links.name}
          </button>
        ))}
        <textarea
          className="autoexpand tracking-wide py-2 px-4 mx-0 my-3 leading-relaxed appearance-none block w-full bg-gray-100 border rounded outline-none border-none resize-none font-bold text-2xl"
          placeholder={tool.placeholder}
          onChange={(e) => setTextValue(e.target.value)}
          value={textValue}
        />
        <div className="text-right text-white">
          <button
            type="button"
            onClick={generateQRCode}
            className="transition duration-200 bg-green-500 hover:bg-green-600 focus:bg-green-700 focus:shadow-sm text-white px-4 py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block focus:outline-none"
          >
            <span className="inline-block">Generate QR Code</span>
          </button>
        </div>
      </div>
      <div className="px-2">
        <h2 className="text-xl font-bold text-gray-700 md:text-2xl my-10">
          Recent QR Codes
        </h2>
        {lastDownloads && Array.isArray(lastDownloads) ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5">
            {lastDownloads.map((img, index) => (
              <Card img={img} key={index} />
            ))}
          </div>
        ) : null}
      </div>
      <div className="relative overflow-hidden">
        <input
          type="file"
          className="absolute opacity-0"
          style={{ top: "100000%", left: "1000000%" }}
          id="logo"
          name="logo"
          ref={inputFile}
          onChange={onLogoCahnge}
        />
      </div>
      <div
        ref={overlay}
        className={`fixed w-full h-screen top-0 left-0 transition-all bg-gray-500 bg-opacity-50 blur hidden opacity-0`}
        onClick={closeModal}
      ></div>
      <Modal
        modalContainerClass={modalContainerClass}
        openFilePicker={openFilePicker}
        canvas={canvas}
        downloadQR={downloadQR}
      />
    </section>
  );
};

export default Home;
