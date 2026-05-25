---
layout: default
---

<h1 class="blog-title">Examli Notes</h1>

<h2 class="post-title">My Personal Scratchpad</h2>

<p class="intro-text">Welcome! This is where I drop quick notes and code clips.</p>

### 📑 Recent Posts
{% for post in site.posts %}
* [{{ post.title }}]({{ post.url }})
{% endfor %}
