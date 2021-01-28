export const lastDownloadedStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("@last-downloaded");
    if (value) {
      const data = JSON.parse(value);
      return data.data;
    }
    return undefined;
  }
  return undefined;
};

export const addANewDownload = (dataUri) => {
  if (typeof window !== "undefined") {
    let lastDownloaded = lastDownloadedStorage();
    if (lastDownloaded) {
      lastDownloaded = lastDownloaded || [];
      lastDownloaded = [dataUri, ...lastDownloaded];
      lastDownloaded = [...new Set(lastDownloaded)];
      lastDownloaded.splice(9, lastDownloaded.length);
      localStorage.setItem(
        "@last-downloaded",
        JSON.stringify({ data: lastDownloaded })
      );
    } else {
      localStorage.setItem(
        "@last-downloaded",
        JSON.stringify({ data: [dataUri] })
      );
    }
  }
  return false;
};
