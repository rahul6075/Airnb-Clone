import {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import { LocationMarkerIcon } from '@heroicons/react/outline';
function MapItem({searchResults}) {
    

    const cordinates = searchResults.map( result => ({
        longitude:result.long,
        latitude:result.lat,
    }));

    const center = getCenter(cordinates);
    
    const [viewport, setViewport] = useState({
       
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })
    return (
        <ReactMapGL
          mapStyle='mapbox://styles/swyam198/cksem2jeklyk917plcyhczkiw'
          mapboxApiAccessToken={process.env.mapbox_key}
          {...viewport}
          width="100%"
          height="100%"
         onViewportChange={(nextviewport) => setViewport(nextviewport)}
        >

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                     longitude={result.long}
                     latitude={result.lat}
                     offsetLeft={-20}
                     offsetTop={-10}
                    >
                        
                     <p className="cursor-pointer text-2xl animate-bounce"><LocationMarkerIcon className="h-5 text-red-400"/></p>
                    </Marker>
                </div>
            ))}
        </ReactMapGL>
    )
}

export default MapItem

