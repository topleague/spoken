---
title: Client Reviews (Astro)
description: "A collection of client reviews on AstroWindy staging site"
date: 2026-10-28
excerpt: Just a random excerpt …
authorAvatar: https://avatars.githubusercontent.com/u/10867370?v=4&size=64
layout: split
tags:
- popular
- rant
author: Susanta Sahoo
---

````astro
  <Testimonials
    title="Words from real customers"
    testimonials={[
      {
        title: 'Accomplished Great Results!', 
        testimonial: `If you are in search of good SEO articles, look no further. At Top League you will find the best team of content writers in the internet. I have been using their services for over a year and have accomplished great results in my online marketing campaign..`,
        rating: 5,
        name: 'Roberto',
        job: 'Founder / Polo Mercantile',
        image: {
          src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
          alt: 'Roberto Image',
        },
      },
      {
        title: 'Always the Best!',        
        testimonial: `Top League have been excellent at presenting their work and work very hard to ensure that the quality of their work is always the best! Thank you Top League! I look forward to continuing our business together.`,
        rating: 5,
        name: 'Michael',
        job: 'Founder / Idea Bubble',
        image: {
          src: 'https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
          alt: 'Michael Image',
        },
      },
      {
        title: 'Very Professional!', 
        testimonial: `Top League is the only company I use for my article writing needs. They are very professional and work with you throughout the project with constant updates. I recommend their services to anyone considering outsourcing their content writing.`,
        rating: 5,
        name: 'Daniel',
        job: ' Founder / Future Success',
        image: {
          src: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80',
          alt: 'Daniel Image',
        },
      },

      {
        title: 'Readily Available!', 
        testimonial: `Top League did a great job writing content for our website. They followed our direction very closely and were readily available for every stage of the project. I would highly recommend their writing skills and will be utilizing their services again. Great Job!`,
        rating: 5,
        name: 'Jason Hamblin',
        job: 'Sr. Executive / L2T Media',
        image: {
          src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
          alt: 'Jason Image',
        },
      },
      
      {
        title: 'Over Delivered!',        
        testimonial: `Top League over delivered on the articles we asked for. They were well written, concise & well optimized for search. We will continue to utilize their services.`,
        rating: 5,
        name: 'Sean',
        job: 'Founder / Acquisition Engine',
        image: {
          src: 'https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
          alt: 'Sean Image',
        },
      },
      
      {
        title: 'An Excellent Job!', 
        testimonial: `The team did an excellent job on content creation for our appliance repair website.They must have done a thorough research on this topic because everything was written very professionally.`,
        rating: 5,
        name: 'Alex Garayev',
        job: 'Founder / SD Appliances',
        image: {
          src: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80',
          alt: 'Alex Garayev Image',
        },
      },
      
    ]}
    callToAction={{
      target: '_blank',
      text: 'Contact Us',
      href: 'https://topleaguetech.com/contact/',
      icon: 'tabler:chevron-right',
    }}
  />
  ````
