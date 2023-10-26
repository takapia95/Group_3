import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMaker = ({  lat, lng, onClick}) => {
  return (
    <div className="location-maker" onClick={onclick}>
        <Icon icon={locationIcon} className="location-icon"/>
        
    
    </div>
  )
}

export default LocationMaker