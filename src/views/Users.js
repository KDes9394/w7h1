import React, { Component } from 'react'
import UserInfo from '../components/RacerDetail';

export default class Users extends Component {
    constructor(props){
        super(props);
        console.log('User component constructed')
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        console.log('User component mounted')
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data => this.setSteate({
            users: data.id[19].first_name,
            users: data.id[19].last_name
        }))
    }
    render() {
        console.log('User name renadered')
        console.log(this.state)
        return (
            <div>
                adslfhaohfislfhkashkvnds
                {this.state.users.map((u,i) => <UserInfo key={i} user = {u}  />)}
            </div>
        )
    }
}
