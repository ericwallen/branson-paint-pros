import React, { useState } from "react";
import logo from "./assets/logo.png";
import HomeBG from "./assets/home-bg.jpg";
import interior from "./assets/interior.jpg";
import exterior from "./assets/exterior-2.jpg";

import "./App.css";
import BlankModal from "./components/BlankModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [quoteMenu, setQuoteMenu] = useState("firstStep");
  const [quoteType, setQuoteType] = useState("");
  const [quoteFinishedMessage, setQuoteFinishedMessage] = useState("");
  const [showQuoteDetails, setShowQuoteDetails] = useState(false);
  const [quotePaintLocation, setQuotePaintLocation] = useState("");
  const [quoteFormInputs, setQuoteFormInputs] = useState({ state: "MO" });

  const sendQuoteToBret = e => {
    e.preventDefault();
    let path =
      "https://us-central1-bransonpaintpros-com.cloudfunctions.net/sendQuoteToBret?";
    path += `&TYPE=${quoteType}`;
    path += `&PAINTLOCATION=${quotePaintLocation}`;
    path += `&FIRSTNAME=${quoteFormInputs.firstName}`;
    path += `&LASTNAME=${quoteFormInputs.lastName}`;
    path += `&EMAIL=${quoteFormInputs.email}`;
    path += `&PHONENUMBER=${quoteFormInputs.phoneNumber}`;
    path += `&ADDRESS1=${quoteFormInputs.address1}`;
    path += `&ADDRESS2=${quoteFormInputs.address2}`;
    path += `&CITY=${quoteFormInputs.city}`;
    path += `&STATE=${quoteFormInputs.state}`;
    path += `&ZIPCODE=${quoteFormInputs.zipCode}`;
    path += `&DETAILS=${quoteFormInputs.details}`;
    fetch(path)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setQuoteFinishedMessage(
          "Your quote request was recieved. We will get in touch with you shortly"
        );
        setQuoteMenu("finished");
      })
      .catch(message => {
        console.log(message);
        setQuoteFinishedMessage(
          "Something went wrong and we did not get your request. Please call us at 417-598-8094"
        );
        setQuoteMenu("finished");
      });
  };

  const goToQuoteStepTwo = () => {
    if (!quoteType || !quotePaintLocation) {
      alert("Please make selections before moving to step two");
      return;
    }
    setQuoteMenu("secondStep");
  };

  const handleQuoteInputs = e => {
    let clone = quoteFormInputs;
    quoteFormInputs[e.target.name] = e.target.value;
    setQuoteFormInputs(clone);

    console.log(quoteFormInputs);
  };

  return (
    <div className="App">
      <BlankModal
        showModal={showModal}
        handleHideModal={() => setShowModal(false)}
      >
        {quoteMenu === "firstStep" && (
          <>
            <p>What type of property needs painting?</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {quoteType === "home" && (
                <div
                  style={{
                    border: "1px solid rgb(40, 154, 207)",
                    cursor: "pointer",
                    padding: "8px",
                    backgroundColor: "rgb(40, 154, 207)",
                    color: "white"
                  }}
                  onClick={() => setQuoteType("home")}
                >
                  <span className="fas fa-check-circle"></span> home
                </div>
              )}
              {quoteType !== "home" && (
                <div
                  style={{
                    border: "1px solid #CCC",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={() => setQuoteType("home")}
                >
                  home
                </div>
              )}
              {quoteType === "business" && (
                <div
                  style={{
                    border: "1px solid rgb(40, 154, 207)",
                    cursor: "pointer",
                    padding: "8px",
                    backgroundColor: "rgb(40, 154, 207)",
                    color: "white"
                  }}
                  onClick={() => setQuoteType("business")}
                >
                  <span className="fas fa-check-circle"></span> business
                </div>
              )}
              {quoteType !== "business" && (
                <div
                  style={{
                    border: "1px solid #CCC",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={() => setQuoteType("business")}
                >
                  business
                </div>
              )}
            </div>

            <p>What would you like to paint?</p>

            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              {quotePaintLocation === "interior" && (
                <div
                  style={{
                    border: "1px solid rgb(40, 154, 207)",
                    cursor: "pointer",
                    padding: "8px",
                    backgroundColor: "rgb(40, 154, 207)",
                    color: "white"
                  }}
                  onClick={() => setQuotePaintLocation("interior")}
                >
                  <span className="fas fa-check-circle"></span> interior
                </div>
              )}
              {quotePaintLocation !== "interior" && (
                <div
                  style={{
                    border: "1px solid #CCC",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={() => setQuotePaintLocation("interior")}
                >
                  interior
                </div>
              )}

              {quotePaintLocation === "exterior" && (
                <div
                  style={{
                    border: "1px solid rgb(40, 154, 207)",
                    cursor: "pointer",
                    padding: "8px",
                    backgroundColor: "rgb(40, 154, 207)",
                    color: "white"
                  }}
                  onClick={() => setQuotePaintLocation("exterior")}
                >
                  <span className="fas fa-check-circle"></span> exterior
                </div>
              )}
              {quotePaintLocation !== "exterior" && (
                <div
                  style={{
                    border: "1px solid #CCC",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={() => setQuotePaintLocation("exterior")}
                >
                  exterior
                </div>
              )}

              {quotePaintLocation === "both" && (
                <div
                  style={{
                    border: "1px solid rgb(40, 154, 207)",
                    cursor: "pointer",
                    padding: "8px",
                    backgroundColor: "rgb(40, 154, 207)",
                    color: "white"
                  }}
                  onClick={() => setQuotePaintLocation("both")}
                >
                  <span className="fas fa-check-circle"></span> both
                </div>
              )}
              {quotePaintLocation !== "both" && (
                <div
                  style={{
                    border: "1px solid #CCC",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={() => setQuotePaintLocation("both")}
                >
                  both
                </div>
              )}
            </div>

            <p style={{ textAlign: "center", marginTop: "40px" }}>
              <button onClick={goToQuoteStepTwo} className="slate-gray-button">
                Next <span className="fas fa-arrow-right"></span>
              </button>
            </p>
          </>
        )}

        {quoteMenu === "secondStep" && (
          <form onSubmit={sendQuoteToBret}>
            <p style={{ textAlign: "center" }}>Your Contact Information:</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "30px"
              }}
            >
              <input
                name="firstName"
                type="text"
                className="uk-input"
                placeholder="First Name"
                required
                onChange={handleQuoteInputs}
              />
              <input
                name="lastName"
                type="text"
                className="uk-input"
                placeholder="Last Name"
                required
                onChange={handleQuoteInputs}
              />
              <input
                name="email"
                type="email"
                className="uk-input"
                placeholder="Email"
                style={{ gridColumnEnd: "span 2" }}
                required
                onChange={handleQuoteInputs}
              />
              <input
                name="phoneNumber"
                type="text"
                className="uk-input"
                placeholder="Phone Number"
                style={{ gridColumnEnd: "span 2" }}
                required
                onChange={handleQuoteInputs}
              />
            </div>

            <p style={{ textAlign: "center" }}>
              Property you want an estimate for:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "20px"
              }}
            >
              <input
                name="address1"
                type="text"
                className="uk-input"
                placeholder="Address 1"
                style={{ gridColumnEnd: "span 2" }}
                required
                onChange={handleQuoteInputs}
              />
              <input
                name="address2"
                type="text"
                className="uk-input"
                placeholder="Address 2"
                style={{ gridColumnEnd: "span 2" }}
                onChange={handleQuoteInputs}
              />
              <input
                name="city"
                type="test"
                className="uk-input"
                placeholder="City"
                style={{ gridColumnEnd: "span 2" }}
                required
                onChange={handleQuoteInputs}
              />
              <select
                name="state"
                className="uk-select"
                defaultValue="select"
                required
                onChange={handleQuoteInputs}
              >
                <option value="MO">Missouri</option>
                <option value="AR">Arkanasas</option>
              </select>
              <input
                name="zipCode"
                type="text"
                className="uk-input"
                placeholder="Zip Code"
                required
                onChange={handleQuoteInputs}
              />
            </div>
            <p style={{ verticalAlign: "middle" }}>
              Add Project details:{" "}
              <button
                type="button"
                onClick={() =>
                  setShowQuoteDetails(showQuoteDetails ? false : true)
                }
                className="fas fa-plus slate-gray-button"
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                  verticalAlign: "middle",
                  padding: "5px"
                }}
              ></button>
            </p>

            {showQuoteDetails && (
              <>
                <textarea
                  name="details"
                  className="uk-textarea"
                  onChange={handleQuoteInputs}
                  style={{ height: "200px" }}
                ></textarea>
              </>
            )}

            <p style={{ textAlign: "center", marginTop: "40px" }}>
              <button
                style={{ marginRight: "20px" }}
                onClick={() => setQuoteMenu("firstStep")}
                className="slate-gray-button"
              >
                <span className="fas fa-arrow-left"></span> Back{" "}
              </button>{" "}
              <button type="submit" className="slate-gray-button">
                Next <span className="fas fa-arrow-right"></span>
              </button>
            </p>
          </form>
        )}

        {quoteMenu === "finished" && (
          <>
            <p style={{ textAlign: "center" }}>{quoteFinishedMessage}</p>
          </>
        )}
      </BlankModal>

      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav
          className="uk-navbar-container"
          uk-navbar
          style={{ position: "relative", zIndex: 980 }}
        >
          <div className="nav-grid">
            <img src={logo} alt="Branson Mo Painters" className="logo" />
            <p
              style={{
                marginTip: "4px",
                fontSize: "24px",
                fontWeight: "700",
                fontStyle: "italic"
              }}
            >
              417-598-8094
            </p>
            <div style={{ margin: "20px 20px 0px 0px" }} className="get-quote">
              <button
                className="blue-button "
                onClick={() => setShowModal(true)}
              >
                Get a quote
              </button>
            </div>
          </div>
        </nav>
      </div>

      <h1 className="painting-contractors">Painting Contractors</h1>
      <div className="hero-banner-container">
        <img src={HomeBG} alt="" />
      </div>

      <div className="services-row">
        <div>
          <h2
           style={{
            marginTop: "30px",
            fontSize: "24px",
            fontWeight: "700",
            fontStyle: "italic"
          }}
          
          >Exterior</h2>
          <img src={exterior} alt="Exterior" />
        </div>

        <div>
          <h2
             style={{
                marginTop: "30px",
                fontSize: "24px",
                fontWeight: "700",
                fontStyle: "italic"
              }}
          >Interior</h2>
          <img src={interior} alt="Interior" />
        </div>
      </div>

      <div className="areas-we-serve">
        
        <h1

            style={{
                marginTop: "70px",
                fontSize: "24px",
                fontWeight: "700",
                fontStyle: "italic",
                textAlign: "center"
            }}
        
        >Areas We Serve in Missouri and Arkansas</h1>

        <p

        style={{
            marginTop: "40px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "70px",
        }}
                
        
        >Branson | Hollister | Kirbyville | Forsyth | Harrison</p>
      </div>

      <div className="fourth-row">
        <p
            style={{
                color: 'white'
            }}
        >
          Our success as a painting company is due to our service, care and
          attention to detail we put in every job. We believe communication is
          the key to both happy customers and professional painting crews.
          Throughout the house painting process, it is important to us to set
          clear expectations for our customers and ensure they are being met
          with integrity and honesty.
        </p>
      </div>
    </div>
  );
};

export default App;
