import copy from "copy-to-clipboard";

const HistoryUrl = ({ url }) => {
  const copyUrl = () => {
    copy(url.shortUrl);
    alert("copied! url " + url.shortUrl);
  };
  return (
    <div className="history-url">
      <p>
        <a href={url.shortUrl} target="_blank" rel="noreferrer">
          {url.shortUrl}
        </a>
      </p>
      <button className="btn" onClick={copyUrl}>
        copy
      </button>
    </div>
  );
};

export default HistoryUrl;
