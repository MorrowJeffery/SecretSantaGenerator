import {useState} from 'react';

function Service() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [participants, setParticipants] = useState([]);

    function handleSubmit() {
        
    }
    
    return (
        <div>
            <h1>Secret Santa Generator</h1>
            <p>Insert participants below:</p>
            <input 
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={e => setName(e.target.value)}/>
            <label for="name">Name</label>

            <input 
            type="text"
            id="email"
            name="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}/>
            <label for="email">Email</label>

            <button type="submit" onClick={() => handleSubmit}>Add Participant</button>
        </div>
    )
}

export default Service;