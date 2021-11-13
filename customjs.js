let map_style = {
    fillColor: "blue",
    color: "black",
    weight: 1.5,
    opacity: 0.3,
    fillOpacity: 0.5,
  };
  let mapdiv = document.getElementById('my_map')

  let map = L.map(mapdiv).setView([-1.0, 38.817223], 5.5);
  let countyLayer = L.geoJson(kenya_counties, { style: map_style }).addTo(
    map
  );