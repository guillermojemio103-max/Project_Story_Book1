K-DRAMA STORYBOOK LIBRARY — SEPARATE HTML PAGES

HOW TO OPEN
1. Extract this ZIP.
2. Open the kdrama_storybook folder in VS Code.
3. Run index.html with Live Server.
4. Click "Read story" on any card to open that story's separate HTML page.

PUBLISH ON GITHUB PAGES
1. Upload the files to the repository root, beside index.html.
2. Keep filenames exactly as shown; GitHub Pages uses case-sensitive paths.
3. The site supports the original folders and a flat repository where story pages and image files are beside index.html.
4. Open the repository Pages URL, then use "Read story" to open a story.

FOLDER STRUCTURE
- index.html: main story library
- stories/story-1.html through stories/story-30.html: separate pages for each story
- style.css: shared design, responsive layout, and dark theme
- script.js: story library, search, genre filter, favorites
- images/covers/: 30 cover illustrations
- images/scenes/: 30 story scene illustrations

Cover photos k1.jpg through k21.jpg and k23.jpg through k30.jpg are matched to their story titles. The extra k22.jpg is a duplicate Signal poster and is intentionally not used. My Demon uses its matching SVG cover. Story scene illustrations use the numbered SVG files.

story-pages.js adjusts paths for the flat GitHub upload, while the nested images and stories folders continue to work locally.
