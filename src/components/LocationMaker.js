import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify/icons-mdi/volcano'

const LocationMaker = ({  lat, lng, onClick}) => {
  return (
    <div className="location-maker" onClick={onclick}>
        <Icon icon={volcanoIcon} className="location-icon"/>
    
    </div>
  )
}

export default LocationMaker