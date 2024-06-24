import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpertProfile = () => {
    const [expert, setExpert] = useState({ field: '', experience: 0, clinics: [] });

    useEffect(() => {
        const fetchExpertDetails = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/experts', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setExpert(response.data);
        };
        fetchExpertDetails();
    }, []);

    const handleUpdate = async () => {
        const token = localStorage.getItem('token');
        await axios.post('/api/experts', expert, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        // Show success message or update UI
    };

    return (
        <div>
            <h2>Expert Profile</h2>
            <div>
                <label>Field:</label>
                <input type="text" value={expert.field} onChange={(e) => setExpert({ ...expert, field: e.target.value })} />
            </div>
            <div>
                <label>Experience:</label>
                <input type="number" value={expert.experience} onChange={(e) => setExpert({ ...expert, experience: e.target.value })} />
            </div>
            <div>
                <label>Clinics:</label>
                <input type="text" value={expert.clinics.join(', ')} onChange={(e) => setExpert({ ...expert, clinics: e.target.value.split(', ') })} />
            </div>
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
};

export default ExpertProfile;
