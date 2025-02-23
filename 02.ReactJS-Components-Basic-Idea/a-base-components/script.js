const rootDomElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootDomElement);

// Functional Component is function that returns React Element!!!
function Header(props) {
    const headerReactElement = React.createElement('h1', null, props.title);
    const subheaderReactElement = React.createElement('h2', { className: 'sub-header' }, 'Components are awesome!');
    const divReactElement = React.createElement('div', null, headerReactElement, subheaderReactElement);
    // const reactFragment = React.createElement(React.Fragment, {}, headerReactElement, subheaderReactElement)

    return divReactElement;
}

function Body() {
    return React.createElement(
        'main',
        null,
        React.createElement('p', null, 'Lorem Ipsum Dolor...'),
    )
}

function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header, {title: 'Hello World!!!', subTitle: 'React is Awesome!'}),
        React.createElement(Body),
    );
}

rootReactElement.render(React.createElement(App));
