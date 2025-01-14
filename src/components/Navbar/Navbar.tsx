import { useState } from 'react'
import Logo from '../../assets/logo.png'

interface navbarLinksProps {
  id: number
  title: string
  link: string
}

interface navbarRedesProps {
  id: number
  title: string
  link: string
  icon: React.ReactNode
}

const navbarLinks: navbarLinksProps[] = [
  {
    id: 1,
    title: 'inicio',
    link: '/',
  },
  {
    id: 2,
    title: 'nosotros',
    link: '#',
  },
  {
    id: 3,
    title: 'contacto',
    link: '#',
  },
  {
    id: 4,
    title: 'soporte',
    link: '#',
  },
]

const navbarRedes: navbarRedesProps[] = [
  {
    id: 1,
    title: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: (
      <i className='bi bi-instagram text-lg text-white hover:text-sky-200 sm:text-2xl transition-all duration-300'></i>
    ),
  },
  {
    id: 2,
    title: 'GitHub',
    link: 'https://github.com/',
    icon: (
      <i className='bi bi-github text-lg text-white hover:text-sky-200 sm:text-2xl transition-all duration-300'></i>
    ),
  },
]
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className='fixed top-0 left-0 bg-blue-300 w-full bg-opacity-30 backdrop-blur-md z-50'>
      <div className='flex justify-between items-center px-4 py-3 sm:px-12 sm:py-6'>
        <div>
          <img className='w-[80px]' src={Logo} alt='logo' />
        </div>
        {/* Menú Hamburguesa */}

        <button onClick={toggleMenu} className='text-white md:hidden'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
        {/*  */}
        <div className='hidden md:block'>
          <ul className='flex space-x-4 sm:space-x-8'>
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  className='text-white text-sm sm:text-lg hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300'
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden md:block'>
          <ul className='flex space-x-4'>
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block transition-transform duration-300 transform hover:scale-125'
                  href={link.link}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Movil */}
      <div
        className={`md:hidden absolute w-full bg-blue-300 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className='flex flex-col px-4 py-2'>
          {navbarLinks.map((link) => (
            <li className='py-2 text-center' key={link.id}>
              <a
                className='text-white hover:text-sky-200'
                href={link.link}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className='flex space-x-4 px-4 py-2 border-t justify-center'>
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block'
                href={link.link}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
