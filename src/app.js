console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Putting your life into the hands of a computer',
    options: ['One ', 'Two ']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {
          app.subtitle &&
          <p>{app.subtitle}</p>
        }
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
    </div>
);

const user = {
  name: 'Tom',
  age: 22,
  location: 'Sydney'
};

const getLocation = (location) => {
  if (location) {
    console.log(location);
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {
      (user.age && user.age >= 18) &&
      <p>Age: {user.age}</p>
    }
    {
      getLocation(user.location)
    }
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
