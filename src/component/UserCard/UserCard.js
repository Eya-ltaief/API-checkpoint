import React from 'react'
//importing card and button from the react bootstrap
import {Card,Button} from "react-bootstrap"
//importing the css
import "./UserCard.css"
const UserCard = ({user}) => {
    return (
        // getting the data from the user and passing it to the card
        <div className="user-card" style={{ width: '20rem'}}>
            <Card style={{ display:"flex", backgroundColor:"whitesmoke"}}>
                <div className="card-top">
                    <Card.Img className="user-image" src="user (3).png" style={{width:"100%", height:"85%"}} alt ="user"  />
                </div>
            <Card.Body className="card-body">
                <Card.Title className="name">{user.name}</Card.Title>
                <Card.Text className="name" style={{fontSize:"25px", color: "#483D8B", fontWeight:"500"}}>{user.username}</Card.Text>
                <Card.Text> <h5>Email :</h5>{user.email}</Card.Text>
                <Card.Text> <h5>Phone number :</h5>{user.phone}</Card.Text>
                <Card.Text> <h5>Address :</h5>{user.address.city}</Card.Text>
                <Card.Text> <h5>Website :</h5>{user.phone}</Card.Text>
                <Card.Text> <h5>Company's name :</h5> {user.company.name}</Card.Text>
                <Card.Text> <h5>Company's name :</h5> {user.company.catchPhrase}</Card.Text>
                <Button variant="primary" style={{marginLeft:"18%"}} href={user.website}>Go to the website</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
