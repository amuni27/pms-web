import React from 'react';

function Description({title,description}) {
    return (
        <div className="flex-auto text-left  mt-7 mb-7">
            <div className="text-4xl  text-justify font-bold mb-7">What's special{title}</div>
            <div className="text-xl text-justify">{description}</div>
        </div>
    );
}

export default Description;