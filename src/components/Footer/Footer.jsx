import { Link } from "react-router-dom"
import "./footer.css"
const Footer = ()=>{

    return(
        <footer  className="footerBackground" >
		<div className= "footer">
			
			<div className="footer__categorias--display">
				<h2 className= "footer__titulos--tipografia">Navegación</h2>
				<div className= "footer__contenido--display">
                    <Link className="footerContenido" to='/products/category/All'>PRODUCTOS</Link>
				</div>
			</div>
			
			<div className="footer__categorias--display">
				
				<div className= "footer__contenido--display">
                    <h2>Contacto</h2>
					<p className="footerContenido">acavaelmail@mimail.com.ar</p>
					<p className="footerContenido">Calle Falsa 123</p>
				</div>
			</div>
			
			<div className="footer__categorias--display">
				<h2 className="footer__titulos--tipografia">Medios de pago</h2>
				<div className= "footer__contenido--display">
					<p className="footerContenido">6 y 12 cuotas sin interés</p>
					<p className="footerContenido">Mercado Pago</p>
					<p className="footerContenido">Tarjetas de crédito y débito</p>
					<p className="footerContenido">Transferencia bancaria</p>	
				</div> 
			</div>

			<div className="footer__categorias--display">
				<h2 className="footer__titulos--tipografia">Formas de envío</h2>
				<div className= "footer__contenido--display">
					<p className="footerContenido">Correo Argentino</p>
					<p className="footerContenido">Retiro por showroom</p>	
				</div>
			</div>


		</div>		
	</footer>
    )
}
export default Footer