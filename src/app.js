console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Putting your life into the hands of a computer'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
