satin
=====

Simple and elegant theme for Ghost Blog.

### Installation

Simply download the complete project or git clone directly into your ghost themes directory.  Stop and restart ghost and 
the theme should be available in the theme drop down list.

Feel free to modified and customize to fit your liking.

### Customization

Feel free to customize theme as you like.  The main blog image is hard-coded on the default.hbs page, to add a multi-background fade to it.  Fade and alignment change be changed to suit background image and style.

```javascript
    {{#if @blog.cover}}
    .aside_satin {
      background:
      -moz-linear-gradient(top, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0)),
      -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.8),  rgba(0, 0, 0, 0)),
      url('{{@blog.cover}}');
      background:
      -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0)),
      -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.8),  rgba(0, 0, 0, 0)),
      url('{{@blog.cover}}');
      background:
      linear-gradient(top, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0)),
      linear-gradient(bottom, rgba(0, 0, 0, 0.8),  rgba(0, 0, 0, 0)),
      url('{{@blog.cover}}');
      background-size: auto 100%;
      background-position: center top;
      background-repeat: no-repeat;
    }
    @media screen and (max-width: 768px) {
      .aside_satin { background: black; }
    }
    {{/if}}
```


### License
MIT License
