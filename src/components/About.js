import React from "react";

const About = (props) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#042743" : "white",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 className="my-3">About Us</h1>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>
                <u>TextUtils</u>
              </b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>
                Welcome to TextUtils - your go-to website for converting text to
                uppercase, lowercase, removing extra spaces and copying text
                with ease! <br />
              </strong>
              At TextUtils, we understand that working with text can be a
              time-consuming and tedious task. That's why we've created a
              platform that makes it easy for you to manipulate your text to
              suit your needs. With our simple yet powerful tools, you can
              quickly and easily transform your text to suit your requirements,
              whether you're a student, a writer, a marketer or a professional
              in any field.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
              aria-controls="collapseTwo"
            >
              <b>
                <u>Features Provided</u>
              </b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Our platform offers a variety of essential tools that can help you
              streamline your text editing process, including: <br />
              <ul>
                <li>
                  <strong>Text to Uppercase: </strong> Transform any text to
                  uppercase with just a click of a button.
                  <br />
                </li>
                <li>
                  <strong>Text to Lowercase: </strong> Convert any text to
                  lowercase in seconds with our easy-to-use tool.
                  <br />
                </li>
                <li>
                  <strong>Remove Extra Spaces: </strong>Get rid of unnecessary
                  spaces between words and sentences in your text.
                  <br />
                </li>
                <li>
                  <strong>Copy Text: </strong>Quickly copy your text to your
                  clipboard so you can paste it elsewhere.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <b><u>Our Goals</u></b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
             Our user-friendly platform is designed to provide you with a hassle-free experience, and our tools are optimized to deliver accurate results with just a few clicks. Whether you need to convert a single word or an entire document, TextUtils has got you covered.

At TextUtils, our goal is to simplify your text editing process and save you valuable time. We're constantly working to improve our platform and introduce new tools and features that can help you achieve your goals more efficiently. So why wait? Give TextUtils a try today and experience the difference for yourself!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
