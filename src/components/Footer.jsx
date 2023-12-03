import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-container'>
          <ul className='md:flex md:justify-center md:items-center md:flex-col md:gap-5 hidden'>
            {socialLinks.map(item => (
              <li key={item.name} className='group hover:animate-spin'>
                <Link
                  to={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 text-2xl group-hover:animate-pulse'
                >
                  {' '}
                  <img
                    width={item.name === 'LinkedIn' ? '35px' : '25px'}
                    height={item.name === 'LinkedIn' ? '35px' : '25px'}
                    src={item.iconUrl}
                    alt='threads'
                    // className='w-1/2 h-1/2 object-contain'
                    className=' object-contain'
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
