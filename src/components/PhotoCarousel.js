import React from 'react';
import user1_1 from '../images/workoutFotos/User1.jpg';
import user1_2 from '../images/workoutFotos/User1_2.jpg';
import beach from '../images/workoutFotos/beach.jpg';


const Photo = props => {

    return (
        <section>
            <div className="carousel">

                { props.images.length === 2 &&
                    <ul className="panes">
                        <li>
                            <img src={user1_1}/>
                        </li>
                        <li>
                            <img src={user1_2}/>
                        </li>
                        <li className="imageUpload" onClick={() => {
                            document.querySelector("input[type=file]").click();
                        }}>
                            <input type="file" accept="image/*"/>
                        </li>
                    </ul>
                }{ props.images.length === 3 &&
                        <ul className="panes">
                            <li>
                                <img src={beach}/>
                            </li>
                            <li className="imageUpload" onClick={() => {
                                document.querySelector("input[type=file]").click();
                            }}>
                                <input type="file" accept="image/*"/>
                            </li>
                        </ul>
                    }
                { props.images.length === 0 &&
                <ul className="panes">
                    <li className="imageUpload" onClick={() => {
                        document.querySelector("input[type=file]").click();
                    }}>
                        <input type="file" accept="image/*"/>
                    </li>
                </ul>
                }
            </div>
        </section>
    );
};


export default Photo;