import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"

const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

function MapView() {
    const locations = [
        {lat: -21.98380515399413,  lng: -47.88154783219323, label: "UFSCar"},
        {lat: -22.04056454020965,  lng: -47.87627693432603, label: "Serasa"},
        {lat: -22.023993953443494, lng: -47.89439731869749, label: "ONOVOLAB"},
        {lat: -22.041586850064217, lng: -47.87598668465902, label: "Faber-Castell"}
    ]
    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true); // Adiciona estado de carregamento
  
    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (location) => {
            setPosition([location.coords.latitude, location.coords.longitude]);
            setLoading(false); // Marca que terminou de carregar
            console.log("Localização obtida!");
          },
          (error) => {
            console.error("Erro ao obter localização:", error);
            setPosition([-22.01344210162815, -47.88730337340149]); // Localização padrão (São Carlos)
            setLoading(false);
          }
        );
      } else {
        console.error("Geolocalização não suportada");
        setPosition([-22.01344210162815, -47.88730337340149]);
        setLoading(false);
      }
    }, []);
  
    return (
      <div>
        {loading ? ( // Exibe "Carregando..." enquanto espera a posição
          <p>Carregando localização...</p>
        ) : (
            <MapContainer
                center={position}
                zoom={13}
                style={{ width: "100%", height: "50vh", maxWidth: "600px", maxHeight: "400px"}}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                <Popup>Você está aqui!</Popup>
                </Marker>
                {locations.map((location, index) => (
                    <Marker key={index} position={[location.lat, location.lng]}>
                    <Popup>{location.label}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        )}
      </div>
    );
  }

export default MapView;
