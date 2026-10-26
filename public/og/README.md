# PromptLaz Social / OG Asset Kit

Brand idea: **Know what to ask. Build better prompts.**

The pack uses the icon image supplied by the product owner and a matching abstract visual background. It includes separate layouts where platform aspect ratios and safe areas differ. It does not imply that each platform will display previews identically; actual crops and caching depend on each platform.

## Files and intended use

| File | Dimensions | Use |
|---|---:|---|
| `og-image-1200x630.png` | 1200 × 630 | Primary Open Graph card for site URLs; Facebook, WhatsApp, Messenger, Discord, Slack and other generic link unfurls where OG tags are used |
| `linkedin-link-share-1200x627.png` | 1200 × 627 | LinkedIn link share image (recommended 1.91:1 family) |
| `x-summary-large-image-1200x600.png` | 1200 × 600 | X large image card (2:1) |
| `social-landscape-1200x675.png` | 1200 × 675 | General 16:9 post / video-preview artwork |
| `social-square-1080x1080.png` | 1080 × 1080 | Square post artwork for social feeds |
| `instagram-threads-facebook-feed-1080x1350.png` | 1080 × 1350 | Portrait feed image (4:5) for Instagram, Threads and suitable Facebook feed use |
| `stories-reels-shorts-whatsapp-status-1080x1920.png` | 1080 × 1920 | Vertical story/status/reel/Shorts creative; platform UI can obscure top/bottom, so keep essential text central |
| `pinterest-pin-1000x1500.png` | 1000 × 1500 | Pinterest-style tall pin |
| `youtube-thumbnail-1280x720.png` | 1280 × 720 | YouTube video thumbnail / launch explainer thumbnail |
| `youtube-channel-banner-2560x1440.png` | 2560 × 1440 | YouTube channel banner; text and logo are placed in the central safe area |
| `facebook-page-cover-1640x624.png` | 1640 × 624 | Facebook page cover |
| `x-header-1500x500.png` | 1500 × 500 | X profile header |
| `linkedin-company-cover-1128x191.png` | 1128 × 191 | LinkedIn company page banner |
| `website-hero-banner-1920x800.png` | 1920 × 800 | Website / landing-page hero artwork |
| `brand-mark-1024x1024.png` | 1024 × 1024 | Large square brand mark / master avatar |
| `social-avatar-800x800.png` | 800 × 800 | Social profile image |
| `brand-mark-512x512.png` | 512 × 512 | High-resolution app / PWA icon |
| `pwa-icon-192x192.png` | 192 × 192 | PWA install icon |
| `apple-touch-icon-180x180.png` | 180 × 180 | Apple touch icon |
| `favicon-48x48.png`, `favicon-32x32.png`, `favicon-16x16.png`, `favicon.svg` | Various | Browser tabs and bookmarks |
| `social-meta-tags.html` | — | Sample Open Graph and X metadata (replace placeholder hostname) |
| `site.webmanifest` | — | PWA manifest sample |

## Implementation notes

1. Put `og-image-1200x630.png` at a publicly reachable, absolute HTTPS URL and set `og:image` to that URL in the server-rendered HTML `<head>`.
2. Use `social-meta-tags.html` as a starting point; replace `YOURDOMAIN`, adjust the canonical URL, and host the referenced files at the paths used in the snippet.
3. Social network crawlers may cache old previews. After publishing, validate the live page using the platforms' link preview/debug tools and refresh their cache if needed.
4. The YouTube banner uses a central title/logo composition to respect its safe area. Preview on mobile, desktop and TV before publishing.
5. This is a visual asset pack, not an in-app installation. The files still need to be copied into the actual project and referenced from the metadata/layout.
6. Brand/domain/trademark clearance has not been performed by this asset generation.

## Reference sizing guidance

- LinkedIn says shared website images should be at least 1200 × 627, with a recommended 1.91:1 ratio: https://www.linkedin.com/help/linkedin/answer/a521928
- YouTube recommends a channel banner of at least 2560 × 1440: https://support.google.com/youtube/answer/12950272
- Facebook link share guidance commonly uses 1200 × 630, 1.91:1; verify the live URL with the official Sharing Debugger after publishing: https://developers.facebook.com/tools/debug/

Social platform UI and requirements can change, and some placements crop differently. Treat this as a comprehensive starter brand kit; check each target placement before final publication.
