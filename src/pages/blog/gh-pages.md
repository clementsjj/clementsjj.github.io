---
title: 'Github Pages and CNAME'
date: '2018-12-04'
cat: 'Programming'
subject: 'React'
---

Github Pages is a fantastic, quick, and easy way to host a static website. I would like to make a more in-depth post about this at a later time, as there is a lot I would like to include.

But for now, I want to focus on directing my standard github pages url to a different domain.
I use Namecheap for my domain needs. I will try to keep this generalized though.
[Namecheap Documentation Here](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages)

Navigating to our domain management/advanced DNS space, we need to create the following records/files:

- A record for @ pointing to 185.199.108.153
- A record for @ pointing to 185.199.109.153
- A record for @ pointing to 185.199.110.153
- A record for @ pointing to 185.199.111.153
- CNAME record for www pointing to your username.github.io (the username should be replaced with your actual GitHub account username)

The form will look have these inputs with corresponding data:

- Record Type
  - A Record
  - CNAME Record
- Host
  - @
  - www
- IP Address
  - 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - xxx.github.io
- TTL
  - Automatic

Lastly, in you github pages repo, click on settings, scroll to "Github Pages" and add your custom domain in the input box. Click 'save'.

And that should be it!
