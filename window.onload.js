window.onload = () => {
  fetch('http://YOUR_ESP32_IP/sensor-data')
    .then(res => res.json())
    .then(data => {
      document.getElementById('moisture').innerText = data.moisture + '%';
      document.getElementById('light').innerText = data.light + ' lux';
      document.getElementById('temp').innerText = data.temp + ' °C';
      document.getElementById('humidity').innerText = data.humidity + '%';
      document.getElementById('diagnosis').innerText = data.ai_diagnosis;
    })
    .catch(err => {
      console.error('Failed to load data:', err);
    });
};
