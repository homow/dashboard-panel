import {Suspense} from 'react'

export default function SuspenseBoundary({children, fallback}) {
    return (
        <Suspense fallback={fallback || <div className="text-secondary-txt text-xl text-center p-4">Loading...</div>}>
            {children}
        </Suspense>
    )
}