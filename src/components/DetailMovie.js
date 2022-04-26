import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from '../selectors/getMovieByld';


export const MovieScreen = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    const movie =  getMovieById(id);
    console.log(movie);

    const { name, description } = movie;

    console.log(name)

    const handleReturn = () =>{
       navigate(-1);
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={`../assets/movies/${id}.jpg`}
                        alt=""
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>

                <div className="col-8 animate__animated animate__fadeIn">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b> Name: </b>{name} </li>
                        <li className="list-group-item"> <b> Description: </b>{description} </li>
                    </ul>

                    <button
                        className="btn btn-outline-info"
                        onClick={() => handleReturn()}
                    >
                        Return
                    </button>

                </div>

            </div>
        </div>
    )
}