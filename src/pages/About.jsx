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
          Myroslav
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              Currently doing my Ausbildung as an Application Developer at Infokom GmbH,
              where I mostly work on backend stuff — building APIs, working with databases,
              and occasionally trying to convince Spring Boot to cooperate with me ☕.
            </p>

            <p>
              My current tech stack includes Java, Spring Boot, Vaadin, PostgreSQL,
              CockroachDB, GitLab CI/CD, and tools like Jira & Confluence. I also get
              in touch with DevOps topics from time to time, so yes… sometimes I write
              code, sometimes I fight pipelines.
            </p>

            <p>
              Even though my focus shifted more towards backend development, I still enjoy
              frontend work and creating clean, interactive user experiences. I like
              understanding how things work under the hood and continuously improving my
              skills while building real-world applications.
            </p>

      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
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
              Right now I’m gaining hands-on experience during my Ausbildung at
              Infokom GmbH, mainly in backend-oriented projects. I work with enterprise
              applications, database integrations, mappings, APIs, and internal systems
              where Java and Spring are part of my daily life.
            </p>
            <p>
              Before that, I was also involved in a small startup after my education, where
              I had the opportunity to take on a team lead role twice. That experience helped
              me strengthen my collaboration and communication skills in a fast-moving team
              environment and gave me early responsibility in real-world development work.
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
