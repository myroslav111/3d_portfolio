import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import { CTA } from '../components';
import { skills, experiences } from '../constants';

import { Link } from 'react-router-dom';

import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I&apos;m{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Miro
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am currently completing my apprenticeship as an Application
          Developer (Java, Backend) at InfoKom in Karlsruhe and attending
          Heinrich-Hertz-Schule. I am passionate about building practical
          applications, improving my backend and full-stack skills, and
          continuously growing as a developer.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Tools & Technologies I’ve Worked With</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map(skill => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Although I do not yet have extensive commercial experience, I gained
            valuable hands-on knowledge by participating in a small startup
            after completing a JavaScript training course. During this time, I
            had the opportunity to take on a team lead role twice, which
            strengthened my leadership and communication skills. This
            experience, along with my current apprenticeship as a Java backend
            developer at InfoKom and studies at Heinrich-Hertz-Schule in
            Karlsruhe, has helped me develop a solid foundation in teamwork,
            problem-solving, and software development in real projects.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map(experience => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full hover:scale-125 md:transform-none'>
                    <Link
                      className='flex justify-center items-center'
                      to={experience.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      // className='font-semibold text-blue-600'
                    >
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </Link>
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
