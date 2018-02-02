import React from 'react';
import AddOption from './add-option';
import Options from './options';
import Header from './header';
import Action from './action';

class IndecisionApp extends React.Component {
    state = {
        options: []
    };

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    };

    removeOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'You need to type out your option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    removeOption={this.removeOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;