import Main from './Main';
import peliculas from './peliculas.json';
import Main2 from './Main2';
function Component() {
    let component
    switch(window.location.pathname) {
        case "/":
            component = <Main/>
            break
        case "/inicio":
            component = <Main />
            break
        case "/peliculas":
            component = peliculas.map(peli =>
                <Main2
                    img={peli.img}
                    titulo={peli.titulo}
                    descripcion={peli.descripcion}
                ></Main2>)
            break
    }
    return (
        component
    );
}
export default Component;