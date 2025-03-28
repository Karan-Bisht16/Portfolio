import { useContext, useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useParams } from 'react-router-dom';
import { lineSpinner } from 'ldrs';
// importing icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { IoCloseSharp } from 'react-icons/io5';
// importing configs
import constantsJSON from '../config/constants.config.json';
import projectsJSON from '../config/projects.config.json';
// importing contexts
import { ThemeContext } from '../contexts/theme.context';
import { MobileContext } from '../contexts/mobile.context';
import { SidebarContext } from '../contexts/sidebar.context';
// importing components
import Dot from '../components/sub-components/Dot';
import LazyImage from '../components/sub-components/LazyImage';

const InfoBlock = (props) => {
    const { heading, content } = props;
    if (!heading || !content || content.length === 0) {
        return null;
    }

    return (
        <div>
            <h3 className='text-xs uppercase text-[--project-secondary-text]'>
                {heading}
            </h3>
            <div>
                {Array.isArray(content) ? (
                    content.map((item, index) => (
                        <div key={index} className='flex gap-2 items-center'>
                            {typeof item === 'string' ? (
                                <p>{item}</p>
                            ) : (
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex gap-1 items-center hover:underline'
                                >
                                    {item.label}
                                    <GoLinkExternal size={12} />
                                </a>
                            )}
                        </div>
                    ))
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
};

const HighlightLinkBox = (props) => {
    const { link, label } = props;
    if (!link || !label) {
        return null;
    }

    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-between items-center bg-[--project-link-bg] 
            py-3 px-4 rounded-md cursor-pointer hover:bg-[--project-link-hover-bg]'
        >
            {label}
            <FaChevronRight />
        </a>
    );
};

const OverviewSection = (props) => {
    const { overview, className } = props;
    if (!overview) {
        return null;
    }

    return (
        <div name='overview' className={`space-y-6 ${className}`}>
            <p dangerouslySetInnerHTML={{ __html: overview.content }} />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                <InfoBlock heading='Role' content={overview.role} />
                <InfoBlock heading='Duration' content={overview.duration} />
                <InfoBlock heading='Collaborators' content={overview.collaborators} />
                <InfoBlock heading='Tools' content={overview.tools} />
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <HighlightLinkBox link={overview.websiteLink} label='Website link' />
                <HighlightLinkBox link={overview.githubRepositoryLink} label='Github Repository' />
            </div>
        </div>
    );
};

const DevelopmentTimelineSection = (props) => {
    const { developmentTimeline, className } = props;
    if (!developmentTimeline) {
        return null;
    }

    const { openSidebar } = useContext(SidebarContext);

    return (
        <div name='developmentTimeline' className={`space-y-8 ${className}`}>
            <h2 className='text-xl font-semibold'>
                {developmentTimeline.label}
            </h2>
            <button
                onClick={() => openSidebar(developmentTimeline.list)}
                className='flex justify-between items-center w-full bg-[--project-link-bg] 
                py-3 px-4 rounded-md select-none hover:bg-[--project-link-hover-bg]'
            >
                <span>View development details</span>
                <FaChevronRight />
            </button>
        </div>
    );
};

const TechStackSection = (props) => {
    const { techStack, className } = props;
    if (!techStack || !techStack.list) {
        return null;
    }

    return (
        <div name='techStack' className={`space-y-8 ${className}`}>
            <h2 className='text-xl font-semibold'>
                {techStack.label}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {techStack.list.map((category, index) => (
                    <div key={index} className='bg-[--project-link-bg] p-4 rounded-md'>
                        <h3 className='font-medium text-[--primary-highlight] mb-3'>
                            {category?.label}
                        </h3>
                        <div className='space-y-2'>
                            {category?.list?.map((tech, index) => (
                                <div key={index} className='flex justify-between'>
                                    <span>{tech?.name}</span>
                                    <span className='text-sm text-[--project-secondary-text]'>
                                        {tech?.version}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const GallerySection = (props) => {
    const { gallery, className } = props
    if (!gallery || !gallery.images || gallery.images.length === 0) {
        return null
    }

    const { transitionDurationMs, mobileGalleryUpperLimit } = constantsJSON;

    const { isMobile } = useContext(MobileContext);

    const [upperLimit, setUpperLimit] = useState(() => {
        return isMobile ? mobileGalleryUpperLimit : gallery.images.length
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        const newIndex = (currentIndex + direction + gallery.images.length) % gallery.images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(gallery.images[newIndex]);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImage) {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowLeft') navigateImage(-1);
                if (e.key === 'ArrowRight') navigateImage(1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentIndex, navigateImage, closeModal]);

    return (
        <div name='gallery' className={`${className}`}>
            <h2 className='text-xl font-semibold mb-8'>
                {gallery.label}
            </h2>

            {/* Gallery Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {gallery.images.map((image, index) => (
                    index <= upperLimit &&
                    <div
                        key={index}
                        className='overflow-hidden relative rounded-md bg-[--project-link-bg] cursor-pointer aspect-video group'
                        onClick={() => openModal(image, index)}
                    >
                        <img
                            src={image}
                            alt={`Project image ${index + 1}`}
                            style={{ transitionDuration: transitionDurationMs }}
                            className='h-full w-full object-cover transition-transform group-hover:scale-105'
                        />
                        <div
                            style={{ transitionDuration: transitionDurationMs }}
                            className='flex items-end absolute inset-0 bg-gradient-to-t from-[--project-gallery-img-bg] to-transparent 
                            opacity-0 transition-opacity group-hover:opacity-100'
                        >
                            <span className='text-sm text-[--project-gallery-img-text] p-3'>
                                View image
                            </span>
                        </div>
                    </div>
                ))}

                {gallery.images.length > mobileGalleryUpperLimit &&
                    <span
                        onClick={() => setUpperLimit(gallery.images.length)}
                        className={`${upperLimit === gallery.images.length ? 'hidden' : 'block'} font-semibold italic`}
                    >
                        View more
                    </span>
                }
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    onClick={closeModal}
                    className='flex justify-center items-center fixed inset-0 z-50 bg-[--project-gallery-modal-bg]'
                >
                    <div onClick={(event) => event.stopPropagation()}>
                        <button
                            onClick={closeModal}
                            className='absolute top-4 right-4 z-50 text-[--project-gallery-ctrls-text] 
                            bg-[--project-gallery-ctrls-bg] p-2 rounded-full select-none transition-colors hover:bg-[--project-gallery-ctrls-hover]'
                            aria-label='Close image'
                        >
                            <IoCloseSharp size={24} />
                        </button>

                        {/* Previous button */}
                        <button
                            onClick={() => navigateImage(-1)}
                            className='absolute top-1/2 left-4 z-50 text-[--project-gallery-ctrls-text] 
                            bg-[--project-gallery-ctrls-bg] p-2 rounded-full -translate-y-1/2 select-none transition-colors hover:bg-[--project-gallery-ctrls-hover]'
                            aria-label='Previous image'
                        >
                            <FaChevronLeft size={24} />
                        </button>

                        {/* Image container */}
                        <div className='flex justify-center items-center relative h-screen w-full max-w-6xl'>
                            <img
                                src={selectedImage}
                                alt={`Project image ${currentIndex + 1}`}
                                className='max-h-full max-w-full object-contain'
                            />
                            <div className='absolute bottom-0 left-0 right-0 text-center text-[--project-gallery-ctrls-text] 
                            bg-[--project-gallery-ctrls-bg] py-2'>
                                {currentIndex + 1} / {gallery.images.length}
                            </div>
                        </div>

                        {/* Next button */}
                        <button
                            onClick={() => navigateImage(1)}
                            className='absolute top-1/2 right-4 z-50 text-[--project-gallery-ctrls-text] 
                            bg-[--project-gallery-ctrls-bg] p-2 rounded-full -translate-y-1/2 select-none transition-colors hover:bg-[--project-gallery-ctrls-hover]'
                            aria-label='Next image'
                        >
                            <FaChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const FeaturesSection = (props) => {
    const { features, className } = props;
    if (!features || !features.list) {
        return null;
    }

    return (
        <div name='features' className={`space-y-8 ${className}`}>
            <h2 className='text-xl font-semibold'>
                {features.label}
            </h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 ml-2'>
                {features.list.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                        <span className='text-[--primary-highlight] mr-2'>•</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SystemDesignSection = (props) => {
    const { systemDesign, className } = props;
    if (!systemDesign) {
        return null;
    }

    return (
        <div name='systemDesign' className={`space-y-8 ${className}`}>
            <h2 className='text-xl font-semibold'>
                {systemDesign.label}
            </h2>
            <HighlightLinkBox link={systemDesign.link} label='View System Design' />
        </div>
    );
};

const LibrariesSection = (props) => {
    const { libraries, className } = props;
    if (!libraries || !libraries.list) {
        return null;
    }

    return (
        <div name='libraries' className={`space-y-8 ${className}`}>
            <h2 className='text-xl font-semibold'>
                {libraries.label}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {libraries.list.map((lib, index) => (
                    <div key={index} className='bg-[--project-link-bg] p-4 space-y-2 rounded-md'>
                        <a
                            href={lib.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex gap-1 items-center font-medium text-[--primary-highlight] hover:underline'
                        >
                            {lib.name}
                            <FaChevronRight size={12} />
                        </a>
                        <p className='text-sm'>
                            {lib.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Project = () => {
    const { id } = useParams();
    const { projects } = projectsJSON;
    const { sidebarWidthPx, transitionDuration, transitionDurationMs } = constantsJSON;

    const { theme } = useContext(ThemeContext);
    const { sidebarState, goFullScreen } = useContext(SidebarContext);

    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [projectNotFound, setProjectNotFound] = useState(true);
    const [activeSection, setActiveSection] = useState('overview');
    const [navigation, setNavigation] = useState([]);
    const observerRefs = useRef({});

    useEffect(() => {
        setIsLoading(true);
        window.scrollTo(0, 0);

        const currentProject = projects.find((project) => project.id === id);
        if (!currentProject) {
            setProjectNotFound(true);
            setIsLoading(false);
            return;
        }
        if (currentProject.locked || currentProject.hidden) {
            setProjectNotFound(true);
            setIsLoading(false);
            return;
        }

        setIsLoading(false);
        setProject(currentProject);
        setProjectNotFound(false);

        const filteredNav = Object.keys(currentProject)
            .filter(key => currentProject[key]?.label)
            .map(key => ({ label: currentProject[key].label, id: key }));

        setNavigation([{ label: 'Overview', id: 'overview' }, ...filteredNav]);

    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setActiveSection('overview');
            }
        };

        window.addEventListener('scroll', handleScroll);

        if (!navigation.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80% 0px',
            threshold: 0.1,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.getAttribute('name'));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observerRefs.current = {};

        navigation.forEach(({ id }) => {
            const section = document.querySelector(`[name='${id}']`);
            if (section) {
                observer.observe(section);
                observerRefs.current[id] = section;
            }
        });

        return () => {
            Object.values(observerRefs.current).forEach((section) => observer.unobserve(section));
        };
    }, [navigation]);

    if (isLoading) {
        lineSpinner.register();
        return (
            <div className='flex justify-center items-center fixed inset-0 z-50 bg-[--primary-bg]'>
                <l-line-spinner
                    size='50'
                    speed='1.4'
                    color={document.documentElement.classList.contains('dark') ? 'white' : 'black'}
                />
            </div>
        );
    }

    if (projectNotFound) {
        return (
            <div className='flex flex-col justify-center items-center fixed inset-0 z-50 bg-[--primary-bg]'>
                <lord-icon
                    src='https://cdn.lordicon.com/lltgvngb.json'
                    trigger='in'
                    delay='100'
                    state='in-reveal'
                    colors={theme === 'dark' ? 'primary:white,secondary:white' : 'primary:#1e293b,secondary:#1e293b'}
                    style={{ width: '250px', height: '250px' }}
                />
                <div className='text-3xl text-center text-[--primary-text]'>
                    Project not found
                </div>
            </div>
        );
    }

    return (
        <div className='bg-[--secondary-bg]'>
            <div
                style={{
                    width: goFullScreen ? '100%' : sidebarState ? `calc(100% - ${sidebarWidthPx})` : '100%',
                    transitionDuration: transitionDurationMs
                }}
                className='transition-all bg-[--secondary-bg]'
            >
                <LazyImage
                    initialSrc={project.bannerImg.lowResSrc}
                    finalSrc={project.bannerImg.highResSrc}
                    alt='Project banner image'
                    style='h-[35vh] w-full object-cover'
                />
                <div className='grid grid-cols-7 text-[--secondary-text] bg-[--secondary-bg]'>
                    <div className='hidden lg:block lg:col-span-2 h-full px-4 lg:pl-20'>
                        <ol className='h-full border-s-2 border-[--primary-highlight] pt-8'>
                            <div className='sticky top-0'>
                                <Dot style='!mt-2.5' />
                                <div className='flex items-start gap-1'>
                                    <h1 className='ml-4 mb-4 text-2xl'>
                                        {project.title}
                                    </h1>
                                    <h1 className='text-[--project-secondary-text]'>
                                        v{project.version}
                                    </h1>
                                </div>
                                <div className='flex flex-col text-lg text-[--project-secondary-text] ml-8'>
                                    {navigation.map(({ label, id }, index) => (
                                        <ScrollLink
                                            key={index}
                                            to={id}
                                            smooth
                                            duration={transitionDuration}
                                            className={`cursor-pointer hover:text-[--primary-text]
                                                ${activeSection === id ? 'text-[--primary-text] font-semibold' : ''}`}
                                        >
                                            {label}
                                        </ScrollLink>
                                    ))}
                                </div>
                            </div>
                        </ol>
                    </div>

                    <div className='col-span-full lg:col-span-5 pb-8 lg:pb-16 px-4 lg:pr-20'>
                        {navigation.map(({ id }, index) => {
                            switch (id) {
                                case 'overview':
                                    return <OverviewSection
                                        key={index}
                                        overview={project.overview}
                                        className='pt-8'
                                    />;
                                case 'developmentTimeline':
                                    return <DevelopmentTimelineSection
                                        key={index}
                                        developmentTimeline={project.developmentTimeline}
                                        className='pt-8'
                                    />;
                                case 'gallery':
                                    return <GallerySection
                                        key={index}
                                        gallery={project.gallery}
                                        className='pt-8'
                                    />;
                                case 'techStack':
                                    return <TechStackSection
                                        key={index}
                                        techStack={project.techStack}
                                        className='pt-8'
                                    />;
                                case 'features':
                                    return <FeaturesSection
                                        key={index}
                                        features={project.features}
                                        className='pt-8'
                                    />;
                                case 'systemDesign':
                                    return <SystemDesignSection
                                        key={index}
                                        systemDesign={project.systemDesign}
                                        className='pt-8'
                                    />;
                                case 'libraries':
                                    return <LibrariesSection
                                        key={index}
                                        libraries={project.libraries}
                                        className='pt-8'
                                    />;
                                default:
                                    console.error('Invalid id: ' + id);
                                    return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;