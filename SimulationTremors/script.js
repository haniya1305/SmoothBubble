document.addEventListener('DOMContentLoaded', () => {
    const simulatedCursor = document.getElementById('simulatedCursor');
    const tremorIntensity = 15;
    const speed = 0.15;
  
    let noiseOffsetX = 0;
    let noiseOffsetY = 1000;
  
    document.addEventListener('mousemove', (event) => {
      noiseOffsetX += speed;
      noiseOffsetY += speed;
  
      const noiseX = (Math.random() - 0.5) * tremorIntensity;
      const noiseY = (Math.random() - 0.5) * tremorIntensity;
  
      console.log('Adjusted X:', event.clientX + noiseX, 'Adjusted Y:', event.clientY + noiseY);
  
      simulatedCursor.style.transform = `translate(${event.clientX + noiseX}px, ${event.clientY + noiseY}px)`;
    });
  });
  