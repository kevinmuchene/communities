import { Link } from "react-router-dom"

export default function Community(props) {
    const { community } = props

    return (
        <div className="Community" style={{ border: 'solid 1px black', padding: '20px', width: '300px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3><Link to={"/communities/" + community.id + '/properties'} state={community}>{community.name}</Link></h3>
            <p>{community.county}</p>

        </div>
    )

}
