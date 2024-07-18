function App() {
    return (
        <div>
            <Tweet name="Jane" 
                   username="jjaannee" 
                   date={new Date().toDateString()} 
                   message="My name is Jane"/>

            <Tweet name="King" 
                   username="kingnqueen" 
                   date={new Date().toDateString()} 
                   message="Best King in the world"/>

            <Tweet name="Bella" 
                   username="bestie" 
                   date={new Date().toDateString()} 
                   message="My first tweet"/>
        </div>
    );
}