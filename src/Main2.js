function Main2(props) {
    return (
        <main class="principal">
            <figure class="img-movie">
                <img src={props.img} alt="" />
            </figure>
            <section class="descriptions-movies">
                <h1>
                    {props.titulo}
                </h1>
                <p>
                    {props.descripcion}
                </p>
                <div>
                    <button>
                        <figure>
                            <img src="iconos/icons8-shopping-trolley-16.png" alt="" />
                        </figure>
                        PRE ORDER
                    </button>
                    <button>
                        <figure>
                            <img src="iconos/icons8-dots-loading-16.png" alt="" />
                        </figure>
                        READ MORE
                    </button>
                </div>
            </section>
            <div class="calificacion">
                <h1>Calificacion</h1>
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
        </main>
    );
}
export default Main2;