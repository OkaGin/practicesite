import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import '../App.css';
import L from 'leaflet'
L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/'

export const Map = () => {
  // 緯度軽度
  const position = [35.56818008804849, 139.62764069583];
  // 初期マップズームレベル
  const zoom = 20;
  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
         タナカ室内装飾
        </Popup>
      </Marker>
    </MapContainer>
  )
};