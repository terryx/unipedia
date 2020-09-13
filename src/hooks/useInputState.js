import { useState } from 'react'

function useInputState(initialValue) {
    const [value, setValue] = useState(initialValue)
    const handleChange = ev => {
        if (!ev) {
            setValue('')
        } else {
            setValue(ev.target.value)
        }
    }
    return [value, handleChange]
}

export default useInputState
