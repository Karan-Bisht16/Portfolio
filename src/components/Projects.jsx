import { useContext } from 'react';
import { Link as NavigateLink } from 'react-router-dom';
// importing config
import projectsJSON from '../config/projects.config.json';
import constantsJSON from '../config/constants.config.json';
// importing contexts
import { MobileContext } from '../contexts/mobile.context';
// importing subcomponents
import Dot from './subcomponents/Dot';
import Heading from './subcomponents/Heading';
import LazyImage from './subcomponents/LazyImage';

const ProjectStack = (props) => {
    const { project } = props;
    const { isMobile } = useContext(MobileContext);

    const { transitionDurationClass } = constantsJSON;
    const { id, thumbnailImg, title, overview, locked, hidden } = project;
    const { lowResSrc, highResSrc } = thumbnailImg;
    const { duration } = overview;

    if (hidden) {
        return null;
    }

    return (
        <NavigateLink
            to={locked ? '#' : `/project/${id}`}
            style={{ height: `${isMobile ? project.heightOnMobile : project.height}vh` }}
            className={`flex flex-col relative ${locked && 'cursor-default'}`}
        >
            <div className='flex-1 h-auto w-full overflow-hidden relative mx-auto rounded-lg'>
                <LazyImage
                    initialSrc={lowResSrc}
                    finalSrc={highResSrc}
                    alt='Project thumbnail'
                    style={`relative z-0 w-full h-full shadow-lg rounded-lg object-cover transition-all ${transitionDurationClass}
                    ${!locked && 'hover:scale-110 hover:opacity-90'}`}
                />
            </div>
            {locked &&
                <span className='absolute top-2 right-2 font-thin text-[--project-locked-text] bg-[--primary-highlight] py-0.5 px-2.5 rounded-md'>
                    Locked
                </span>}
            <div className='flex-none py-2'>
                <p className='text-lg font-semibold'>
                    {title}
                </p>
                <span className='text-sm font-normal text-[--quaternary-text]'>
                    {duration}
                </span>
            </div>
        </NavigateLink>
    );
}

const Projects = () => {
    const { projects } = projectsJSON;

    return (
        <li name='projects' className='ms-4 md:ms-6'>
            <Dot />
            <Heading title='Projects' />
            <div className='mt-8'>
                <div className='hidden md:flex gap-4'>
                    <div className='flex flex-col gap-4 w-1/3'>
                        {projects.filter((_, index) => index % 3 === 0).map((project, index) => (
                            <ProjectStack
                                key={index}
                                project={project}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col gap-4 w-1/3'>
                        {projects.filter((_, index) => index % 3 === 1).map((project, index) => (
                            <ProjectStack
                                key={index}
                                project={project}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col gap-4 w-1/3'>
                        {projects.filter((_, index) => index % 3 === 2).map((project, index) => (
                            <ProjectStack
                                key={index}
                                project={project}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex md:hidden gap-4'>
                    <div className='flex flex-col gap-4 w-1/2'>
                        {projects.filter((_, index) => index % 2 === 0).map((project, index) => (
                            <ProjectStack
                                key={index}
                                project={project}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col gap-4 w-1/2'>
                        {projects.filter((_, index) => index % 2 === 1).map((project, index) => (
                            <ProjectStack
                                key={index}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Projects;