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
