import React ,{ useState ,useEffect } from 'react'
import NavBar from '../components/navbar'
import '../components/css/admin.css'

import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../components/Autenticacion";
import {Link} from 'react-router-dom'

import SolicitudLista from "../components/solicitudLista";
import S_ayudalista from "../components/s_ayudalista";
import S_adoplista from "../components/S_adoplista";

export default function Administracion() {
  const { user } = UserAuth();

  const [contenidoSeleccionado, setContenidoSeleccionado] = useState('todas');

  // Función para cambiar el contenido seleccionado
  const cambiarContenido = (contenido) => {
    setContenidoSeleccionado(contenido);
  };


  //funcion para obtener los datos del usuario logueado
  const [usuario, setUsuario] = useState(null);
   useEffect(() => {
    const obtenerUsuario = async () => {
      if (user && user.uid) {
        const usuarioRef = doc(db, "Usuarios", user.uid);
        const snapshot = await getDoc(usuarioRef);
        if (snapshot.exists()) {
          setUsuario(snapshot.data());
        }
      }
    };
    obtenerUsuario();
  }, [user]);








    // Renderizar el componente seleccionado en base al estado
    const renderizarContenido = () => {
      switch (contenidoSeleccionado) {
        case 'todas':
          return <SolicitudLista />, <S_adoplista />, <S_ayudalista />;
        case 'postulacion':
          return <SolicitudLista />; 
        case 'adopcion':
          return <S_adoplista />;
        case 'ayuda':
          return <S_ayudalista />;
        // Agrega más casos según sea necesario
        default:
          return <SolicitudLista />;
      }
    };
  

  return (
    <div className='adminparent'>
        <div className='admindiv1'>
            <NavBar />
        </div>
        <div className='admindiv2'>
            {usuario && usuario.permisos === 1 ? 
            <>
            <div className='adminmenu'>
              <h2>Hola {usuario?.Nombre}</h2>
              <img src={usuario?.imagen} alt="Imagen de Perfil" />
              <button className="adminred" onClick={() => cambiarContenido('todas')}>Todas</button>
              <button className="adminred" onClick={() => cambiarContenido('postulacion')}>S.Postulación</button>
              <button className="adminred" onClick={() => cambiarContenido('adopcion')}>S.Adopción</button>
              <button className="adminred" onClick={() => cambiarContenido('ayuda')}>S.Ayuda</button>
              <button className="admingray"><Link to='/'>Home</Link></button>
            </div>




            <div className='admindashboard'>
                <div className='dashboardtitulo'>
                     <h2>Solicitudes Pendientes...</h2>
                </div>
                <div className='dashboardcontenido'>
                {renderizarContenido()}
                
                </div>
            </div> 

            </>
            : 
            <div>
                <div className='noadmin'>
                    No eres Administrador de Pawtitas... 
                    <Link to='/' className='btn btn-danger'>Volver</Link>
                </div>
            </div>}
            
        </div>

    </div>
  )
}
