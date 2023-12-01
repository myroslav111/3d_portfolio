import { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Fox } from '../models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const { alert, showAlert, hideAlert } = useAlert();
  const [form, setform] = useState({ name: '', email: '', massage: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const handleChange = e => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  //click in
  const handleFocus = () => setCurrentAnimation('walk');
  //click out
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Myroslav',
          from_email: form.email,
          to_email: 'myrkozar@gmail.com',
          message: form.mesage
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: 'Thank you for your message 😃',
          type: 'success'
        });

        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation('idle');
          setform({ name: '', email: '', massage: '' });
        }, [3000]);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        setCurrentAnimation('idle');
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: 'danger'
        });
      });
  };

  return (
    <section className='relativ flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-bleck-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder='Name'
            />
          </label>
          <label className='text-bleck-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='myrkozar@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-bleck-500 font-semibold'>
            Name
            <textarea
              type='text'
              name='massage'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.massage}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
