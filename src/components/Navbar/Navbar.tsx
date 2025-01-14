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
  return (
    <nav className='flex justify-between items-center px-4 py-3 sm:px-12 sm:py-6'>
      <div>
        <img className='w-[100px]' src={Logo} alt='logo' />
      </div>
      <div>
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

      <div>
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
    </nav>
  )
}
