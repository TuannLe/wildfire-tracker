import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/storm-circle';

const LocationMaker2 = ({ lat, lng, onClick }) => {
    return (
        <div className="location-maker2" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon2" />
        </div>
    )
};

export default LocationMaker2;
