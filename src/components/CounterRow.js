import React from 'react';

const CounterRow = ({key,id}) => {
    const [count, setCount] = React.useState(0);
    // let {key , id } = props
    const handleClick = () => {
        setCount(count + 1);
    }
    if (id === 4) {
        // return <div className='row'>This row is disable</div>
        return null
    } else {
        return (
            <div className="row">
                <button id={`countButton${id}`} className="green-button" onClick={handleClick}>
                    Button {id}
                </button>
                <div id={`counter${id}`} className="counter">
                    {count === 10 ? (<del>{count}</del>) : count}
                </div>
            </div>
        );
    }



}

export default CounterRow;