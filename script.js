const stories = [
  {
    "id": 1,
    "title": "Crash Landing on You",
    "author": "Storybook Studio",
    "genre": "Romance • Drama",
    "synopsis": "A South Korean heiress accidentally lands across the border and meets a reserved officer who risks everything to help her find a way home.",
    "chapter": "The Unexpected Landing",
    "story": "A chance encounter brings two people from different worlds together. As they hide the truth and build trust, they discover that kindness can cross even the strongest borders.",
    "cover": "images/covers/01.svg",
    "image": "images/scenes/01.svg"
  },
  {
    "id": 2,
    "title": "Descendants of the Sun",
    "author": "Storybook Studio",
    "genre": "Romance • Action",
    "synopsis": "A doctor and a special-forces captain meet again while serving in a place where danger and duty are part of everyday life.",
    "chapter": "When Duty Calls",
    "story": "In a remote town, a medical team and peacekeepers work side by side. Their different ideas about saving lives are tested, and respect slowly grows into love.",
    "cover": "images/covers/02.svg",
    "image": "images/scenes/02.svg"
  },
  {
    "id": 3,
    "title": "Goblin (Guardian: The Lonely and Great God)",
    "author": "Storybook Studio",
    "genre": "Fantasy • Romance",
    "synopsis": "An immortal guardian searches for peace until a young woman with an unusual connection changes his long life.",
    "chapter": "The Girl Who Saw Him",
    "story": "A mysterious protector has lived for centuries, carrying memories he cannot escape. One unexpected meeting begins a journey about fate, friendship, and letting go.",
    "cover": "images/covers/03.svg",
    "image": "images/scenes/03.svg"
  },
  {
    "id": 4,
    "title": "Extraordinary Attorney Woo",
    "author": "Storybook Studio",
    "genre": "Legal • Slice of Life",
    "synopsis": "A brilliant young lawyer joins a busy law firm and approaches complicated cases with fresh insight and honesty.",
    "chapter": "A Different Point of View",
    "story": "Each case teaches the team to look beyond first impressions. With support from colleagues, she finds her voice and proves that a different perspective can reveal the truth.",
    "cover": "images/covers/04.svg",
    "image": "images/scenes/04.svg"
  },
  {
    "id": 5,
    "title": "Queen of Tears",
    "author": "Storybook Studio",
    "genre": "Romance • Family Drama",
    "synopsis": "A married couple facing a difficult season must decide whether their relationship can begin again.",
    "chapter": "The Promise Between Us",
    "story": "Behind a polished public image are two people who have forgotten how to speak honestly. A family crisis pushes them to remember the small promises that first connected them.",
    "cover": "images/covers/05.svg",
    "image": "images/scenes/05.svg"
  },
  {
    "id": 6,
    "title": "Vincenzo",
    "author": "Storybook Studio",
    "genre": "Crime • Dark Comedy",
    "synopsis": "A sharp-witted lawyer returns to Korea and joins unlikely allies to challenge a powerful corporation.",
    "chapter": "The Unlikely Team",
    "story": "An old building becomes the center of an unexpected battle. With clever plans and a loyal group of tenants, a mysterious lawyer discovers that justice sometimes needs an unconventional team.",
    "cover": "images/covers/06.svg",
    "image": "images/scenes/06.svg"
  },
  {
    "id": 7,
    "title": "What's Wrong with Secretary Kim?",
    "author": "Storybook Studio",
    "genre": "Romantic Comedy",
    "synopsis": "A confident executive is surprised when his highly capable secretary decides it is time to move on.",
    "chapter": "The Resignation",
    "story": "After years of working together, a resignation makes a self-centered boss reconsider what he values. Office misunderstandings turn into honest conversations and unexpected affection.",
    "cover": "images/covers/07.svg",
    "image": "images/scenes/07.svg"
  },
  {
    "id": 8,
    "title": "Business Proposal",
    "author": "Storybook Studio",
    "genre": "Romantic Comedy",
    "synopsis": "A blind date arranged as a favor becomes complicated when the person across the table is her own company’s CEO.",
    "chapter": "The Wrong Blind Date",
    "story": "A simple plan to scare off a potential match goes hilariously wrong. As fake dating and workplace secrets pile up, both leads learn to be more honest about what they want.",
    "cover": "images/covers/08.svg",
    "image": "images/scenes/08.svg"
  },
  {
    "id": 9,
    "title": "Alchemy of Souls",
    "author": "Storybook Studio",
    "genre": "Fantasy • Adventure",
    "synopsis": "In a magical kingdom, a skilled warrior’s soul becomes connected to a young man learning to master his powers.",
    "chapter": "A Soulbound Secret",
    "story": "Magic, secrets, and ancient rivalries shape the lives of two unlikely partners. Their training becomes a journey of trust as they face a danger that threatens the kingdom.",
    "cover": "images/covers/09.svg",
    "image": "images/scenes/09.svg"
  },
  {
    "id": 10,
    "title": "Hometown Cha-Cha-Cha",
    "author": "Storybook Studio",
    "genre": "Romance • Feel-Good",
    "synopsis": "A city dentist opens a clinic in a seaside village and clashes with a helpful local who seems to know everyone.",
    "chapter": "A Smile by the Sea",
    "story": "In a close-knit coastal town, a newcomer learns that people carry stories behind their smiles. Small acts of kindness slowly make the village feel like home.",
    "cover": "images/covers/10.svg",
    "image": "images/scenes/10.svg"
  },
  {
    "id": 11,
    "title": "Itaewon Class",
    "author": "Storybook Studio",
    "genre": "Coming-of-Age • Drama",
    "synopsis": "A determined young man builds a restaurant business while pursuing justice and a future on his own terms.",
    "chapter": "A Table of His Own",
    "story": "After a painful setback, a young entrepreneur gathers a team of outsiders who believe in second chances. Their small restaurant becomes a symbol of courage and persistence.",
    "cover": "images/covers/11.svg",
    "image": "images/scenes/11.svg"
  },
  {
    "id": 12,
    "title": "True Beauty",
    "author": "Storybook Studio",
    "genre": "Romance • School",
    "synopsis": "A student who learned makeup through online videos navigates friendship, confidence, and first love at a new school.",
    "chapter": "The New Girl",
    "story": "Starting over feels easier when nobody knows your past, but keeping up an image is exhausting. With the help of new friends, she begins to see that confidence is more than appearances.",
    "cover": "images/covers/12.svg",
    "image": "images/scenes/12.svg"
  },
  {
    "id": 13,
    "title": "The Heirs",
    "author": "Storybook Studio",
    "genre": "Romance • School Drama",
    "synopsis": "Students from wealthy families face expectations, rivalry, and complicated feelings at an elite school.",
    "chapter": "Beyond the Family Name",
    "story": "At a school where family names carry enormous weight, two students from different circumstances challenge the rules around them. Friendship and courage matter more than status.",
    "cover": "images/covers/13.svg",
    "image": "images/scenes/13.svg"
  },
  {
    "id": 14,
    "title": "Boys Over Flowers",
    "author": "Storybook Studio",
    "genre": "Romance • School",
    "synopsis": "A hardworking student enters an elite school and stands up to a group of influential boys.",
    "chapter": "The Scholarship Student",
    "story": "When a scholarship student refuses to be intimidated, the school’s social order begins to change. Rivalries turn into friendships, and everyone learns that kindness is stronger than popularity.",
    "cover": "images/covers/14.svg",
    "image": "images/scenes/14.svg"
  },
  {
    "id": 15,
    "title": "My Love from the Star",
    "author": "Storybook Studio",
    "genre": "Fantasy • Romance",
    "synopsis": "A quiet visitor who has lived on Earth for centuries meets a famous actress who disrupts his carefully ordered life.",
    "chapter": "The Neighbor from Another Time",
    "story": "A reserved neighbor wants to keep his unusual past hidden, but a lively actress keeps appearing in his plans. Their growing bond raises questions about time, belonging, and home.",
    "cover": "images/covers/15.svg",
    "image": "images/scenes/15.svg"
  },
  {
    "id": 16,
    "title": "Moon Lovers: Scarlet Heart Ryeo",
    "author": "Storybook Studio",
    "genre": "Historical • Romance",
    "synopsis": "A modern woman finds herself in a royal era and becomes entangled in the lives of princes competing for power.",
    "chapter": "A Moonlit Beginning",
    "story": "Thrown into a court full of ceremony and danger, she tries to protect her heart while learning the rules of a different time. Every choice changes the path ahead.",
    "cover": "images/covers/16.svg",
    "image": "images/scenes/16.svg"
  },
  {
    "id": 17,
    "title": "Reply 1988",
    "author": "Storybook Studio",
    "genre": "Family • Coming-of-Age",
    "synopsis": "Five friends and their families grow up together in a neighborhood where ordinary days become treasured memories.",
    "chapter": "The Street We Grew Up On",
    "story": "Shared meals, teasing, school worries, and first crushes fill a close-knit street. Years later, the smallest moments prove to be the ones worth remembering.",
    "cover": "images/covers/17.svg",
    "image": "images/scenes/17.svg"
  },
  {
    "id": 18,
    "title": "Hospital Playlist",
    "author": "Storybook Studio",
    "genre": "Medical • Friendship",
    "synopsis": "Five longtime friends balance demanding hospital work with music, family, and everyday life.",
    "chapter": "After the Shift",
    "story": "Between busy shifts, the friends make time to play in their band and support one another. Their patients’ stories remind them that care is built from skill and compassion.",
    "cover": "images/covers/18.svg",
    "image": "images/scenes/18.svg"
  },
  {
    "id": 19,
    "title": "King the Land",
    "author": "Storybook Studio",
    "genre": "Romance • Workplace",
    "synopsis": "A hotel heir who dislikes forced smiles meets a cheerful employee known for making guests feel welcome.",
    "chapter": "A Genuine Welcome",
    "story": "Their opposite approaches to hospitality lead to funny misunderstandings. As they work together, both discover the value of sincerity in a world full of appearances.",
    "cover": "images/covers/19.svg",
    "image": "images/scenes/19.svg"
  },
  {
    "id": 20,
    "title": "Strong Girl Bong-soon",
    "author": "Storybook Studio",
    "genre": "Romantic Comedy • Fantasy",
    "synopsis": "A young woman with extraordinary strength takes a job protecting a game-company CEO while pursuing her own dream.",
    "chapter": "More Than Muscle",
    "story": "Her unusual ability creates both trouble and opportunity. With a supportive team and a mystery to solve, she learns that real strength also means protecting the people around her.",
    "cover": "images/covers/20.svg",
    "image": "images/scenes/20.svg"
  },
  {
    "id": 21,
    "title": "Signal",
    "author": "Storybook Studio",
    "genre": "Mystery • Crime",
    "synopsis": "A detective discovers a radio that connects investigators across different times to solve unsolved cases.",
    "chapter": "The Radio at Night",
    "story": "A strange signal links two investigators separated by years. Each clue may save someone, but changing the past carries consequences no one can fully predict.",
    "cover": "images/covers/21.svg",
    "image": "images/scenes/21.svg"
  },
  {
    "id": 22,
    "title": "All of Us Are Dead",
    "author": "Storybook Studio",
    "genre": "Thriller • Survival",
    "synopsis": "Students trapped inside their school must work together when a sudden outbreak turns their campus into a dangerous maze.",
    "chapter": "The Last Classroom",
    "story": "With communication cut off, a group of classmates relies on courage and teamwork to find a safe route. Their choices reveal who they can trust when everything changes.",
    "cover": "images/covers/22.svg",
    "image": "images/scenes/22.svg"
  },
  {
    "id": 23,
    "title": "Our Beloved Summer",
    "author": "Storybook Studio",
    "genre": "Romance • Slice of Life",
    "synopsis": "Two former classmates whose school documentary became popular meet again years after a difficult breakup.",
    "chapter": "The Film We Left Behind",
    "story": "An old film brings two people back into each other’s lives. Revisiting the past helps them understand how they changed and whether a new beginning is possible.",
    "cover": "images/covers/23.svg",
    "image": "images/scenes/23.svg"
  },
  {
    "id": 24,
    "title": "Lovely Runner",
    "author": "Storybook Studio",
    "genre": "Fantasy • Romance",
    "synopsis": "A devoted fan gets an unexpected chance to revisit the past and try to protect someone important to her.",
    "chapter": "One More Chance",
    "story": "A surprising twist gives her another chance to change a painful future. Each attempt teaches her that love, courage, and honest choices matter more than perfect plans.",
    "cover": "images/covers/24.svg",
    "image": "images/scenes/24.svg"
  },
  {
    "id": 25,
    "title": "Doom at Your Service",
    "author": "Storybook Studio",
    "genre": "Fantasy • Romance",
    "synopsis": "A woman facing an uncertain future makes a mysterious deal that changes how she sees life and love.",
    "chapter": "A Deal with Tomorrow",
    "story": "A strange agreement brings two very different people together. As they spend time learning about one another, they begin to question whether fate must always be followed.",
    "cover": "images/covers/25.svg",
    "image": "images/scenes/25.svg"
  },
  {
    "id": 26,
    "title": "Flower of Evil",
    "author": "Storybook Studio",
    "genre": "Mystery • Thriller",
    "synopsis": "A detective begins to question how much she knows about her husband when a case reveals hidden parts of his past.",
    "chapter": "The Secret Behind the Door",
    "story": "A seemingly ordinary family is shaken by a difficult investigation. Trust becomes fragile as old secrets surface, forcing everyone to decide what truth and loyalty mean.",
    "cover": "images/covers/26.svg",
    "image": "images/scenes/26.svg"
  },
  {
    "id": 27,
    "title": "Under the Queen's Umbrella",
    "author": "Storybook Studio",
    "genre": "Historical • Family Drama",
    "synopsis": "A determined queen works to protect her sons while navigating palace politics and strict royal traditions.",
    "chapter": "A Mother's Resolve",
    "story": "Inside the palace, a mother must balance tradition with the needs of her children. Her sharp judgment and fierce care become her strongest tools against hidden schemes.",
    "cover": "images/covers/27.svg",
    "image": "images/scenes/27.svg"
  },
  {
    "id": 28,
    "title": "The King: Eternal Monarch",
    "author": "Storybook Studio",
    "genre": "Fantasy • Romance",
    "synopsis": "A modern emperor discovers a passage between parallel worlds and meets a determined detective.",
    "chapter": "The Door Between Worlds",
    "story": "Two versions of reality begin to overlap, bringing new allies and dangerous questions. The emperor and detective work to understand the connection before both worlds are changed.",
    "cover": "images/covers/28.svg",
    "image": "images/scenes/28.svg"
  },
  {
    "id": 29,
    "title": "Something in the Rain",
    "author": "Storybook Studio",
    "genre": "Romance • Slice of Life",
    "synopsis": "A woman and her younger brother’s longtime friend grow closer while facing family expectations and workplace pressure.",
    "chapter": "A Quiet Kind of Love",
    "story": "Quiet walks, shared meals, and difficult conversations shape a relationship that others do not easily understand. The pair must decide how to protect their happiness while standing up for themselves.",
    "cover": "images/covers/29.svg",
    "image": "images/scenes/29.svg"
  },
  {
    "id": 30,
    "title": "My Demon",
    "author": "Storybook Studio",
    "genre": "Fantasy • Romance",
    "synopsis": "A powerful demon loses an important ability after meeting a guarded heiress whose life is full of complications.",
    "chapter": "The Contract of Fate",
    "story": "A contract brings two guarded people into an uneasy partnership. As they solve problems together, their growing trust challenges what each believed about power, safety, and love.",
    "cover": "images/covers/30.svg",
    "image": "images/scenes/30.svg"
  }
];

const grid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const resultCount = document.getElementById('resultCount');
const emptyMessage = document.getElementById('emptyMessage');
const favoritesOnly = document.getElementById('favoritesOnly');
const themeToggle = document.getElementById('themeToggle');
const dialog = document.getElementById('storyDialog');
const storyDetail = document.getElementById('storyDetail');
let favorites = new Set(JSON.parse(localStorage.getItem('kstory-favorites') || '[]'));
let onlyFavorites = false;
let currentStory = null;
const coverImageIds = { 22: 23, 23: 24, 24: 25, 25: 26, 26: 27, 27: 28, 28: 29, 29: 30 };

const genres = [...new Set(stories.flatMap(s => s.genre.split(' • ')))].sort();
genres.forEach(genre => {
  const option = document.createElement('option');
  option.value = genre;
  option.textContent = genre;
  genreFilter.appendChild(option);
});

function getFallbackAsset(folder, id) {
  return `${folder}${String(id).padStart(2, '0')}.svg`;
}

function getPreferredAsset(folder, id) {
  if (folder === 'images/covers/' && id === 30) return getFallbackAsset(folder, id);
  const imageId = folder === 'images/covers/' ? (coverImageIds[id] || id) : id;
  return `${folder}k${imageId}.jpg`;
}

function getImageMarkup({ src, fallback, alt, className = '', loading = 'lazy' }) {
  const flatFallback = src.replace(/^images\/(covers|scenes)\//, '');
  return `<img class="${className}" src="${src}" data-fallback="${fallback}" data-flat-fallback="${flatFallback}" alt="${alt}" loading="${loading}" onerror="if(!this.dataset.flatTried){this.dataset.flatTried='true';this.src=this.dataset.flatFallback;}else{this.onerror=null;this.src=this.dataset.fallback;}">`;
}

function renderBooks() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedGenre = genreFilter.value;
  const filtered = stories.filter(story => {
    const searchable = `${story.title} ${story.genre} ${story.author} ${story.synopsis}`.toLowerCase();
    const matchesQuery = searchable.includes(query);
    const matchesGenre = selectedGenre === 'all' || story.genre.split(' • ').includes(selectedGenre);
    const matchesFavorite = !onlyFavorites || favorites.has(story.id);
    return matchesQuery && matchesGenre && matchesFavorite;
  });
  grid.innerHTML = '';
  filtered.forEach(story => {
    const card = document.createElement('article');
    const coverSrc = getPreferredAsset('images/covers/', story.id);
    const coverFallback = getFallbackAsset('images/covers/', story.id);
    card.className = 'book-card';
    card.innerHTML = `
      <div class="cover-wrap">
        ${getImageMarkup({ src: coverSrc, fallback: coverFallback, alt: `Cover for ${story.title}` })}
        <button class="favorite-button ${favorites.has(story.id) ? 'active' : ''}" data-favorite="${story.id}" aria-label="${favorites.has(story.id) ? 'Remove from favorites' : 'Add to favorites'}" aria-pressed="${favorites.has(story.id)}">${favorites.has(story.id) ? '♥' : '♡'}</button>
      </div>
      <div class="card-content">
        <span class="genre-label">${escapeHTML(story.genre)}</span>
        <h3>${escapeHTML(story.title)}</h3>
        <p class="author">By ${escapeHTML(story.author)}</p>
        <a class="read-button" href="${location.hostname.endsWith('github.io') ? `story-${story.id}.html` : `stories/story-${story.id}.html`}">Read story ↗</a>
      </div>`;
    grid.appendChild(card);
  });
  resultCount.textContent = filtered.length;
  emptyMessage.hidden = filtered.length !== 0;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
  localStorage.setItem('kstory-favorites', JSON.stringify([...favorites]));
  renderBooks();
  if (currentStory && currentStory.id === id && dialog.open) renderStory(currentStory);
}

function renderStory(story) {
  currentStory = story;
  const coverSrc = getPreferredAsset('images/covers/', story.id);
  const coverFallback = getFallbackAsset('images/covers/', story.id);
  storyDetail.innerHTML = `
    <div class="story-detail">
      <div>${getImageMarkup({ src: coverSrc, fallback: coverFallback, alt: `Cover for ${story.title}`, className: 'detail-cover', loading: 'eager' })}<div class="progress-track"><div id="progressBar" class="progress-bar"></div></div><p id="progressLabel" class="progress-label">Reading progress: 0%</p></div>
      <article class="detail-copy">
        <p class="eyebrow">STORYBOOK ${String(story.id).padStart(2,'0')} · ONE CHAPTER</p>
        <h2>${escapeHTML(story.title)}</h2>
        <p class="detail-meta">By ${escapeHTML(story.author)} &nbsp;·&nbsp; ${escapeHTML(story.genre)}</p>
        <div class="synopsis-box"><strong>Synopsis</strong><p id="synopsisText">${escapeHTML(story.synopsis)}</p><button id="synopsisToggle" class="secondary-button" type="button">Hide synopsis</button></div>
        <h3>${escapeHTML(story.chapter)}</h3>
        ${getImageMarkup({ src: story.image, fallback: story.image, alt: `Decorative story scene for ${story.title}`, className: 'support-image', loading: 'lazy' })}
        <p class="story-text">${escapeHTML(story.story)}</p>
        <p class="story-text">As the day comes to a close, the characters understand that the next chapter of life is not always written for them. Sometimes it begins with one brave decision, one honest conversation, or one person choosing to stay.</p>
        <div class="detail-actions">
          <button id="likeStory" type="button">${favorites.has(story.id) ? '♥ Liked' : '♡ Like this story'}</button>
          <button id="markRead" type="button">Mark as read ✓</button>
          <button id="nextStory" type="button">Next story →</button>
        </div>
      </article>
    </div>`;
  const synopsisText = document.getElementById('synopsisText');
  document.getElementById('synopsisToggle').addEventListener('click', event => {
    const hidden = synopsisText.hidden;
    synopsisText.hidden = !hidden;
    event.currentTarget.textContent = hidden ? 'Hide synopsis' : 'Show synopsis';
  });
  document.getElementById('likeStory').addEventListener('click', () => toggleFavorite(story.id));
  document.getElementById('markRead').addEventListener('click', (event) => {
    const bar = document.getElementById('progressBar');
    const label = document.getElementById('progressLabel');
    bar.style.width = '100%'; label.textContent = 'Reading progress: 100% · Completed!';
    event.currentTarget.textContent = 'Read ✓';
  });
  document.getElementById('nextStory').addEventListener('click', () => {
    const next = stories[story.id % stories.length];
    renderStory(next);
    storyDetail.scrollIntoView({behavior:'smooth', block:'start'});
  });
}

grid.addEventListener('click', event => {
  const favoriteButton = event.target.closest('[data-favorite]');
  const readButton = event.target.closest('[data-read]');
  if (favoriteButton) toggleFavorite(Number(favoriteButton.dataset.favorite));
  if (readButton) {
    const story = stories.find(item => item.id === Number(readButton.dataset.read));
    renderStory(story);
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }
});
searchInput.addEventListener('input', renderBooks);
genreFilter.addEventListener('change', renderBooks);
favoritesOnly.addEventListener('click', () => {
  onlyFavorites = !onlyFavorites;
  favoritesOnly.setAttribute('aria-pressed', String(onlyFavorites));
  favoritesOnly.textContent = onlyFavorites ? '♥ Showing favorites' : '♡ Favorites only';
  renderBooks();
});
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  themeToggle.textContent = dark ? '☀ Light mode' : '☾ Dark mode';
  localStorage.setItem('kstory-theme', dark ? 'dark' : 'light');
});
document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
if (localStorage.getItem('kstory-theme') === 'dark') {
  document.body.classList.add('dark'); themeToggle.textContent = '☀ Light mode';
}
renderBooks();
