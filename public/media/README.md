# /media/ — Hosting для иллюстраций к статьям FolkUp

Static hosting для иллюстраций статей цикла «Что осталось за переплётом» и других FolkUp content.

**Public URLs:** \`https://folkup.app/media/{path}\`

**Структура:**
- \`articles/YYYY-MM-DD-{slug}/\` — иллюстрации к одной статье
- \`forniti/{slug}/\` — character art per fornit (future)

**Назначение:** Cover images для Telegraph longreads, og-preview изображения, иллюстрации для статей цикла. Public access, CC BY-NC-SA 4.0 если не указано иное per article.

**Hosting:** CF Pages auto-deploy on push to main. Future migration к CF R2 + media.folkup.app subdomain (10GB free tier).

**См. также:** `vault/memory/forniti-gallery/` — canonical archive всех Alice images.
