import GradientMenu from "../gradient-menu";

const DemoOne = () => {
    return (
        <div className="flex w-[95vw] my-3 mx-5 h-[15vh] px-2 justify-between items-center  rounded-2xl backdrop-blur-md shadow-lg overflow-hidden bg-gradient-to-b from-purple-500 to-white/30">
            <img src="/logo.PNG" alt="logo" className="h-[50vh] w-auto object-contain shrink-0 pt-12 px-0" />
            <GradientMenu />
        </div>
    );
};

export { DemoOne };
