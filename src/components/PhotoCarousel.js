import React from 'react';

const Photo = props => {

    return (
        <section>
            <div className="carousel">
                <ul className="panes">
                    <li>
                        <img src="" alt="img 1"/>
                    </li>
                    <li>
                        <img src="" alt="img 2"/>
                    </li>
                    <li>
                        <img src="" alt="img 3"/>
                    </li>
                    <li>
                        <img src="" alt="img 4"/>
                    </li>
                    <li>
                        <input type="file" accept="image/*"/>
                    </li>
                </ul>
            </div>
        </section>
    );
};


export default Photo;