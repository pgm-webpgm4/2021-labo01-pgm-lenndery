import React, {useState, useEffect} from 'react';

const AuthorsSelect = ({ selected }) => {
    const [authors, setAuthors] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('http://localhost:5050/authors');
            const data = await resp.json();
            setAuthors(data);
        }
        fetchData()
    }, []);
    
    return (
        <select name="author" className="form-control">
            {authors ? authors.map(a => {
                if (a.ID == selected) return <option key={a.id} value={a.ID} selected>{a.name}</option>
                else return <option key={a.id} value={a.ID}>{a.name}</option>
            }) : <option value="null">Loading authors</option>}
        </select>
    )
}

export {AuthorsSelect}