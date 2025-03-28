import { useContext, useEffect } from 'react';
import { lineSpinner } from 'ldrs'
// importing icons
import { TbError404 } from 'react-icons/tb';
import { BiErrorCircle } from 'react-icons/bi';
import { IoCheckmarkDoneCircleOutline, IoClose } from 'react-icons/io5';
// importing config
import constantsJSON from '../../config/constants.config.json';
// importing contexts
import { SnackbarContext } from '../../contexts/snackbar.context';

const Snackbar = (props) => {
    const { open, status, message } = props;
    const { snackbarTimeout, transitionDurationMs } = constantsJSON;
    const { closeSnackbar } = useContext(SnackbarContext);
    const snackbarStatus = status?.toLowerCase()?.trim();

    const snackbarProperties = {
        bgColor: '',
        icon: <></>,
    };

    switch (snackbarStatus) {
        case 'success':
            snackbarProperties.bgColor = 'bg-green-600';
            snackbarProperties.icon = <IoCheckmarkDoneCircleOutline size={24} className='!min-w-6' />;
            break;
        case 'error':
            snackbarProperties.bgColor = 'bg-red-600';
            snackbarProperties.icon = <BiErrorCircle size={24} className='!min-w-6' />;
            break;
        case 'wait':
            snackbarProperties.bgColor = 'bg-gray-600';
            snackbarProperties.icon =
                <l-line-spinner
                    size='24'
                    stroke='2'
                    speed='1'
                    color='white'
                />;
            break;
        default:
            snackbarProperties.bgColor = 'bg-gray-800';
            snackbarProperties.icon = <TbError404 size={24} className='!min-w-6' />;
    };

    useEffect(() => {
        if (snackbarStatus !== 'wait') {
            const timer = setTimeout(async () => {
                await closeSnackbar();
            }, snackbarTimeout);
            return () => clearTimeout(timer);
        }
    }, [open, status, message]);

    lineSpinner.register();

    return (
        <div
            style={{ transitionDuration: transitionDurationMs }}
            className={`flex justify-between items-center w-[calc(100%-48px)] sm:w-full sm:max-w-xs fixed right-6 top-6 sm:right-8 sm:top-auto sm:bottom-8 z-40 
            text-white p-4 space-x-4 rounded-lg shadow-sm transition-all
            ${snackbarProperties.bgColor} ${open ? 'translate-x-0' : 'translate-x-[200%]'}`}
        >
            <div className='flex gap-4 items-center'>
                {snackbarProperties.icon}
                <p className='font-normal'>
                    {message || 'No message provided'}
                </p>
            </div>

            <button
                onClick={async () => await closeSnackbar()}
                className='select-none'
            >
                <IoClose size={24} />
            </button>
        </div>
    );
};

export default Snackbar;