console.log('app.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'This is my app qwdZDFVDS',
    options: ["bababa", "boobooboo"]
};

//JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            {app.options[0] ? <li>{app.options[0]}</li> : null}
            {app.options[1] ? <li>{app.options[1]}</li> : null}
        </ol>
    </div>
);

const user = {
    name: {
        first: 'Franklin',
        second: 'Tomato'
    },
    age: 157,
    // location: 'Wyoming'
};

function getLocation(location) {
    return location ? <p>Location: {location}</p> : false;
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name.first : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);