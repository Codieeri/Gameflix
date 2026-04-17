async function openGameDetail(id) {
  // Close search dropdown
  document.getElementById('search-dropdown').classList.remove('active');

  const game = findGameById(id);
  if (!game) return;

  const overlay = document.getElementById('game-detail');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  state.selectedGame = game;
  renderDetailCard(game);

  // ✅ DIRECT STEAM SCREENSHOTS (NO API)
  const ssSection = document.getElementById('detail-screenshots-section');

  if (ssSection) {
    ssSection.style.display = '';

    const screenshots = [
      `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.id}/ss_1.jpg`,
      `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.id}/ss_2.jpg`,
      `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.id}/ss_3.jpg`,
      `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.id}/ss_4.jpg`
    ];

    ssSection.querySelector('.detail-screenshots').innerHTML =
      screenshots.map(img => `
        <img src="${img}" 
             alt="Screenshot"
             loading="lazy"
             onclick="openLightbox('${img}')"
             onerror="this.style.display='none'">
      `).join('');
  }
}
