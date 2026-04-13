"use client";

import { useEffect } from "react";

export default function GetUserLocation() {

  useEffect(() => {

    // Already saved location check karo
    const savedLat = localStorage.getItem("userLat");
    const savedLng = localStorage.getItem("userLng");

    if (savedLat && savedLng) {
      console.log("Location already saved");
      return;
    }

    // Browser support check
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    // Location permission popup trigger
    navigator.geolocation.getCurrentPosition(

      (position) => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        // Save location locally
        localStorage.setItem("userLat", latitude);
        localStorage.setItem("userLng", longitude);

      },

      (error) => {
        console.log("Permission denied:", error.message);
      }

    );

  }, []);

  return null;
}