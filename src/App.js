import UrlInputForm from "./components/UrlInputForm";
import DisplayUrl from "./components/DisplayUrl";
import HandleRedirect from "./components/HandleRedirect";
import History from "./components/History";
import UrlNotFound from "./components/UrlNotFound";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CryptoJS from "crypto-js";
import "./App.css";

const BACKEND_HOST = "https://simpleapi-app.herokuapp.com/api";

function App() {
  const [urls, setUrls] = useState([]);
  const [shortenUrl, setShortenUrl] = useState("");

  const fetchUrls = async () => {
    const response = await fetch(BACKEND_HOST + "/shorturls/");
    const data = await response.json();
    setUrls(data);
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const addUrlJson = async (urlJson) => {
    const response = await fetch(BACKEND_HOST + "/shorturls/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(urlJson),
    });

    const data = await response.json();
    console.log(data);
  };

  const updateList = async (data) => {
    setUrls([...urls, data]);
    await addUrlJson(data);
  };

  const shortUrlExist = async (id) => {
    const hostUrl = BACKEND_HOST + `/shorturls/${id}`;
    const response = await fetch(hostUrl);
    if (response.status === 200) {
      const data = await response.json();
      console.log("data", data);
      return data;
    } else {
      return null;
    }
  };

  const onSubmitDisplayUrlHandler = async (lengthyUrl) => {
    let urlHash = CryptoJS.MD5(lengthyUrl).toString();
    const urlExists = await shortUrlExist(urlHash);
    console.log(urlExists);
    if (urlExists) {
      setShortenUrl(urlExists.shortUrl);
    } else {
      const urlId = Math.random().toString(36).substring(2, 15);
      const shortUrl = window.location.origin + "/u/" + urlId;
      const urlInfo = {
        id: urlHash,
        urlId: urlId,
        shortUrl: shortUrl,
        longUrl: lengthyUrl,
      };
      setShortenUrl(shortUrl);
      updateList(urlInfo);
    }
  };

  return (
    <Router>
      <Route path="/" exact>
        <div className="container">
          <h1>URL Shortener</h1>
          <UrlInputForm onSubmitDisplayURL={onSubmitDisplayUrlHandler} />
          <DisplayUrl shortUrl={shortenUrl} />
          <History urls={urls} />
        </div>
      </Route>
      <Route path="/u/*" exact={true} render={() => <HandleRedirect />} />
      <Route path="/404/" component={UrlNotFound} />
    </Router>
  );
}

export default App;
