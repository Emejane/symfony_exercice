import React from 'react';
import addUser from "./addUser";

//composant pour affichage de liste
class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    //lien avec la bdd
    componentDidMount() {
        fetch('https://127.0.0.1:8000/users/')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                //console.table(data);
                this.setState({users: data})
            })
    }


    handleDelete = id => {
        //console.log(id);
        fetch('https://127.0.0.1:8000/delete/' + id)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                //console.table(data);
                this.setState({users: data})
            })
    }

    openWindow = ()=>{
        if(closeWindow){
            setCloseWindow(false);
        }else{
            setCloseWindow(true);
        }

    }

    render() {
        return <div className="container">

            <button className='btn btn-primary mt-2 mb-2 mx-5'  onClick={openWindow}>Ajouter Utilisateur</button>
            {!closeWindow && <AddUser onClick={openWindow}/>}

            <table className="table">
                <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Adresse</th>
                    <th>Tel</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((user) =>
                    <tr className="text-center" key={user.id}>
                        <td>{user.id}</td>
                        <td><a className='link-info' href={`/possessions/${user.id}`}>{user.nom}</a></td>
                        <td>{user.prenom}</td>
                        <td>{user.email}</td>
                        <td>{user.adresse}</td>
                        <td>{user.tel}</td>
                        <td>{user.age}</td>
                        <td>
                            <button onClick={() => this.handleDelete(user.id)} className="btn btn-danger">Supprimer
                            </button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }

}

export default Users;