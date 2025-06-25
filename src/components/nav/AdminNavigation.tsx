import {useQueryClient} from '@tanstack/react-query'

export default function AdminNavigation() {
const queryClient = useQueryClient()

    const logout = () => {
        localStorage.removeItem('token')
        queryClient.invalidateQueries({queryKey: ['user']})
    }

    return (
        <button
            className=" bg-green-500 p-2 text-gray-800 uppercase font-black text-xs rounded-lg cursor-pointer"
            onClick={logout}
        >
            Cerrar Sesión
        </button>
    )
}
