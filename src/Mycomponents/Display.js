export default function Display(props) {
    return(
        <>
           {(props.age >= 18)?<div id="view">
                <h1>Hello, how are you?</h1>
            </div> :
            <div id="no-view">
                <h1>You are young</h1>
            </div>}
        </>
    )
}