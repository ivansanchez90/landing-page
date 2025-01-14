import ImagenFondo from '../../assets/hacker2.png'
export const Hero = () => {
  return (
    <section className='mt-36'>
      <div>
        {/* texto */}
        <div>texto</div>
        {/* imagen */}
        <div>
          <img
            className='object-cover max-h-screen absolute bottom-0 lg:top-0  w-full'
            src={ImagenFondo}
            alt='imagen fondo'
          />
        </div>
      </div>
    </section>
  )
}
