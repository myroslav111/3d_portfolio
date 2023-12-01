import { useEffect, useState } from 'react';

const ButtonTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleIsVisible);

    return () => {
      window.removeEventListener('scroll', toggleIsVisible);
    };
  }, []);

  return (
    <div className='fixed right-7 bottom-7 w-8 h-8 rounded-full border-r-gray-500 border-2 focus:outline-none flex justify-center items-center'>
      {isVisible ? (
        <button
          type='button'
          onClick={scrollToTop}
          className='flex justify-center items-center'
        >
          <span>&uarr;</span>
        </button>
      ) : null}
    </div>
  );
};

export default ButtonTop;
