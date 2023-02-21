import parse from "html-react-parser";

function SVGComponent({component}:{component: string}) {
    return <>{parse(component)}</>;
}

export default SVGComponent
