import TypeWriter from "./typewriter";

const RetroScreen = () => {
    return (
        <div className="flex flex-col font-medium h-96 shadow-[7px_7px_0_0] shadow-primary justify-center space-y-8 text-5xl w-full border-4 rounded-sm border-primary">
            <TypeWriter text="./create tiny urls." delay={100} />
            <TypeWriter text="./keep them forever." delay={100} />
            <TypeWriter text="./thats it." delay={100} />
        </div>
    );
};

export default RetroScreen;