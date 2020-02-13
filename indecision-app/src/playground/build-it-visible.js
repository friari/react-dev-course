class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return prevState.visibility = !prevState.visibility;
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Hey. These are some details you can see now!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     details: 'Hey. These are some details you can see now!',
//     show: false
// }

// const appRoot = document.getElementById('app');

// const onToggleVisibility = () => {
//     app.show = !app.show;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggleVisibility}>{app.show ? 'Hide details' : 'Show details'}</button>
//             {app.show && <p>{app.details}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();