const HandleRedirect = () => {
  const fetchUrlJson = async () => {
    const shortUrlId = window.location.pathname.substring(3);
    console.log(shortUrlId);

    const response = await fetch(
      `http://window.location.origin/api/shorturls/_search?urlId=${shortUrlId}`
    );
    const data = await response.json();
    return data;
  };

  const fetchUrl = async () => {
    const data = await fetchUrlJson();
    console.log(data);
    let longUrl = data ? data[0].longUrl : undefined;
    console.log(data.longUrl);
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
