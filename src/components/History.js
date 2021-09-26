import HistoryUrl from "./HistoryUrl";

const History = ({ urls }) => {
  return (
    <div className="history-container">
      <hr />
      <h4>RECENT URLS</h4>
      <hr />
      {urls.map((url) => (
        <HistoryUrl key={url.id} url={url} />
      ))}
    </div>
  );
};

export default History;
