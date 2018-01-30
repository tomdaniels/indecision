// BUILD IT YOURSELF CHALLENGE

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const VisibilityApp = (
        <div>
            <h1>Visibility Challenge</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {
                visibility &&
                    <div>
                        <p>this is data you can now see :)</p>
                    </div>
            }
        </div>
    );
    ReactDOM.render(VisibilityApp, document.getElementById("app"));
};

render();