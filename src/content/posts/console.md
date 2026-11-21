---
title: Google Search Console and Google Analytics Terminal Commands
description: "Working Terminal commands used during the Google Search Console and Google Analytics audit."
date: 2026-11-21
excerpt: A quick reference to Google API authentication and Search Console commands.
authorAvatar: https://avatars.githubusercontent.com/u/10867370?v=4&size=64
layout: split
tags:
  - seo
  - google-search-console
  - google-analytics
  - terminal
author: Susanta Sahoo
---

# Google Search Console & Google Analytics – Terminal Commands

A quick reference to the commands used during the Top League Technologies SEO audit.

## 1. Google authentication

```bash
gcloud auth application-default print-access-token >/dev/null && echo "Authentication successful"
```

Verifies Google API authentication is working.

## 2. Generate an access token

```bash
TOKEN=$(gcloud auth application-default print-access-token)
```

Generates an OAuth access token for Google API requests.

## 3. List accessible Google Search Console properties

```bash
TOKEN=$(gcloud auth application-default print-access-token) && curl -sS -H "Authorization: Bearer $TOKEN" "https://searchconsole.googleapis.com/webmasters/v3/sites"
```

Lists Search Console properties accessible to the authenticated account.

## Notes

## Audit environment

- Website: Top League Technologies
- Search Console: Verified website property
- Analytics: Two GA4 properties configured
- Authentication: Google Cloud Application Default Credentials

**Scope:** This list contains the commands previously identified as successful. The GA4 account-list command encountered an error and has been excluded. No GA4 data-retrieval command is included because its exact successful syntax is not available in the recorded audit history.
