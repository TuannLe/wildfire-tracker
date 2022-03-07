import { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import LocationMaker from './LocationMaker';
import LocationMaker2 from './LocationMaker2';
import LocationInfoBox from './LocationInfoBox';

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMaker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            />
        } else if (ev.categories[0].id === 10) {
            return <LocationMaker2 lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDG8W5wl1K-YXEd2temmwLJiKHbbYcxd9Q' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
};

Map.defaultProps = {
    center: {
        lat: 17, //Vĩ độ (latitude)
        lng: 107, //Kinh độ (longitude)
    },
    zoom: 6
}

export default Map;
