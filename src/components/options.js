import React from 'react';
import Option from './single-option.js';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
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


export default Options;