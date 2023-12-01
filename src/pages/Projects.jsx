import { Link, Element } from 'react-scroll';

import CTA from '../components/CTA';
import {
  projects,
  projectsWithoutStyle,
  projectOnlyDesign,
  projectsOther
} from '../constants';

import ProjectHolder from '../components/ProjectHolder';
import { ButtonTop } from '../components';
// import { ButtonTop } from '../components';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{' '}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I thoroughly enjoy coding, and as a result, I have numerous pet projects
        in my repository. While I have many, I would like to highlight a few of
        them below:
      </p>

      <div className=' cursor-pointer flex gap-3 text-indigo-500 my-5'>
        <Link
          activeClass='active'
          to='section_full_stack'
          spy={true}
          smooth={true}
          duration={900}
        >
          FullStk&darr;
        </Link>
        <Link
          activeClass='active'
          to='section_useful_project'
          spy={true}
          smooth={true}
          duration={900}
        >
          Useful&darr;
        </Link>
        <Link
          activeClass='active'
          to='section_layout'
          spy={true}
          smooth={true}
          duration={900}
        >
          Layout&darr;
        </Link>
        <Link
          activeClass='active'
          to='section_other'
          spy={true}
          smooth={true}
          duration={900}
        >
          Other&darr;
        </Link>
        {/* <a href='#section_full_stack'>full stack</a>
        <a href='#section_useful_project'>useful Project</a>
        <a href='#section_layout'>layout</a>
        <a href='#section_other'>other</a> */}
      </div>

      <Element name='section_full_stack' className='element'>
        <p
          // id='section_full_stack'
          className='text-slate-500 mt-2 leading-relaxed'
        >
          Fullstack applications &#128071;
        </p>
      </Element>

      <ProjectHolder projectArrey={projects} />

      <Element name='section_useful_project' className='element'>
        <p
          // id='section_useful_project'
          className='text-slate-500 mt-2 leading-relaxed'
        >
          These applications, although lacking styles, serve to address
          important issues. &#128071;
        </p>
      </Element>

      <ProjectHolder projectArrey={projectsWithoutStyle} />

      <Element name='section_layout' className='element'>
        <p
          //  id='section_layout'
          className='text-slate-500 mt-2 leading-relaxed'
        >
          Projects with a focus on layout design only. &#128071;
        </p>
      </Element>

      <ProjectHolder projectArrey={projectOnlyDesign} />

      <div>
        {' '}
        <Element name='section_other' className='element'>
          <p id='section_other' className='text-slate-500 mt-2 leading-relaxed'>
            Projects with a focus on layout design only. &#128071;
          </p>
        </Element>
      </div>

      <ProjectHolder projectArrey={projectsOther} />

      <hr className='border-slate-200' />

      <CTA />
      <ButtonTop />
    </section>
  );
};

export default Projects;
