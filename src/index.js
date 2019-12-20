import React from "react";
import { render } from "react-dom";

// Relative Imports
import "./styles/style.css";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      currentstep: "FirstPage",
      username: "",
      email: "",
      password: "",
      avatar: "",
      fullname: "",
      country: "",
      about: "",
      cardno: "",
      month: "",
      cardname: ""
    };
  }
  handleNext = () => {
    if (this.state.currentstep === "FirstPage") {
      this.setState({ currentstep: "SecondPage" });
    }
    if (this.state.currentstep === "SecondPage") {
      this.setState({ currentstep: "ThirdPage" });
    }
  };
  handlePrevious = () => {
    if (this.state.currentstep === "SecondPage") {
      this.setState({ currentstep: "FirstPage" });
    }
    if (this.state.currentstep === "ThirdPage") {
      this.setState({ currentstep: "SecondPage" });
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  hanndleAlert = () => {
    const {
      email,
      username,
      password,
      avatar,
      fullname,
      country,
      about,
      cardno,
      month,
      cardname
    } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password} \n 
      avatar: ${avatar} \n 
      fullname: ${fullname} \n
      country: ${country} \n 
      about: ${about} \n 
      cardno: ${cardno} \n
      month: ${month} \n 
      cardname: ${cardname}`);
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("enter other page");
  };

  FirstPage = () => {
    return (
      <>
        <div className=" wrapper">
          <div className="heading">
            <img
              className="addUser"
              src="./user-male-black-shape-with-plus-sign (2).png"
              alt=""
            />
            <h1 className="sign-up">Sign-up to create account</h1>
          </div>

          <section className="header">
            <div className="stages">
              <div className="number">1</div>
              <h3 className="acc-info">
                Account <br /> Information
              </h3>
            </div>
            <div className="stages">
              <div className="number Personal-info">2</div>
              <h3 className="acc-info Personal-info">
                Personal <br /> Information
              </h3>
            </div>
            <div className="stages">
              <div className="number Payment-details">3</div>
              <h3 className="acc-info Payment-details">
                Payment <br /> Details
              </h3>
            </div>
          </section>
          <form>
            <label>
              Username:
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
            <label className="email">
              Email:
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </label>

            <label className="password">
              Password:
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </label>
            <label className="avatar">
              Select avatar:
              <input
                type="file"
                name="avatar"
                onChange={this.handleChange}
                value={this.state.avatar}
              />
            </label>
          </form>
          <div className="footer">
            <h3 className="footer-step">Step 1 of 3</h3>
            <span className="cancel">Cancel</span>
            <button className="Next-step" onClick={this.handleNext}>
              NEXT STEP
            </button>
          </div>
        </div>
      </>
    );
  };
  SecondPage = () => {
    return (
      <>
        <div className=" wrapper">
          <div className="heading">
            <img
              className="addUser"
              src="./user-male-black-shape-with-plus-sign (2).png"
              alt=""
            />
            <h1 className="sign-up">Sign-up to create account</h1>
          </div>

          <section className="header">
            <div className="stages">
              <div className="number">1</div>
              <h3 className="acc-info">
                Account <br /> Information
              </h3>
            </div>
            <div className="stages">
              <div className="number Personal-info">2</div>
              <h3 className="acc-info Personal-info">
                Personal <br /> Information
              </h3>
            </div>
            <div className="stages">
              <div className="number Payment-details">3</div>
              <h3 className="acc-info Payment-details">
                Payment <br /> Details
              </h3>
            </div>
          </section>
          <form>
            <label>
              Full name:
              <input
                type="text"
                name="fullname"
                onChange={this.handleChange}
                value={this.state.fullname}
              />
            </label>
            <label className="country">
              Country:
              <select onChange={this.handleChange}>
                <option value="india">Select Country</option>
                <option value="india">india</option>
                <option value="china">china</option>
                <option value="srilanka">srilanka</option>
              </select>
            </label>

            <label className="gender">
              Gender:
              <button className="Male">
                <img
                  className="standing-man"
                  src="./standing-up-man-.png"
                  alt=""
                />
                <span>Male</span>
              </button>
              <button className="Female">
                <img className="standing-woman" src="./girl.png" alt="" />
                <span>Female</span>
              </button>
            </label>
            <label>
              <p className="label-name">About you</p>

              <textarea
                rows="4"
                cols="50"
                name="about"
                onChange={this.handleChange}
                value={this.state.about}
              />
            </label>
          </form>
          <div className="footer">
            <h3 className="footer-step">Step 2 of 3</h3>
            <button onClick={this.handlePrevious} className="cancel">
              Previous
            </button>
            or
            <button onClick={this.handleNext} className="Next-step">
              Next step
            </button>
          </div>
        </div>
      </>
    );
  };
  ThirdPage = () => {
    return (
      <>
        <div className=" wrapper">
          <div className="heading">
            <img
              className="addUser"
              src="./user-male-black-shape-with-plus-sign (2).png"
              alt=""
            />
            <h1 className="sign-up">Sign-up to create account</h1>
          </div>

          <section className="header">
            <div className="stages">
              <div className="number">1</div>
              <h3 className="acc-info">
                Account <br /> Information
              </h3>
            </div>
            <div className="stages">
              <div className="number Personal-info">2</div>
              <h3 className="acc-info Personal-info">
                Personal <br /> Information
              </h3>
            </div>
            <div className="stages">
              <div className="number Payment-details">3</div>
              <h3 className="acc-info Payment-details">
                Payment <br /> Details
              </h3>
            </div>
          </section>
          <form>
            <label className="paymenttype">
              Payment type:
              <img className="visa" src="./visa.png" alt="" />{" "}
              <img className="master-card" src="./mastercard.png" alt="" />{" "}
              <img
                className="paypal"
                src="./paypal-logo-in-rectangular-black-card.png"
                alt=""
              />
            </label>
            <label>
              <p className="label-name">Credit Card #</p>

              <input
                type="number"
                name="cardno"
                onChange={this.handleChange}
                value={this.state.cardno}
              />
            </label>
            <label>
              <p className="label-name">Experation date</p>

              <input
                type="month"
                name="month"
                onChange={this.handleChange}
                value={this.state.month}
              />
            </label>
            <label>
              <p className="label-name">Name on card</p>

              <input
                type="text"
                name="cardname"
                onChange={this.handleChange}
                value={this.state.cardname}
              />
            </label>
          </form>
          <div className="footer">
            <button onClick={this.handlePrevious} className="cancel">
              {" "}
              Previous
            </button>{" "}
            or
            <input
              onClick={this.hanndleAlert}
              className="Next-step"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </>
    );
  };
  handleView = () => {
    switch (this.state.currentstep) {
      case "FirstPage":
        return this.FirstPage();
        break;
      case "SecondPage":
        return this.SecondPage();
        break;
      case "ThirdPage":
        return this.ThirdPage();
        break;
      default:
        return this.FirstPage;
    }
  };
  render() {
    return <div className="wrapper">{this.handleView()}</div>;
  }
}

render(<Index />, document.getElementById("root"));
