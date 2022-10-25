import {Formik, Form, Field, ErrorMessage} from "formik";
import React, {useState} from 'react';
import './addUser.css';

const AddUser = (props) => {

    //console.log(props)


    return (
        <div className="background">
            <div className="modale">
                <div className="modal-header mb-3">
                    <h5 className="modal-title">Ajouter un utilisateur</h5>
                    <button onClick={props.show} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <Formik
                    initialValues={{
                        nom:'',
                        prenom:'',
                        email:'',
                        adresse:'',
                        tel:'',
                        birthDate:'',

                    }}
                    validate={(values)=>{
                        let errors = {};
                        if (!values.nom) {
                            errors.nom = 'Ce champ est obligatoire';
                        }

                        if (!values.prenom) {
                            errors.prenom = "Ce champ est obligatoire";
                        }

                        if (!values.email) {
                            errors.email = "Ce champ est obligatoire";
                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                            errors.email = 'Veuillez entrer une adresse e-mail valide';
                        }
                        if (!values.adresse) {
                            errors.adresse = 'Ce champ est obligatoire';
                        }

                        if (!values.tel) {
                            errors.tel = "Ce champ est obligatoire";
                        }

                        if (!values.birthDate) {
                            errors.birthDate = "Ce champ est obligatoire";
                        }

                        return errors;

                    }}
                    onSubmit={(values, {resetForm})=>{
                        console.log(values);
                        resetForm();
                    }}
                >
                    {/*{( {values, errors, touched ,handleSubmit, handleChange}*/}
                    {( {values, errors, touched ,handleSubmit, handleChange})=>(
                        <Form className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="nom" className="form-label">Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nom"
                                    value={values.nom}
                                    onChange={handleChange}

                                />
                                {touched.nom && errors.nom && <div className="error">{errors.nom}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="prenom" className="form-label">Prénom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="prenom"
                                    value={values.prenom}
                                    onChange={handleChange}
                                />
                                {touched.prenom && errors.prenom && <div className="error">{errors.prenom}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {touched.email && errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="adresse" className="form-label">Adresse</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="adresse"
                                    value={values.adresse}
                                    onChange={handleChange}
                                />
                                {touched.adresse && errors.adresse && <div className="error">{errors.adresse}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tel" className="form-label">Telephone</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="tel"
                                    value={values.tel}
                                    onChange={handleChange}
                                />
                                {touched.tel && errors.tel && <div className="error">{errors.tel}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birthDate" className="form-label">Date de
                                    naissance</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="birthDate"
                                    value={values.birthDate}
                                    onChange={handleChange}
                                />
                                {touched.birthDate && errors.birthDate && <div className="error">{errors.birthDate}</div>}
                            </div>

                            <button type="submit" onClick={props.show} className="btn btn-primary">Submit</button>


                        </Form>

                    )}

                </Formik>
        </div>
        </div>
    );
};

export default AddUser;




