const Max_Length = 6;

function Person({name, age, hobbies}) {
    const voteText = age >= 18 ? "Go Vote!" : "No Vote!";
    const hobbiesList = hobbies.map(h => <li>{h}</li>);
    return (
        <div>
            <ul>
                <li>Name: {name.slice(0, Max_Length)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies: {hobbiesList}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    )
}