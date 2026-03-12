export default function Entry(props) {
    return(
        <article className="attraction-card flex">
            <img 
                src={props.img.src} 
                className="attraction-img" 
                alt={props.img.alt}
                />
            
            <div className="attraction-details-container flex flex-col">
                <div className="attraction-location-container flex">
                    <img src="/marker.png" className="maps-marker" alt="google maps marker icon" />
                    <p className="location-country">{props.country}</p>
                    <a 
                        href={props.googleMapsLink} 
                        className="maps-link"
                        target="_blank"
                    >
                        View on Google Maps
                    </a>
                </div>
                
                <div className="attraction-info-container flex flex-col">
                    <h2 className="attraction-name">{props.title}</h2>
                    <p className="attraction-dates">{props.dates}</p>
                    <p className="attraction-description">{props.text}</p>
                </div>
            </div>
        </article>
    )
}