import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()

    return(
        <>
        <div className="error-page d-flex align-items-center position-absolute top-50 start-50 translate-middle">
            <h1 className="me-1 fs-1">404</h1>
            <hr className="border border-primary border-2" style={{height: "2rem"}} />
            <p className="ms-1 fs-1">{error.statusText || error.messege}</p>
        </div>
        </>
    )
}