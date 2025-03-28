const Logo = (props) => {
    const { style } = props;

    return (
        <div className={`flex align-middle text-3xl md:text-5xl bg-[--logo-bg] ml-2 p-2 rounded-xl shadow-lg select-none focus:outline-none ${style}`}>
            <span className='font-bold text-[--logo-text]'>K
                <span className='font-extrabold text-[--primary-highlight]'>.</span>
            </span>
        </div>
    );
};

export default Logo;