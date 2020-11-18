import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <div>
            <h1>Secret Santa Generator</h1>
            <p>This is a simple app that will allow you to email a group of people who their randomized secret santa is without anyone knowing who has who with just 3 easy steps</p>
            <p>Step 1 is to enter in the name and email of everyone participating</p>
            <p>Step 2 is to confirm everyone added to the list</p>
            <p>Step 3 is to submit the list and our system will randomize and email each individual with who they got for their secret santa</p>
            <Link to="/service">Get Started Here</Link>
        </div>
    )
}

export default Homepage;