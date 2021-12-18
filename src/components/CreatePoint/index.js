import React from "react";
import logo from "../assets/logomapa.png";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <form
        method="get"
        action="https://www.google.com/maps/dir//boca+tintas/@-29.7623227,-57.0900515,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94535b6c1f512125:0x678b8690df99fc91!2m2!1d-57.0812898!2d-29.7678449"
        target="_blank"
      >
        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
          <MapContainer
            center={[-29.767845, -57.0812917]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-29.767845, -57.0812917]}>
              <Popup>
                <img src={logo} alt="Logo" />
              </Popup>
            </Marker>
          </MapContainer>
          <div className="field-group">
            <div className="field"></div>
            <div className="field"></div>
          </div>
        </fieldset>

        <button type="submit">Ver Rota</button>
      </form>
    </div>
  );
};

export default CreatePoint;
