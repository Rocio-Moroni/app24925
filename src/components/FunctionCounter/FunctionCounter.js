const FunctionCounter = () => {

    var count = 0 //ESTO NO FUNCIONA

    const decrement = () => {
        count = count - 1
    }

    const increment = () => {
        count = count  + 1
    }
    
    return(
        <>
            <h3>Function Counter</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default FunctionCounter