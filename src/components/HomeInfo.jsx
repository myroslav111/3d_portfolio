import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => {
  <div className='info-box'>
    <p className='font-medium sm:text-center'> {text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>;
};

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Myroslav</span>
      <br />A so Web Deweloper from Ukraine.
    </h1>
  ),
  2: (
    <InfoBox
      btnText='Learn mor about me'
      link='/about'
      text='Worked with many companies and picked up many skills along the way'
    />
  ),
  3: (
    <InfoBox
      btnText='Some informstion about mein expirience'
      link='/projects'
      text='Visit My Portfolio'
    />
  ),
  4: (
    <InfoBox
      btnText='Some contact information'
      link='/contact'
      text='Lets talk'
    />
  )
};

// eslint-disable-next-line react/prop-types
const HomeInfo = ({ currentStage }) => {
  switch (currentStage) {
    case 1:
      return (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
          Hi, I am <span className='font-semibold'>Myroslav</span>
          <br />A so Web Deweloper from Ukraine.
        </h1>
      );

    case 2:
      return (
        <div className='info-box'>
          <p className='font-medium sm:text-center'>
            {' '}
            Worked with many companies and picked up many skills along the way
          </p>
          <Link to='/about' className='neo-brutalism-white neo-btn'>
            Learn mor about me
            <img src={arrow} className='w-4 h-4 object-contain' />
          </Link>
        </div>
      );

    case 3:
      return (
        <div className='info-box'>
          <p className='font-medium sm:text-center'> Visit My Portfolio</p>
          <Link to='/projects' className='neo-brutalism-white neo-btn'>
            Mein Work
            <img src={arrow} className='w-4 h-4 object-contain' />
          </Link>
        </div>
      );
    case 4:
      return (
        <div className='info-box'>
          <p className='font-medium sm:text-center'>
            {' '}
            Some contact information
          </p>
          <Link to='/contact' className='neo-brutalism-white neo-btn'>
            Lets talk
            <img src={arrow} className='w-4 h-4 object-contain' />
          </Link>
        </div>
      );
    default:
      return null;
  }
};

export default HomeInfo;
