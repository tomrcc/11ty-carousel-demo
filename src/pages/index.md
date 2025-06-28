---
_schema: default
title: Home
seo:
  page_description: >-
    A starting point for developers looking to build a website with Eleventy,
    using Bookshop components in CloudCannon. Create your own copy, and start
    creating your own components to use in the CloudCannon CMS.
  canonical_url:
  featured_image:
  featured_image_alt:
  author_twitter_handle:
  open_graph_type:
  no_index: false
layout: layouts/component-page.html
permalink: /
eleventyExcludeFromCollections: false
content_blocks:
  - _bookshop_name: swiper-carousel
    heading:
      heading_text: Hello Carousel
      text_color: '#a0a2ff'
    slides:
      - background_color: '#F2E2D2'
        slide_content:
          slide_heading:
            heading_text: Bob Ross 1
            text_color: '#333333'
          text:
            markdown_content: >-
              I lived in *Alaska* for many, many years. Such a temptation to do
              a little bit more. All we want to leave is the value in the
              canvas. Let's go on up here and let's get started. It doesn't
              matter in our world where it goes.


              The round brush is so fun, let's go back to that. Let it sort of
              bounce around and play. I'm a nature freak. Go out and spend some
              time talking to a tree. Let some little things just shine through.
            text_color: '#333333'
      - background_color: '#c8d5b9'
        slide_content:
          slide_heading:
            heading_text: Bob Ross 2
            text_color: '#333333'
          text:
            markdown_content: >-
              Just give it a little hue here. Let us know, and we'll do some
              more crazy things for you. Just make little X's, and we'll put in
              a happy little sky. Pretend that if you're not careful your hand
              will literally just float away. Don't let this get too strong or
              it'll stand out.

              I look for easy ways to do things. This is a very individual
              thing, painting is. Sneaky cloud running around here at night!
              We're like drug dealers -- we come into town and get people
              absolutely addicted to painting. You have to make an almighty
              decision.
            text_color: '#808080'
      - background_color: '#c8d5b9'
        slide_content:
          slide_heading:
            heading_text: Bob Ross 3
            text_color: '#ffffff'
          text:
            markdown_content: >-
              I think you'll be tickled with what you can do with something that
              starts out looking this bad. When the birds take over, I'll have
              friends! I want this one a little bit darker. Absolutely no
              limits! Don't think there's anybody that doesn't like mountains.
              Well, maybe there is.

              Always doing the things furthest away first and working forward.
              It'll just eat up all the crimson in the world. Be careful, be
              careful. You have to make all these big decisions when you have
              power. Always start with the color in here and then work outward.
            text_color: '#333232'
  - _bookshop_name: hero
    background_color: '#ffffff'
    heading:
      heading_text: Eleventy Bookshop Starter
      heading_gradient_color: '#a0a2ff'
    subheading:
      markdown_content: >-
        A starting point for **developers looking to build a website with
        Eleventy, using Bookshop components in CloudCannon**. Create your own
        copy, and start creating your own components to use in the CloudCannon
        CMS.
      color: '#393939'
    image:
      image_path: /assets/images/blog/featured-image-5.jpg
      alt_text: An image
    buttons:
      - _bookshop_name: buttons/primary
        button_text: GitHub
        button_icon: fa-brands fa-github
        button_link: https://github.com/CloudCannon/eleventy-starter/tree/main
        background_color: '#034ad8'
        hover_brightness: 0.85
        text_color: '#ffffff'
      - _bookshop_name: buttons/secondary
        button_text: CloudCannon
        button_icon: CloudCannon
        button_link: https://www.cloudcannon.com
        text_color: '#034ad8'
        hover_brightness: 0.95
  - _bookshop_name: left-right
    background_color: '#ffffff'
    heading:
      heading_text: Keep what you need. Delete the rest.
      color: '#393939'
    text:
      markdown_content: >-
        To help save you time, some features are set up in this template, like:

        -
        [Bookshop](https://cloudcannon.com/documentation/guides/bookshop-eleventy-guide/)

        - Blog with pagination, tags and
        [snippets](https://cloudcannon.com/documentation/articles/snippets-using-eleventy-shortcodes/)

        - [Image optimization](https://www.11ty.dev/docs/plugins/image/)

        - SEO Controls

        - Responsive header and footer

        - [Font Awesome
        Icons](https://fontawesome.com/search?o=r&m=free&s=solid)

        - Schemas for adding new pages

        - Editable color pallete

        - Markdown styles

        - CloudCannon configuration
      color: '#393939'
    image:
      image_path: /assets/images/undraw-hello.svg
      alt_text: An image
    flipped: true
    button:
      _bookshop_name: buttons/primary
      button_text: GitHub
      button_icon: fa-brands fa-github
      button_link: https://github.com/CloudCannon/eleventy-starter/tree/main
      background_color: '#034ad8'
      hover_brightness: 0.85
      text_color: '#ffffff'
---
