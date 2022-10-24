/*
A UTILISER EN CAS D'AFFICHAGE AVEC REACT

// any CSS you import will output into a single css file (app.css in this case)
import '../styles/app.css';
// start the Stimulus application
import '../bootstrap';
import React from 'react';
import * as ReactDOM from "react-dom";

class UserPossession extends React.Component {

    constructor(props) {
        super(props);
        const idUser = document.querySelector('#detail').dataset.idUser;
        this.state = {
            user:{
                id: idUser,
                possessions:[]
            }
        }
        //console.log(idUser)
    }

    componentDidMount(){
        //lien avec la BDD de l'api symfony pour afficher la liste totale des utilisateurs
        //faire un lien dynmanique avec l'id dans l'url ?
        fetch('https://127.0.0.1:8000/possessions/'+this.state.user.id)
            .then((response) => response.json())
            .then((resultat) => {
                console.log(resultat)
                this.setState({user: resultat})
            })
    }

    //affichage du tableau des utilisateurs avec leurs possessions
    render(){
        //console.log(this.state.users)

        return <div>
            <h1 className="text-center">Détail des possessions de l'utilisateur</h1>
            <div className="btn btn-outline-info"><a href="/">retour à la liste</a></div>
            <div>
                <div className="text-center">
                    <p>Nom et prénom : {this.state.user.Nom} {this.state.user.Prenom}</p>
                    <p>Adresse : {this.state.user.adresse}</p>
                    <p>Email : {this.state.user.email}</p>
                    <p>Tel : {this.state.user.tel}</p>
                </div>
            </div>
            <table className="table">
                <thead>
                <tr className="text-center">
                    <th>Id possession</th>
                    <th>Type</th>
                    <th>Valeur</th>
                </tr>
                </thead>
                <tbody>
                {this.state.user.possessions.map((possession)=>
                    <tr className="text-center" key={possession.id}>
                        <td>{possession.id}</td>
                        <td>{possession.Type}</td>
                        <td>{possession.Valeur}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}

ReactDOM.render(<UserPossession/>, document.getElementById('detail'))

*/
