import { Icon } from '@iconify/react'
import stormIcon from '@iconify/icons-mdi/storm'

const LocationMaker = ({  lat, lng, onClick}) => {
  return (
    <div className="location-maker" onClick={onclick}>
        <Icon icon={stormIcon} className="location-icon"/>
    
    </div>
  )
}

export default LocationMaker