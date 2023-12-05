export function ContainerDiv({className, children}){
    const tw_classes = `w-11/12 sm:w-10/12 mx-auto`
    return (
        <div className={tw_classes + " " + className }>
            {children}
        </div>
    )
}