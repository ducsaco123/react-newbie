//Component = html + css + js
//JSX => Javascript XML: 1 parent
//Fragment
import './style.css';

const MyComponent = () => {
    // const test = 'Sacogaming'; //String
    // const test = 123; //Number
    // const test = true; //Boolean
    // const test = undefined; //Undefined
    // const test = null; //Null
    // const test = [1, 2, 3]; //Array
    const test = {
        name: 'Sacogaming',
        age: 20
    }
    return (
        <>
            <div>
                <p>Hello {JSON.stringify(test)}</p>
            </div>
            <div>
                {console.log('Saco')}
            </div>
            <div className="child">
                <p>Child</p>
            </div>
        </>
    )
}

export default MyComponent;