import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6))


  function handleSubmit(e) {
    // by doing this we prevent the default behaviour of form after submission which is reloading the page
    // and prevents the sending http request to server
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      // just return is used to exit the function early without executing any further code in that function
      return
    }
    console.log(emailValue, passwordValue)
  }






  // below event object automatically passed by react
  // function handleEmailChange(event) {
  //   // target of event is the input field below in jsx.
  //   setEnteredEmail(event.target.value)

  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value)
  // }


  return (
    // defualt behaviour forms is that it will referesh/reload the browser page when we submit the form
    // onSubmit will create the object event when submit event done after submission the form
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email'}
        />
        <Input label="Password" id="password" type="password" name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        {/* Buttons in html generate http request by default and sent to server when they clicked */}
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
