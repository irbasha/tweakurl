import { useState } from "react";

const UrlInputForm = (props) => {
  const [lengthyUrl, setLengthyUrl] = useState("");

  const urlChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setLengthyUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitDisplayURL(lengthyUrl);
    setLengthyUrl("");
  };

  return (
    <div className="url-form">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-input"
          placeholder="Paste Your Lengthy URL here"
          value={lengthyUrl}
          onChange={urlChangeHandler}
          required
        />
        <button className="btn btn-submit" type="submit">
          Shorten
        </button>
      </form>
    </div>
  );
};

export default UrlInputForm;
