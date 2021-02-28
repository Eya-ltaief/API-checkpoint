import React from 'react'
//importing the usecard component
import UserCard from "../UserCard/UserCard";
//importing the css
import './ListCard.css'
const ListCard = ({users}) => {
    return (
        <div >
            {/*creating user's list */}
            <h4>List of users</h4>
            <div className="list-card" style={{display:"flex", flexWrap:"wrap"}}>
            {users.map(user => (
                <UserCard user={user} />
            ))}
            </div>
        </div>
    )
}

export default ListCard
