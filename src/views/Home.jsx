import Form from '../components/Form';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Home = props => {
    const [allAuthors, setAllAthors] = useState([]);
    const [refeshApi, setRefreshApi] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res => setAllAthors(res.data))
            .catch(err => console.log(err))
    }, [refeshApi])
    const removeAuthor = _id => {
        axios.delete(`http://localhost:8000/api/author/delete/${_id}`)
            .then(() => setRefreshApi(!refeshApi))
            .catch(err => console.log(err))
        
    }
    return (
        <div>
            <h1>Favorite Author</h1>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by:</h3>
            <center>
                <table>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                {
                    allAuthors.length > 0  ? 
                    allAuthors.map((author, i) => {
                        return <tr>
                            <td>{author.name}</td>
                            <td><button onClick={() => navigate(`/author/${author._id}`)}key={i}>Edit</button><span> </span><button onClick={() => removeAuthor(author._id)} key={i}>Delete</button></td>
                        </tr>
                    }) : <tr><td>Add an author</td><td><Link to="/new">Add an author</Link></td></tr>
                }
                </table>
            </center>
            
        </div>
    );
}

export default Home;