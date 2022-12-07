import React, {useRef} from 'react'

const RefComponent = () => {
    const inputRef = useRef()

    const checkRef = () => {
        alert(`Your input has the string: ${inputRef.current.value}`)
        inputRef.current.value = ""
        inputRef.current.focus()
    }

    return (
        <div className='card'>
        <h2>useRef</h2>
        <input type="text" ref={inputRef} />
        <button onClick={checkRef}>What's My Ref?</button>
        </div>
    )
}

export default RefComponent