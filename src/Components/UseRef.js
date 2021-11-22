import React, { useState, useRef } from 'react'

const UseRef = () => {
    const [mainState, setMainState] = useState('');
    const inputRef = useRef();
//useRef-connect html elements.
//input маанисин алуу.
//эн коп колдонгон учур form,input,checkbox
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setMainState(inputRef.current.value)
        }}>
            <input type='text'ref={inputRef}/>
            <input type='number' ref={inputRef}/>
            <button type='submit'>sent</button>
            {console.log(mainState)}

        </form>

















        // <>
        // <form>
        //     <input onChange={(e) => {
        //         setState(e.target.value);
        //         console.log(state)
        //     }}/>
        // </form>
        // <div ref={divRef} onClick={(e) => console.log(divRef)}>
        //    Hello 
        // </div>
        // </>
    )
}

export default UseRef
