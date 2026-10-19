const isGitHubPages = location.hostname.endsWith('github.io');

if (isGitHubPages) {
  const storyId = Number(location.pathname.match(/story-(\d+)\.html$/)?.[1]);
  if (storyId) {
    const coverImageIds = { 22: 23, 23: 24, 24: 25, 25: 26, 26: 27, 27: 28, 28: 29, 29: 30 };
    const cover = document.querySelector('.story-page-cover img');
    const scene = document.querySelector('.story-page-scene');
    const stylesheet = document.querySelector('link[rel="stylesheet"]');

    stylesheet.href = 'style.css';
    document.querySelectorAll('a[href^="../index.html"]').forEach(link => {
      link.href = link.getAttribute('href').replace('../index.html', 'index.html');
    });

    if (cover) cover.src = storyId === 30 ? '30.svg' : `k${coverImageIds[storyId] || storyId}.jpg`;
    if (scene) scene.src = `${String(storyId).padStart(2, '0')}.svg`;
  }
}
