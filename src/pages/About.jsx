// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";

// import { CTA } from "../components";
import { skills } from '../constants';

// import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Miro
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I expect to find work as a Junior Front-end developer to work with
          complex and interesting tasks. I want to demonstrate my programming
          skills in practice to support the company in its further development.
          Also, gain new skills and work experience and succeed in my web
          developer career.
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
    </section>
  );
};

export default About;
