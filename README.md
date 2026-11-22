# Lang Ming — Portfolio

Static portfolio published with GitHub Pages. No package installation or build step is required.

## Live pages

- [Version index](https://soberam22.github.io/)
- [AI-generated portfolio](https://soberam22.github.io/ai-generated-page.html)
- [Personally directed homepage](https://soberam22.github.io/me-designed-page.html)
- [Formal portfolio](https://soberam22.github.io/formal-page.html)

The two coursework report URLs above are permanent entry points. Keep these HTML files at the repository root.

## Structure

- Root HTML files: entry points and archived studio version.
- `profile.js`: shared biography and experience.
- `project-s.js`: Project S chapter content; distinguish proposals from implemented work.
- `media.js`, `assets/`: photo metadata, photographs, audio and research poster.
- `identity.*`, `atmosphere.js`: personal homepage styling and interactions.
- `formal.*`: formal portfolio presentation.
- `dino/`: embedded Chromium runner and its BSD license.
- `THIRD_PARTY_NOTICES.txt`: source attribution.

## Preview and deployment

Run `python -m http.server 8000` from the repository and open http://localhost:8000/.
Use HTTP rather than opening files directly to test Web Audio.

GitHub Pages publishes `main` from `/` (root). Keep `.nojekyll`.
After a push, wait for the Pages build to finish and verify the public URLs.
No secrets, coursework reports, raw private source material or browser profiles belong in this repository.

## Release checks

Check all three pages on desktop and at 390px width; inspect console and failed network requests.
Check photos and their dialog, six Project S tabs and keyboard navigation, audio playback and spectrum pause/reset, and the embedded game's start/jump controls.
Audio must start only after user interaction.

## Known limitations

Some original photos exceed 20 MB, so first visits and enlarged photos can be slow on mobile connections. A future optimization should add web-sized derivatives while retaining originals intentionally.
Headless audio tests establish playback progression, not perceived sound quality.

## Attribution and content

See `THIRD_PARTY_NOTICES.txt` and `dino/LICENSE`. There is no blanket license granting reuse of personal photographs, music or all site content.
