export default function services(props){
    <article className="service">
        <div className="info-container">
            <h2 className="service-title">{props.title}</h2>
            <p className="service-text">{props.text}</p>
            <a href={props.readMoreLink}>Read More</a>
            
        </div>
    </article>
}