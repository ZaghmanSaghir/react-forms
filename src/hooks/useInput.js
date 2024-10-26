import { useState } from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue)

    function handleInputChange(event) {
        setEnteredValue(event.target.value)
        setDidEdit(false)
    }

    // when user types values into input field then input get focus
    // when user does not type then it loses focus and blur
    function handleInputBlur() {
        setDidEdit(true)
    }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}

