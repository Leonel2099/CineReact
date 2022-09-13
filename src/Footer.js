// import React from "react";
// class Foorter extends React.Component {
//     render() {
//         return (
//             <footer>
//                 <div>
//                     <figure>
//                         <img src="iconos/61292222.png" alt="" />
//                     </figure>
//                     <ul>
//                         <li>
//                             <a href="https://www.facebook.com" target="">
//                                 <img src="iconos/icons8-facebook-rodeado-de-círculo-120.png" alt="" />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="https://www.instagram.com/" target="">
//                                 <img src="iconos/icons8-instagram-120.png" alt="" />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="https://twitter.com/" target="">
//                                 <img src="iconos/icons8-twitter-circled-120.png" alt="" />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="https://www.linkedin.com/" target="">
//                                 <img src="iconos/linkedin.png" alt="" />
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//                 <p>
//                     © 2022 Star Cinema Peliculas y series Online, Todos los derechos reservados Grupo11.
//                 </p>
//             </footer>
//         )
//     }
// }

function Foorter (props){
    return(
        <footer>
                <div>
                    <figure>
                        <img src="iconos/61292222.png" alt="" />
                    </figure>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com" target="_blank">
                                <img src="iconos/icons8-facebook-rodeado-de-círculo-120.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <img src="iconos/icons8-instagram-120.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank">
                                <img src="iconos/icons8-twitter-circled-120.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <img src="iconos/linkedin.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <p>
                    © 2022 Star Cinema Peliculas y series Online, Todos los derechos reservados Grupo11.
                </p>
            </footer>
    );
}
export default Foorter;