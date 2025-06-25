export default function ErrorMessage({children} : {children: React.ReactNode}) {
  return (
    <p className=" bg-red-50 text-red-500 text-sm p-3 font-bold uppercase text-center">
      {children}
    </p>
  )
}
