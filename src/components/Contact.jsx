import { useContext, useRef, useState } from 'react';
import axios from 'axios';
// imporing icons
import { MdAlternateEmail } from 'react-icons/md';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
// importing config
import contactJSON from '../config/contact.config.json';
import constantsJSON from '../config/constants.config.json';
// importing contexts
import { MobileContext } from '../contexts/mobile.context';
import { SnackbarContext } from '../contexts/snackbar.context';
// importing components
import Dot from './subcomponents/Dot';
import Heading from './subcomponents/Heading';
// importing assets
import backgroundImage from '/assets/img-background.avif'

const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

const InputField = (props) => {
    const { transitionDurationMs } = constantsJSON;
    const { name, type, required, label, state, handleStateChange, inputRef, ...rest } = props;

    if (type?.trim()?.toLowerCase() === 'textarea') {
        const { rows } = rest;
        return (
            <div className='relative'>
                <textarea
                    id={name}
                    name={name}
                    type={type}
                    placeholder=''
                    rows={rows}
                    required={required}
                    autoComplete='off'
                    value={state}
                    onChange={handleStateChange}
                    ref={inputRef}
                    className='peer block appearance-none w-full text-sm px-2.5 pb-2.5 pt-4 text-[--contact-input-text] bg-transparent 
                    border-2 border-[--contact-input-border] rounded-lg focus:outline-none focus:ring-0 focus:border-[--primary-highlight] selection:bg-[--contact-input-selection]'
                />
                <label
                    htmlFor={name}
                    onClick={() => inputRef?.current?.focus()}
                    style={{ transitionDuration: transitionDurationMs }}
                    className={`absolute top-2 z-10 text-sm px-2 text-[--contact-label-text] bg-[--contact-label-bg] start-1 cursor-text 
                    transform -translate-y-4 scale-75 origin-[0] transition-[transform,top]
                    peer-focus:px-2 peer-focus:text-[--primary-highlight] peer-focus:dark:text-[--primary-highlight] 
                    peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6`}
                >
                    {label}
                </label>
            </div>
        );
    }

    return (
        <div className='relative'>
            <input
                id={name}
                name={name}
                type={type}
                placeholder=''
                required={required}
                autoComplete='off'
                value={state}
                onChange={handleStateChange}
                ref={inputRef}
                className='peer block appearance-none w-full text-sm px-2.5 pb-2.5 pt-4 text-[--contact-input-text] bg-transparent 
                border-2 border-[--contact-input-border] rounded-lg focus:outline-none focus:ring-0 focus:border-[--primary-highlight] selection:bg-[--contact-input-selection]'
            />
            <label
                htmlFor={name}
                onClick={() => inputRef?.current?.focus()}
                style={{ transitionDuration: transitionDurationMs }}
                className={`absolute top-2 z-10 text-sm px-2 text-[--contact-label-text] bg-[--contact-label-bg] start-1 cursor-text 
                transform -translate-y-4 scale-75 origin-[0] transition-[transform,top]
                peer-focus:px-2 peer-focus:text-[--primary-highlight] peer-focus:dark:text-[--primary-highlight] 
                peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6`}
            >
                {label}
            </label>
        </div>
    );
};

const ContactCard = (props) => {
    const { icon, heading, text } = props;

    return (
        <div className='flex gap-4 items-center'>
            {icon}
            <div>
                <p className='font-semibold '>
                    {heading}
                </p>
                <p className='text-xl font-semibold text-[--contact-card-text]'>
                    {text}
                </p>
            </div>
        </div>
    );
};

const getIPLocation = async () => {
    try {
        const { data } = await axios.get('https://ipapi.co/json/');
        return {
            ip: data.ip,
            network: data.network,
            latitude: data.latitude,
            longitude: data.longitude,
            city: data.city,
            country: data.country_name,
            timezone: data.timezone,
        };
    } catch (error) { }
};

const Contact = () => {
    const { transitionDurationClass } = constantsJSON;
    const { heading, content, contactList, formPlaceholders, validationMessages, connectBtnLabel, closingText } = contactJSON;
    const { contactCards } = contactList;

    const { isMobile } = useContext(MobileContext);
    const { openSnackbar } = useContext(SnackbarContext);

    const iconMap = { MdAlternateEmail, FaPhone, FaLocationDot };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleFormDataChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return { ...prevFormData, [name]: value }
        });
    }
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) {
            return;
        }

        if (nameRef?.current?.value?.trim() === '') {
            if (!isMobile) {
                nameRef.current.focus();
            }
            return await openSnackbar({
                message: validationMessages['nameRequiredWarning'],
                status: 'error'
            });
        } else if (emailRef?.current?.value?.trim() === '') {
            if (!isMobile) {
                emailRef.current.focus();
            }
            return await openSnackbar({
                message: validationMessages['emailRequiredWarning'],
                status: 'error'
            });
        } else if (!emailRegex.test(emailRef?.current?.value)) {
            if (!isMobile) {
                emailRef.current.focus();
            }
            return await openSnackbar({
                message: validationMessages['invalidEmailWarning'],
                status: 'error'
            });
        } else if (messageRef?.current?.value?.trim() === '') {
            if (!isMobile) {
                messageRef.current.focus();
            }
            return await openSnackbar({
                message: validationMessages['messageRequiredWarning'],
                status: 'error'
            });
        }

        try {
            setIsSubmitting(true);
            await openSnackbar({
                message: validationMessages['sendingMessageStatus'],
                status: 'wait'
            });

            const { ip, network, latitude, longitude, city, country, timezone } = await getIPLocation();
            const response = await axios.post(
                'https://script.google.com/macros/s/AKfycbzz0-w7PJATOjkq75m15OWLbeZ-yntmNK9qIrH--Yv47Tk3ZGVFO7vhJTDnkeZrD6A/exec',
                {
                    ...formData,
                    ip,
                    network,
                    latitude,
                    longitude,
                    city,
                    country,
                    timezone,
                    'X-Origin-Auth': window.location.origin,
                    'X-Secret-Key': import.meta.env.VITE_APP_SCRIPT_SECRET_KEY,
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }
            );

            if (response.data.isSuccess) {
                setFormData({ name: '', email: '', message: '' });
                await openSnackbar({
                    message: validationMessages['messageSentSuccess'],
                    status: 'success'
                });
            } else {
                throw new Error('Failed to submit form.');
            }
        } catch (error) {
            await openSnackbar({
                message: validationMessages['messageSentFailure'],
                status: 'error'
            });
        }
        setIsSubmitting(false);
    };

    return (
        <li name='contact' className='pb-2.5 md:pb-24 ms-4 md:ms-6'>
            <Dot />
            <Heading title={heading} />
            <div className='lg:grid grid-cols-5 space-y-8'>
                <div className='col-span-2 text-[--quaternary-text]'>
                    <p
                        dangerouslySetInnerHTML={{ __html: content }}
                        className='text-lg'
                    />
                    <div className='mt-6 lg:mt-8 mx-8 lg:mx-16 space-y-4 lg:space-y-8'>
                        {contactCards?.map(({ icon, heading, text, iconSize, style }, index) => {
                            const IconComponent = iconMap[icon];

                            return (
                                <ContactCard
                                    key={index}
                                    icon={
                                        <div className={`text-[--contact-icon] bg-[--primary-highlight] rounded-2xl ${style}`}>
                                            <IconComponent size={iconSize} />
                                        </div>
                                    }
                                    heading={heading}
                                    text={text}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className='col-span-3 flex flex-col justify-start w-full px-4 lg:px-8'>
                    <div className=' flex justify-center items-center'>
                        <form
                            onSubmit={handleSubmit}
                            className='w-full space-y-4'
                        >
                            <InputField
                                name='name'
                                type='text'
                                label={formPlaceholders['name']}
                                state={formData.name}
                                handleStateChange={handleFormDataChange}
                                inputRef={nameRef}
                            />
                            <InputField
                                name='email'
                                type='text'
                                label={formPlaceholders['email']}
                                state={formData.email}
                                handleStateChange={handleFormDataChange}
                                inputRef={emailRef}
                            />
                            <InputField
                                name='message'
                                type='textarea'
                                label={formPlaceholders['message']}
                                rows={10}
                                state={formData.message}
                                handleStateChange={handleFormDataChange}
                                inputRef={messageRef}
                            />

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className={`overflow-hidden relative flex gap-2 items-center font-medium px-4 py-3 
                                text-[--contact-cta-text] bg-[--primary-highlight] rounded-md shadow-sm select-none transition-all 
                                hover:opacity-90 hover:shadow-violet-500/50 hover:before:-translate-x-60 focus:outline-none disabled:opacity-50
                                before:opacity-10  before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:bg-[--contact-cta-bg] 
                                before:translate-x-16 before:rotate-6 before:ease before:${transitionDurationClass}`}
                            >
                                {connectBtnLabel}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center my-16'>
                <img
                    src={backgroundImage}
                    alt='A generic background image'
                    className='w-11/12 mx-auto rounded-2xl'
                />
                <p className='lg:text-xl font-semibold'>
                    {closingText}
                </p>
            </div>
            <Dot style='!mt-1.5' />
            <time className='text-md font-normal leading-none text-[--footer-caption]'>
                &lt;end/&gt;
            </time>
        </li>
    );
};

export default Contact;