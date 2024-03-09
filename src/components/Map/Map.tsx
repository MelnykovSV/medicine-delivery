import axios from "axios";
import { getErrorMessage } from "../../helpers";
import { toast } from "react-toastify";

import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { Address } from "../../interfaces";

const { REACT_APP_GOOGLE_MAPS_KEY, REACT_APP_GEOAPIFY_KEY } = process.env;

interface IMapProps {
  address: Address;
  addressHandler: (address: Address) => void;
}

const Map = ({ address, addressHandler }: IMapProps) => {
  const mapClickHandler = async (mapEvent: {
    detail: { latLng: { lat: number; lng: number } | null };
  }) => {
    if (!address && mapEvent && mapEvent.detail && mapEvent.detail.latLng) {
      try {
        const res: any = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${mapEvent.detail.latLng.lat}&lon=${mapEvent.detail.latLng.lng}&format=json&apiKey=${REACT_APP_GEOAPIFY_KEY}`
        );

        addressHandler({
          addressLine: res.data.results[0].formatted,
          lat: mapEvent.detail.latLng.lat,
          lon: mapEvent.detail.latLng.lng,
        });
      } catch (error) {
        toast.error(getErrorMessage(error));
        addressHandler(null);
      }
    } else {
      addressHandler(null);
    }
  };

  return (
    <div style={{ width: 500, height: 500 }}>
      <APIProvider apiKey={REACT_APP_GOOGLE_MAPS_KEY!}>
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 50.450001, lng: 30.523333 }}
          center={address ? { lat: address?.lat, lng: address?.lon } : null}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          onClick={mapClickHandler}>
          {address ? (
            <Marker position={{ lat: address.lat, lng: address.lon }} />
          ) : null}
        </GoogleMap>
      </APIProvider>
    </div>
  );
};
export default Map;
