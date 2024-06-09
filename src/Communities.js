import { useEffect, useState } from 'react'
import Community from './Community'
import axios from 'axios'

export default function Communities(props) {
    const [communities, setCommunities] = useState([])
    useEffect(() => {
        // fetching communities from the server
        axios.get('https://6665cad5d122c2868e41c3e4.mockapi.io/api/v1/communities/')
            .then(response => setCommunities(response.data))

    }, [])
    return <div>
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Communities</h1>
        <div style={{ display: 'flex', gap: '50px', maxWidth: '768px', margin: '0 auto', flexWrap: 'wrap' }}>
            {communities.map((community) => {
                return <Community key={community.id} community={community} />
            })}
        </div>
    </div>
}