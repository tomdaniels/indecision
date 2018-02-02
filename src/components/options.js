import React from 'react';
import Option from './single-option.js';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.length === 0 &&
                <p>Please add an option to get started!</p>
            }
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        removeOption={props.removeOption}
                    />
                ))
            }
        </div>
    );
};

export default Options;