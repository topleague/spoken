---
title: Java Script for DuckGo Console
description: "Java Scrip for Custom CSS on DuckDuckGo Console"
date: 2026-10-26
excerpt: Just a random excerpt …
authorAvatar: https://avatars.githubusercontent.com/u/10867370?v=4&size=64
layout: split
tags:
- popular
- rant
author: Susanta Sahoo
---

## JavaScript for DuckDuckGo Console 

```Java
var css = `
/* PASTE ALL YOUR CSS SNIPPETS HERE */

`;

var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
```
