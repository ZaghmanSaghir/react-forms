export default function Input({ label, id, error, ...props }) {
    return (
        <div className="control no-margin">
            {/* The onChange prop is a React event handler that listens for changes in the value of the input field. 
          Specifically, it triggers the handleEmailChange function every time the content of the input field changes (e.g., when the user types, deletes, or pastes text). */}
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                {...props}
            />
            <div className="control-error">
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}