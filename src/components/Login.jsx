import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)

  const email = useRef()
  const password = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    // we are using the connection of DOM Element input element and email ref
    // we always need to access current property on ref object
    // current property holds the actual connected input value of email and password
    // and value will be input DOM Element stored in input and password
    // every input DOM element have such value proprty which can access current.value
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    // console.log(enteredEmail, enteredPassword)
    // downside of getting input values using ref is resetting input values is harder
    // actually discourage ref to manipulating the dom
    // email.current.value = ''

    const emailIsValid = enteredEmail.includes('@')
    if (!emailIsValid) {
      setEmailIsInvalid(true)
      return;
    }
    setEmailIsInvalid(false)
    console.log('Sending HTTP request...')
  }


  return (
    // defualt behaviour forms is that it will referesh/reload the browser page when we submit the form
    // onSubmit will create the object event when submit event done after submission the form
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // ref prop can be set on all html elements
            // by setting this ref prop the connection will be established
            // between this DOM Element input element and email ref
            // and we can use this connection in handle submit
            ref={email}
          />
          <div className="control-error">{emailIsInvalid && <p> Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        {/* Buttons in html generate http request by default and sent to server when they clicked */}
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
