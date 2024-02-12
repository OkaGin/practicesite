import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import '../App.css';

export const Map = () => {
  // 緯度軽度
  const position = [35.568327,139.628342];
  // 初期マップズームレベル
  const zoom = 113;
  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
};