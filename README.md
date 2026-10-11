# eblefari · feed the party

A portrait-first, roughly 15-minute interactive love story: two sweethearts, exactly two big dogs and five small dogs, three snakes, two reptiles, a very leafy business, and a Lineage 2 guild. Cute chaos, random “wizzy / pizzy / shmizzy” pet chatter, and a guaranteed prosperous ending.

## Play

Open the deployed GitHub Pages URL. The experience is self-paced and works with touch, mouse, or keyboard. No account or payment is required. Progress, chosen names, and sound preference save in this browser’s local storage when available. Clearing browser data resets progress. Sound is optional and starts off.

Six chapters, 36 story beats, six touch activities, twelve pet biographies, branching conversations, an original illustrated household, and a personalised final household report. Choices rejoin the main story so every route honours the happy ending. Timing depends on reading speed and how many pet biographies you inspect; approximately 12–18 minutes is the design target.

The two characters currently use original, editable SVG art and default names Eble & Fari. Names can be changed in the game. A user-supplied reference photo still needs to be attached or otherwise made readable before the likenesses can be matched. Pets are fictional personalities; their care scenes refer to an established household care plan rather than offering veterinary instructions. Lineage 2 is referenced as a hobby; no game assets, logos, or commercial integration are used.

## Run locally

Serve the repository as static files, for example `python -m http.server 8000`, and open `http://localhost:8000`. A web server is necessary for JavaScript ES modules; opening `index.html` directly as a `file://` URL is not supported.

No build step, package installation, backend, analytics, or external API key is required. Google Fonts is optional; local font fallbacks keep the game playable when offline or fonts are blocked.

## Check

Node.js 20+:

```sh
npm run check
npm test
```

Checks cover all branching routes, the complete household, story ordering, save recovery, name escaping, resource limits, raid answers, order matching, and inline art.

## Publish with GitHub Pages

In **Settings → Pages**, choose **Deploy from a branch → main → /(root)** and save. GitHub will serve `index.html` and relative assets under the repository path. Future commits publish automatically. The `.nojekyll` file keeps the project buildless.

Alternatively, the included Pages workflow supports **Settings → Pages → GitHub Actions**. It checks the project, packages just the web files, and deploys to the `github-pages` environment.

## Edit

- `story.js`: chapter text, choices, outcomes and pacing.
- `art.js`: the pet cast and original vector illustrations.
- `app.js`: presentation, activities, audio, dialogs and progress saving.
- `engine.js`: pure state handling and mini-game data.
- `styles.css`: responsive portrait layout, colours and motion. Reduced-motion preferences are honoured.

All functionality is client-side. The only network requests in gameplay are loading the site files and the optional Google Fonts stylesheet/font files.
