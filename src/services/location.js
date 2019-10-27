export default {
  getLatLng() {
    return new Promise(resolve => {
      if (!navigator.geolocation) resolve(false);

      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        pos =>
          resolve({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }),
        () => resolve(false)
      );
    });
  }
};
