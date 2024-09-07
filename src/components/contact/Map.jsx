import { GoogleMapsEmbed } from "@next/third-parties/google";
import MapWrapper from "./MapWrapper";

const Map = () => {
  return (
    <MapWrapper>
      <GoogleMapsEmbed
        width="100%"
        height="450"
        mode="place"
        zoom="14"
        apiKey={process.env.GOOGLE_MAPS_EMBED_API}
        q="Brainloggers Web & Graphic Designers and IT Consultants"
        loading="eager"
      />
    </MapWrapper>
  );
};

export default Map;
