import { Outlet } from 'react-router-dom'
import {Toaster} from 'sonner'
import Logo from '../components/logo'

export default function AuthLayout() {
  return (
    <>   
         <div className='bg-gray-800 min-h-screen'> 
            <div className='max-w-lg mx-auto pt-10 px-5'>
                <Logo/>
                <div className='py-10'>
                    <Outlet/> 
                </div>
            </div>
         </div>

    
    
      <Toaster position='top-right'/>
     </>
  )
}
