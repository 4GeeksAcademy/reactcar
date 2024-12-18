import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">The Legend of Zelda</h1>
                <p className="col-md-8 fs-4">
                The Legend of Zelda (ゼルダの伝説でんせつ Zeruda no Densetsu?) es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka,1​ y desarrollada por Nintendo, empresa que también se encarga de su distribución internacional. Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;