declare module '*.svg' {
    import React from 'react';
    const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default SVG;
}

declare module '*.svg?url' {
    const content: string;
    export default content;
}
