import * as S from "./AddressAutocomplete.styled";
import { Address } from "../../interfaces";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

interface IAddressAutocompleteProps {
  address: Address;
  addressHandler: (address: Address) => void;
}

export default function AddressAutocomplete({
  address,
  addressHandler,
}: IAddressAutocompleteProps) {
  const selecthandler = (selectEvent: {
    properties: { formatted: string; lat: number; lon: number };
  }) => {
    if (selectEvent) {
      addressHandler({
        addressLine: selectEvent.properties.formatted,
        lat: selectEvent.properties.lat,
        lon: selectEvent.properties.lon,
      });
    } else {
      addressHandler(null);
    }
  };

  return (
    <S.Container>
      <GeoapifyContext apiKey="d2b74d05829c4590ab00d2470466ad34">
        <GeoapifyGeocoderAutocomplete
          placeholder="Enter address here"
          value={address?.addressLine}
          placeSelect={selecthandler}
        />
      </GeoapifyContext>
    </S.Container>
  );
}
