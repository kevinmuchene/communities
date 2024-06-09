import axios from "axios"
import { useCallback, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function AddProperty() {
    const { state } = useLocation()
    const [price, setPrice] = useState(0)
    const [type, setType] = useState('')
    const navigate = useNavigate()

    const onSubmit = useCallback((e) => {
        e.preventDefault()
        axios.post('https://6665cad5d122c2868e41c3e4.mockapi.io/api/v1/communities/' + state.id + '/properties', {
            type: type,
            price: price,
            communityId: state.id,
        }).then(() => navigate('/communities/' + state.id + '/properties', { state }))
            .catch((error) => {
                if (error?.response?.status === 429) {
                    console.error('Too many requests, cannot do anything about this')
                } else console.error(error)
            })
    }, [navigate, price, state, type])

    return <form onSubmit={onSubmit} style={{ maxWidth: '760px', margin: '40px auto 0', textAlign: 'center' }}>
        <h3>Add a Property</h3>
        <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }} htmlFor="type">Type</label>
            <input type="text" id="type" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }} htmlFor="price">Price</label>
            <input type="number" id="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: '100%' }} />
        </div>
        <input type="submit" value="Add Property" style={{ border: 'solid 1px orange', color: 'orange', fontWeight: 'bolder', backgroundColor: 'white', padding: '5px' }} />
        <button style={{ backgroundColor: 'transparent', color: 'blue', display: 'block', textAlign: 'center', border: 'none', margin: '0 auto' }} onClick={() => navigate('/communities/' + state.id + '/properties', { state })}>Back</button>
    </form>
}