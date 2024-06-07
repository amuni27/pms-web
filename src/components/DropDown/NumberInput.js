import React, {useState} from 'react';

const NumberInput = ({bedref, title, values, getValue}) => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        setValue(value - 1);
    };


    return (
        <div className="h-14  mt-8 mb-8 flex items-center">
            <span className="ml-8 mr-8  text-2xl flex items-center justify-center">{title}</span>
            <button
                className="w-8 h-8 mr-4 rounded-full border border-black bg-white flex items-center justify-center"
                onClick={increment}
            >
                +
            </button>
            <input
                ref={bedref}
                type="number"
                className="mr-4 w-10 h-8 text-center border border-black"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button
                className=" w-8 h-8 rounded-full border border-black bg-white flex items-center justify-center"
                onClick={decrement}
            >
                -
            </button>

        </div>
    );
};

export default NumberInput;
