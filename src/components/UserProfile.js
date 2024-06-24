import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [profile, setProfile] = useState({ preferences: [], mentalHealthNeeds: '' });

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/users/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setProfile(response.data);
        };
        fetchProfile();
    }, []);

    const handleUpdate = async () => {
        const token = localStorage.getItem('token');
        await axios.put('/api/users/profile', profile, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        // Show success message or update UI
    };

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <label>Preferences:</label>
                <input type="text" value={profile.preferences.join(', ')} onChange={(e) => setProfile({ ...profile, preferences: e.target.value.split(', ') })} />
            </div>
            <div>
                <label>Mental Health Needs:</label>
                <textarea value={profile.mentalHealthNeeds} onChange={(e) => setProfile({ ...profile, mentalHealthNeeds: e.target.value })}></textarea>
            </div>
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
};

export default UserProfile;
