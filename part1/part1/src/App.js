import './App.css';

const Mensaje = (props) => {
    return <h1 style={{color: props.color}}>
            {props.msg}
        </h1>
}

function App() {

    return ( 
        <div className = "App" > 
            <Mensaje color='green' msg = 'Pero bueno mi compadre'/>
        </div>
    );
}

export default App;