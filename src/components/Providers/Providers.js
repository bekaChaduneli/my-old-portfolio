"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="6px"
                color="#febe00ac"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default Providers;
