import copy from "copy-to-clipboard";
const DisplayUrl = (props) => {
  const openUrlInNewTabHandler = () => {
    window.open(props.shortUrl, "_blank");
  };

  const copyUrlToClipboardHandler = () => {
    const copyText = props.shortUrl;
    copy(copyText);
    alert("Url Copied!\n\nURL: " + copyText);
  };

  return (
    <div className="url-display-area">
      <div className={`short-url-div ${props.shortUrl ? "show" : ""}`}>
        <div id="short-url-area">
          <p>{props.shortUrl}</p>
        </div>
        <button className="btn" onClick={openUrlInNewTabHandler}>
          Open in new tab
        </button>
        <button className="btn" onClick={copyUrlToClipboardHandler}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default DisplayUrl;
