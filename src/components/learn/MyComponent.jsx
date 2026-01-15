//Component = html + css + js
//JSX => Javascript XML: 1 parent
//Fragment
import './style.css';

const MyComponent = () => {
    return (
        <>
            <div>
                <p>Hello Sacogaming</p>
            </div>
            <div className="child">
                <p>Child</p>
            </div>
        </>
    )
}

export default MyComponent;