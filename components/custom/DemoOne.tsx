import GradientMenu from "../gradient-menu";

const DemoOne = () => {
    return (
        <div className="flex w-[95vw] my-3 mx-5 h-[15vh] px-2 justify-between items-center border rounded-2xl bg-white/20 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/10 shadow-lg overflow-hidden">
            <h1>Here will be the logo</h1>
            <GradientMenu />
        </div>
    );
};

export { DemoOne };
