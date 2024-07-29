function SkillCard(props) {
    const { title, src, color } = props;

    return (
        <div className="flex flex-col justify-center pt-8">
            <div className={`mx-auto scale-[4.5] ${color}`}>
                {src}
            </div>
            <div className="mt-8 select-none">
                {title}
            </div>
        </div>
    );
}
export default SkillCard;