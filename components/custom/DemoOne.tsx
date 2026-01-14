import GradientMenu from "../gradient-menu";

const DemoOne = () => {
    return (
        <div className="flex w-[95vw] my-3 mx-5 h-[15vh] px-2 justify-between items-center border-b rounded-2xl backdrop-blur-md shadow-lg overflow-hidden bg-gradient-to-r from-purple-300  to-green-100">
            <h1>Here will be the logo</h1>
            <GradientMenu />
        </div>
    );
};

export { DemoOne };
