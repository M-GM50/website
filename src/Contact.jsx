import React from "react";
import "./main.css";
import "./contact.css";

function DoubleArrow() {
  return (
    <svg
      width="82"
      height="114"
      viewBox="0 0 82 114"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M80.5355 80.5355C82.4882 78.5829 82.4882 75.4171 80.5355 73.4645L48.7157 41.6447C46.7631 39.692 43.5973 39.692 41.6447 41.6447C39.692 43.5973 39.692 46.7631 41.6447 48.7157L69.9289 77L41.6447 105.284C39.692 107.237 39.692 110.403 41.6447 112.355C43.5973 114.308 46.7631 114.308 48.7157 112.355L80.5355 80.5355ZM0 82H77V72H0L0 82Z" />
      <line x1="5" y1="2.18557e-07" x2="5" y2="77" strokeWidth="10" />
    </svg>
  );
}

function Contact() {
  return (
    <>
      <header>
        <h2 id="contact">
          Cont<span className="oddLetter">a</span>ct
        </h2>
      </header>

      <form
        id="contact-form"
        action="https://marion-contact.web.val.run"
        name="contact"
        method="POST"
      >
        <span className="text">Name: </span>
        <input type="text" name="name" />
        <span className="text">Email: </span>
        <input type="email" name="email" />
        <span className="text">Message:</span>
        <textarea
          id="bio"
          rows="3"
          cols="30"
          name="message"
          placeholder="Write something..."
        ></textarea>
        <span id="submit-button">
          <input type="submit" value="Submit" className="text" />
        </span>
      </form>

      <div id="contactMe" className="text">
        <div className="contactContainer">
          Drop me a line!
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>HEY</title>
            <path d="M19.57 6.698a5.724 5.724 0 00-2.644 1.572c-.84-2.952-2.65-7.42-4.415-8.15a1.283 1.283 0 00-1.181.05c-1.104.643-1.823 2.709-1.194 6.624C7.71 2.353 6.863 2.36 6.472 2.353a.956.956 0 00-.873.597c-.263.584-.79 2.406.494 6.327C4.547 7.16 4.072 6.89 3.526 6.917a.969.969 0 00-.821.557c-.463.873-.41 3.068 1.027 6.34a2.946 2.946 0 00-1.773-.73 1.06 1.06 0 00-.853.544c-.584 1.073.642 4.083 2.157 6.124C4.49 21.427 6.947 24 10.515 24a8.047 8.047 0 001.489-.141.654.654 0 00-.25-1.284c-2.965.578-5.2-1.052-6.553-2.515-2.021-2.19-2.908-4.82-2.959-5.622.424.173 1.644.892 4.018 3.934a.65.65 0 001.059-.757c-3.337-5.066-3.664-8.132-3.555-9.166.982 1 3.433 4.671 5.28 7.445a.642.642 0 00.88.199.642.642 0 00.238-.873C6.312 8.16 6.446 4.952 6.67 3.874c.577.584 2.11 2.618 5.34 9.626a.642.642 0 00.84.327.642.642 0 00.366-.827c-3.132-8.504-1.772-11.385-1.252-11.712.674 0 2.567 3.247 3.748 7.502.07.263.141.52.205.77a4.094 4.094 0 00-.385.924c-.64 2.355-1.283 7.7-.045 9.17a1.194 1.194 0 001.04.444 1.688 1.688 0 001.232-.757c1.15-1.675.475-5.879-.443-9.557a4.832 4.832 0 012.567-1.84 1.283 1.283 0 011.284.307c.526.59 1.445 2.798-1.34 10.583a.654.654 0 001.231.436c2.22-6.206 2.568-10.204 1.084-11.886A2.528 2.528 0 0019.57 6.7zm-2.888 11.918a.41.41 0 01-.218.186c-.48-.571-.48-3.953.045-6.727.995 4.795.417 6.2.173 6.54z" />
          </svg>
          <p>
            <DoubleArrow />
            <a href="mailto:marion@hey.com">marion@hey.com</a>
          </p>
        </div>
        <div className="contactContainer">
          Connect with me!
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <a href="https://www.linkedin.com/in/marionm50/" target="_blank">
            {" "}
            <p>
              <DoubleArrow />
              /marionm50{" "}
            </p>
          </a>
        </div>
        <div className="contactContainer">
          Check out my code!
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <p>
            <a href="https://github.com/M-GM50" target="_blank">
              <DoubleArrow />
              /M-GM50
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
