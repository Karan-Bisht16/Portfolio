const Heading = (props) => {
    const { title, style } = props;

    return (
        <h2 className={`text-4xl md:text-5xl font-semibold mb-4 ${style}`}>
            {title}
        </h2>
    );
};

export default Heading;