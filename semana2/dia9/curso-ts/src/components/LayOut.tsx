type LayOutProps = {
    children: React.ReactNode
}

const LayOut = ({children} : LayOutProps) => {
    return (
        <div className="layout">{children}</div>
    )
}

export default LayOut