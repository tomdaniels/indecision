// Build it yourself take two

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Challenge</h1>
                <button onClick={this.handleToggleVisibility}>
                    {
                        this.state.visibility ? 'Hide details' : 'Show details'
                    }
                </button>
                {
                    this.state.visibility &&
                        <div>
                            <p>This is some info to toggle</p>
                        </div>
                }
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// BUILD IT YOURSELF CHALLENGE
//
// let visibility = false;
//
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };
//
// const render = () => {
//     const VisibilityApp = (
//         <div>
//             <h1>Visibility Challenge</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {
//                 visibility &&
//                     <div>
//                         <p>this is data you can now see :)</p>
//                     </div>
//             }
//         </div>
//     );
//     ReactDOM.render(VisibilityApp, document.getElementById("app"));
// };
//
// render();