const HandleRedirect = () => {
  const BACKEND_HOST = "https://simpleapi-app.herokuapp.com/api";

  const fetchUrlJson = async () => {
    const shortUrlId = window.location.pathname.substring(3);
    console.log(shortUrlId);

    const response = await fetch(
      BACKEND_HOST + `/shorturls/_search?urlId=${shortUrlId}`
    );
    console.log("response", response);
    const data = response.status === 200 ? await response.json() : null;
    return data;
  };

  const fetchUrl = async () => {
    const data = await fetchUrlJson();
    console.log("data", data);
    let longUrl = data.length > 0 ? data[0].longUrl : undefined;
    console.log(longUrl);
    if (longUrl !== undefined) {
      window.location = longUrl;
    } else {
      window.location.href = "/404/";
    }
  };

  fetchUrl();

  return <div></div>;
};

export default HandleRedirect;
