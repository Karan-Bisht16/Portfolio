const Dot = (props) => {
    const { style } = props;

    return (
        <div className={`absolute h-[13px] w-[13px] bg-[--dot-bg] mt-4 -start-[7.5px] border-2 border-[--primary-highlight] rounded-full ${style}`} />
    );
};

export default Dot;