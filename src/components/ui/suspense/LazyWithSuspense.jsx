import {lazy} from "react";
import SuspenseBoundary from "./SuspenseBoundary";

const LazyWithSuspense = (importFunc, className) => {
    const Component = lazy(importFunc);

    const Wrapped = props => (
        <SuspenseBoundary className={className}>
            <Component {...props}/>
        </SuspenseBoundary>
    );

    Wrapped.displayName = `LazyWithSuspense(${importFunc})`;
    return Wrapped;
};

export default LazyWithSuspense;