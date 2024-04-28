export default function LinkButton({className, href, text}) {
    return(
        <>
        <a href={href} className={className}>{text}</a>
        </>
    )
}