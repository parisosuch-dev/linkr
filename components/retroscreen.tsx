import TypeWriter from "./typewriter";

const RetroScreen = () => {
    return (
        <div className="flex flex-col font-medium h-48 sm:h-96 shadow-[5px_5px_0_0] sm:shadow-[7px_7px_0_0] shadow-primary justify-center space-y-1 sm:space-y-8 text-xl sm:text-5xl w-full border-2 sm:border-4 rounded-sm border-primary">
            <TypeWriter text="./create tiny urls." delay={50} />
            <TypeWriter text="./keep them forever." delay={50} />
            <TypeWriter text="./thats it." delay={50} />
        </div>
    );
};

export default RetroScreen;