"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="6px"
                color="#ffdd00"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default Providers;
