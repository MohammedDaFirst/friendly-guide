export const Book = (props) => {
    const { title, url, author } = props;
    const clickHandler = () => {
        alert(`You Clicked "${title
            }" Book`)
    };
    return (
        <div className="book">
            <img src={url}></img>
            <h3>{title}</h3>
            <h6>{author}</h6>
            <button type="button" onClick={clickHandler}>Click me</button>
        </div>
    )
}