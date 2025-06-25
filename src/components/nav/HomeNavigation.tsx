
import {Link} from 'react-router-dom'

export default function HomeNavigation() {
  return (
    <>
        <Link
        className='text-white p-2 uppercase font-black text-xs cursor-pointer '
        to='/auth/login'
        >Iniciar Sesion</Link>

        <Link
        className='bg-green-500 text-gray-800 p-2 uppercase font-black text-xs cursor-pointer rounded-lg'
        to='/auth/register'
        >Registrarme</Link>  
    
    </>
  )
}
