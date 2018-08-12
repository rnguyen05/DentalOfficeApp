import React, { Component } from "react";
import ReactModalLogin from "react-modal-login";
import { facebookConfig, googleConfig } from "./social-config";
import "./modal.css";
export default class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loggedIn: null,
      loading: false,
      error: null,
      initialTab: null,
      recoverPasswordSuccess: null
    };
  }

  onLogin() {
    console.log("__onLogin__");
    console.log("email: " + document.querySelector("#email").value);
    console.log("password: " + document.querySelector("#password").value);

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!email || !password) {
      this.setState({
        error: true
      });
    } else {
      this.onLoginSuccess("form");
    }
  }

  onRegister() {
    console.log("__onRegister__");
    console.log("login: " + document.querySelector("#login").value);
    console.log("email: " + document.querySelector("#email").value);
    console.log("password: " + document.querySelector("#password").value);

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!firstname || !lastname || !email || !password) {
      this.setState({
        error: true
      });
    } else {
      this.onLoginSuccess("form");
    }
  }

  onRecoverPassword() {
    console.log("__onFotgottenPassword__");
    console.log("email: " + document.querySelector("#email").value);

    const email = document.querySelector("#email").value;

    if (!email) {
      this.setState({
        error: true,
        recoverPasswordSuccess: false
      });
    } else {
      this.setState({
        error: null,
        recoverPasswordSuccess: true
      });
    }
  }

  openModal(initialTab) {
    this.setState(
      {
        initialTab: initialTab
      },
      () => {
        this.setState({
          showModal: true
        });
      }
    );
  }

  onLoginSuccess(method, response) {
    this.closeModal();
    this.setState({
      loggedIn: method,
      loading: false
    });
  }

  onLoginFail(method, response) {
    this.setState({
      loading: false,
      error: response
    });
  }

  startLoading() {
    this.setState({
      loading: true
    });
  }

  finishLoading() {
    this.setState({
      loading: false
    });
  }

  afterTabsChange() {
    this.setState({
      error: null,
      recoverPasswordSuccess: false
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  render() {
    const loggedIn = this.state.loggedIn ? (
      <div>
        <p>You are signed in with: {this.state.loggedIn}</p>
      </div>
    ) : (
      <div>
        <p>You are signed out</p>
      </div>
    );

    const isLoading = this.state.loading;

    return (
      <div>
        <button className="RML-btn" onClick={() => this.openModal("login")}>
          Login
        </button>

        <button className="RML-btn" onClick={() => this.openModal("register")}>
          Register
        </button>
        <div className="login-modal">
          <ReactModalLogin
            visible={this.state.showModal}
            onCloseModal={this.closeModal.bind(this)}
            loading={isLoading}
            initialTab={this.state.initialTab}
            error={this.state.error}
            tabs={{
              afterChange: this.afterTabsChange.bind(this)
            }}
            startLoading={this.startLoading.bind(this)}
            finishLoading={this.finishLoading.bind(this)}
            form={{
              onLogin: this.onLogin.bind(this),
              onRegister: this.onRegister.bind(this),
              onRecoverPassword: this.onRecoverPassword.bind(this),

              recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
                ? {
                    label: "New password has been sent to your mailbox!"
                  }
                : null,
              recoverPasswordAnchor: {
                label: "Forgot your password?"
              },
              loginBtn: {
                label: "Sign in"
              },
              registerBtn: {
                label: "Sign up"
              },
              recoverPasswordBtn: {
                label: "Send new password"
              },
              loginInputs: [
                {
                  containerClass: "RML-form-group",
                  label: "Email",
                  type: "email",
                  inputClass: "RML-form-control",
                  id: "email",
                  name: "email",
                  placeholder: "Email"
                },
                {
                  containerClass: "RML-form-group",
                  label: "Password",
                  type: "password",
                  inputClass: "RML-form-control",
                  id: "password",
                  name: "password",
                  placeholder: "Password"
                }
              ],
              registerInputs: [
                {
                  containerClass: "RML-form-group",
                  label: "First Name",
                  type: "text",
                  inputClass: "RML-form-control",
                  id: "firstname",
                  name: "firstname",
                  placeholder: "First Name"
                },
                {
                  containerClass: "RML-form-group",
                  label: "Last Name",
                  type: "text",
                  inputClass: "RML-form-control",
                  id: "lastname",
                  name: "lastname",
                  placeholder: "First Name"
                },
                {
                  containerClass: "RML-form-group",
                  label: "Email",
                  type: "email",
                  inputClass: "RML-form-control",
                  id: "email",
                  name: "email",
                  placeholder: "Email"
                },
                {
                  containerClass: "RML-form-group",
                  label: "Confirm Email",
                  type: "email",
                  inputClass: "RML-form-control",
                  id: "email_con",
                  name: "email_con",
                  placeholder: "Confirm Email"
                },
                {
                  containerClass: "RML-form-group",
                  label: "Password",
                  type: "password",
                  inputClass: "RML-form-control",
                  id: "password",
                  name: "password",
                  placeholder: "Password"
                },
                {
                  containerClass: "RML-form-group",
                  label: "Confirm Password",
                  type: "password",
                  inputClass: "RML-form-control",
                  id: "password_con",
                  name: "password_con",
                  placeholder: "Confirm Password"
                }
              ],
              recoverPasswordInputs: [
                {
                  containerClass: "RML-form-group",
                  label: "Email",
                  type: "email",
                  inputClass: "RML-form-control",
                  id: "email",
                  name: "email",
                  placeholder: "Email"
                }
              ]
            }}
            separator={{
              label: "or"
            }}
            providers={{
              facebook: {
                config: facebookConfig,
                onLoginSuccess: this.onLoginSuccess.bind(this),
                onLoginFail: this.onLoginFail.bind(this),
                inactive: isLoading,
                label: "Continue with Facebook"
              },
              google: {
                config: googleConfig,
                onLoginSuccess: this.onLoginSuccess.bind(this),
                onLoginFail: this.onLoginFail.bind(this),
                inactive: isLoading,
                label: "Continue with Google"
              }
            }}
          />
          {loggedIn}
        </div>
      </div>
    );
  }
}

// import React from "react";
// import ReactModalLogin from "react-modal-login";
// import { facebookConfig, googleConfig } from "./social-config";
// import Form from "react-modal-login";
// import Decode from "jwt-decode";

// //Extract response token
// // const token = localStorage.getItem("jwtAppToken");
// // const { email } = Decode(token);
// // console.log("email from token:", email);

// class PopupModal extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showModal: false,
//       loading: false,
//       error: null
//     };
//   }

//   openModal() {
//     this.setState({
//       showModal: true
//     });
//   }

//   closeModal() {
//     this.setState({
//       showModal: false,
//       error: null
//     });
//   }

//   onLoginSuccess(method, response) {
//     if (method === "google") {
//       console.log("logged successfully with " + method);
//       console.log(response);
//       //Extract Google response token
//       const token = response;
//       const { email } = Decode(response.id_token);
//       console.log("email from token:", email);
//     } else if (method === "facebook") {
//       //Extract Facebook response token
//       console.log(response.authResponse.accessToken);
//     }
//     this.closeModal();
//   }

//   onLoginFail(method, response) {
//     console.log("logging failed with " + method);
//     this.setState({
//       error: response
//     });
//   }

//   startLoading() {
//     this.setState({
//       loading: true
//     });
//   }

//   finishLoading() {
//     this.setState({
//       loading: false
//     });
//   }

//   onTabsChange() {
//     this.setState({
//       error: null
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.openModal()}>
//           Please Login to schedule appointment.
//         </button>

//         <ReactModalLogin
//           visible={this.state.showModal}
//           onCloseModal={this.closeModal.bind(this)}
//           loading={this.state.loading}
//           error={this.state.error}
//           tabs={{
//             onChange: this.onTabsChange.bind(this)
//           }}
//           loginError={{
//             label: "Couldn't sign in, please try again."
//           }}
//           registerError={{
//             label: "Couldn't sign up, please try again."
//           }}
//           startLoading={this.startLoading.bind(this)}
//           finishLoading={this.finishLoading.bind(this)}
//           providers={{
//             facebook: {
//               config: facebookConfig,
//               onLoginSuccess: this.onLoginSuccess.bind(this),
//               onLoginFail: this.onLoginFail.bind(this),
//               label: "Continue with Facebook"
//             },
//             google: {
//               config: googleConfig,
//               onLoginSuccess: this.onLoginSuccess.bind(this),
//               onLoginFail: this.onLoginFail.bind(this),
//               label: "Continue with Google"
//             }
//           }}

//         />
//       </div>
//     );
//   }
// }

// export default PopupModal;
