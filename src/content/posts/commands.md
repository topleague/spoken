---
title: Mac Terminal Commands for SEO Audits
description: "List of Commands for Terminal for SEO purposes"
date: 2026-11-21
excerpt: Just a random excerpt …
authorAvatar: https://avatars.githubusercontent.com/u/10867370?v=4&size=64
layout: split
tags:
- popular
- rant
author: Susanta Sahoo
---

# Frequently Used Terminal Commands – SEO Audit

A quick reference to the commands used during the Top League Technologies SEO audit.

## 1. Fetch website content

```bash
curl -Ls https://topleaguetech.com/
```
Fetches webpage HTML, silently following redirects.

```bash
curl -Ls https://topleaguetech.com/ -o ~/Desktop/homepage.html
```
Downloads webpage HTML and saves it locally.

## 2. Inspect HTTP headers

```bash
curl -sI https://topleaguetech.com/
```
Displays HTTP response headers without downloading the page body.

## 3. Inspect robots.txt

```bash
curl -Ls https://topleaguetech.com/robots.txt
```
Displays crawling rules and sitemap location.

## 4. Extract sitemap URLs

```bash
curl -Ls https://topleaguetech.com/sitemap-0.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//'
```
Extracts all page URLs listed in the sitemap.

## 5. Check HTTP status codes

```bash
curl -Ls -o /dev/null -w '%{http_code} %{url_effective}\n' https://topleaguetech.com/
```
Displays the final HTTP status and URL.

## 6. Check sitemap URLs for errors

```bash
curl -Ls https://topleaguetech.com/sitemap-0.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | while read url; do curl -Ls -o /dev/null -w '%{http_code} %{url_effective}\n' "$url"; done
```
Checks HTTP status codes for every sitemap URL.

## 7. Inspect canonical tags

```bash
curl -Ls https://topleaguetech.com/ | grep -oiE '<link[^>]+rel=["\x27]canonical["\x27][^>]*'
```
Extracts the page's canonical link tag.

## 8. Inspect robots meta tags

```bash
curl -Ls https://topleaguetech.com/ | grep -oiE '<meta[^>]+name=["\x27]robots["\x27][^>]*>'
```
Searches HTML for robots directives.

## 9. Count H1 tags

```bash
curl -Ls https://topleaguetech.com/ | grep -oiE '<h1\b' | wc -l
```
Counts H1 elements on a webpage.

## 10. Extract image elements

```bash
curl -Ls https://topleaguetech.com/ | grep -oiE '<img\b[^>]*>'
```
Displays image elements and their attributes.

## 11. Find images without alt attributes

```bash
curl -Ls https://topleaguetech.com/ | grep -oiE '<img\b[^>]*>' | grep -Eiv '\balt=["\x27][^"\x27]+["\x27]'
```
Finds images with missing or empty alt attributes.

## 12. Extract structured data types

```bash
curl -Ls https://topleaguetech.com/ | grep -oE '"@type"[[:space:]]*:[[:space:]]*"[^"]+"'
```
Extracts Schema.org types from JSON-LD markup.

## 13. Count JSON-LD blocks

```bash
curl -Ls https://topleaguetech.com/ | grep -o 'application/ld+json' | wc -l
```
Counts JSON-LD script blocks on a webpage.

## 14. Find internal links

```bash
curl -Ls https://topleaguetech.com/ | grep -oE 'href="[^"]+"'
```
Extracts links from webpage HTML.

## 15. Find HTTP links on your domain

```bash
curl -Ls https://topleaguetech.com/ | grep -oiE 'href="http://topleaguetech\.com[^"]*"'
```
Finds internal links using insecure HTTP.

# Mac Terminal Commands – Technical SEO Audit

A reference to the Terminal commands used during the Top League Technologies website audit.

## 1. Inspect image elements

```bash
curl -Ls https://topleaguetech.com/seo-services/ | grep -oiE '<img\b[^>]*>'
```
Extracts image elements from the SEO Services page.

```bash
curl -Ls https://topleaguetech.com/product-description-writing/ | grep -oiE '<img\b[^>]*>'
```
Extracts image elements from the Product Description Writing page.

```bash
curl -Ls https://topleaguetech.com/seo-article-writing/ | grep -oiE '<img\b[^>]*>'
```
Extracts image elements from the SEO Article Writing page.

```bash
curl -Ls https://topleaguetech.com/seo-copywriting/ | grep -oiE '<img\b[^>]*>'
```
Extracts image elements from the SEO Copywriting page.

## 2. Inspect internal links

```bash
curl -Ls https://topleaguetech.com/internal-linking-anchor-text/ https://topleaguetech.com/noindex-archives-wordpress/ | grep -oiE 'href="[^"]*(internal-linking|noindex)[^"]*"'
```
Finds relevant internal links in the supplied pages.

```bash
for url in \
https://topleaguetech.com/internal-linking-anchor-text/ \
https://topleaguetech.com/noindex-archives-wordpress/ \
https://topleaguetech.com/tag/noindex/; do
  curl -Ls -o /dev/null -w '%{http_code} %{url_effective}\n' "$url"
done
```
Checks HTTP status codes for selected URLs.

## 3. Check internal links for errors

```bash
curl -Ls https://topleaguetech.com/sitemap-0.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | while read page; do curl -Ls "$page" | grep -oE 'href="[^"]+"' | sed -E 's/^href="//;s/"$//' | while read link; do case "$link" in https://topleaguetech.com/*) echo "$link";; http://topleaguetech.com/*) echo "${link/http:/https:}";; /*) echo "https://topleaguetech.com$link";; esac; done; done | sort -u | while read url; do code=$(curl -Ls -o /dev/null -w '%{http_code}' "$url"); [ "$code" != "200" ] && printf '%s %s\n' "$code" "$url"; done
```
Checks discovered internal links for non-200 responses.

## 4. Find insecure HTTP links

```bash
curl -Ls https://topleaguetech.com/sitemap-0.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | while read page; do curl -Ls "$page"; done | grep -oiE 'href="http://topleaguetech\.com[^"]*"'
```
Finds internal links using insecure HTTP.

```bash
curl -Ls https://topleaguetech.com/sitemap-0.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | while read page; do curl -Ls "$page"; done | grep -oiE '(src|href)=["\x27]http://[^"\x27]+' | sort -u
```
Finds HTTP resources that may cause mixed content.

## 5. Check sitemap redirects

```bash
curl -Ls https://topleaguetech.com/sitemap-0.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | while read url; do final=$(curl -Ls -o /dev/null -w '%{url_effective}' "$url"); [ "$url" != "$final" ] && printf 'Sitemap: %s\nFinal:   %s\n' "$url" "$final"; done
```
Identifies sitemap URLs resolving to different final URLs.

## 6. Inspect structured data

```bash
curl -Ls https://topleaguetech.com/ | grep -oiE '<script[^>]+type=["\x27]application/ld\+json["\x27][^>]*>.*</script>'
```
Extracts JSON-LD script markup from the homepage.

```bash
curl -Ls https://topleaguetech.com/ -o ~/Desktop/homepage-schema.html
```
Downloads homepage HTML for local schema inspection.

```bash
open ~/Desktop/homepage-schema.html
```
Opens the saved HTML file.

```bash
curl -Ls https://topleaguetech.com/sitemap-0.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | while read url; do count=$(curl -Ls "$url" | grep -o 'application/ld+json' | wc -l | tr -d ' '); printf '%s — %s schema block(s)\n' "$url" "$count"; done
```
Counts JSON-LD blocks across sitemap URLs.

```bash
curl -Ls https://topleaguetech.com/sitemap-0.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | while read url; do types=$(curl -Ls "$url" | grep -oE '"@type"[[:space:]]*:[[:space:]]*"[^"]+"' | sort -u | tr '\n' ', '); printf '%s — %s\n' "$url" "${types:-No schema types found}"; done
```
Lists detected structured data types across sitemap URLs.

## 7. Save Terminal command history

```bash
history > ~/Downloads/terminal-history.txt
```
Saves the current Terminal history as a text file.

```bash
{
  printf '# Mac Terminal Command History\n\n'
  printf '```bash\n'
  history
  printf '```\n'
} > ~/Downloads/terminal-history.md
```
Exports Terminal history into a Markdown document.

---

## Useful command options

| Command / option | Description |
|---|---|
| `curl` | Transfers data from URLs. |
| `-L` | Follows HTTP redirects. |
| `-s` | Suppresses progress output. |
| `-o` | Saves output to a file. |
| `-w` | Formats additional transfer information. |
| `grep` | Searches text for matching patterns. |
| `-o` | Prints only matching text. |
| `-i` | Ignores case differences. |
| `-E` | Enables extended regular expressions. |
| `sed` | Transforms or replaces text. |
| `wc -l` | Counts lines. |
| `sort -u` | Sorts and removes duplicate lines. |
| `while read` | Processes input one line at a time. |
| `tr` | Translates or deletes characters. |
| `case` | Matches values against specified patterns. |
| `&&` | Runs the next command after success. |
| `\|` | Passes output to another command. |
| `>/dev/null` | Discards command output. |


---

## Useful command options

| Command / option | Description |
|---|---|
| `curl` | Transfers data from URLs. |
| `-L` | Follows HTTP redirects. |
| `-s` | Suppresses progress and error messages. |
| `-I` | Retrieves response headers only. |
| `-o` | Saves output to a file. |
| `-w` | Formats additional transfer information. |
| `grep` | Searches text for matching patterns. |
| `-o` | Prints only matching text. |
| `-i` | Ignores case differences. |
| `-E` | Enables extended regular expressions. |
| `sed` | Transforms or replaces text. |
| `wc -l` | Counts lines. |
| `sort -u` | Sorts and removes duplicate lines. |
| `while read` | Processes input one line at a time. |
| `tr` | Translates or deletes characters. |
| `&&` | Runs the next command after success. |
| `\|` | Passes output to another command. |
