# image-gallery

A straight forward to use, simple image gallery.


## Features

* Layouting (google images style)
* Lazy loading (via `data-full-src`)
* Responsive


## Usage

Add the style sheet:

```html
<link rel="stylesheet" href="image-gallery/dist/image-gallery.css">
```

Wrap your images inside a `.image-gallery` container:

```html
<div class="image-gallery" style="max-width: 400px">
  <img src="fixtures/1-small.jpg" data-full-src="fixtures/1-large.jpg">
  <!--
    data-full-src is optional
  -->
  <img src="fixtures/2-small.jpg">
  <!--
    may specify pre-computed dimensions
    via data-dimensions="width,height"
  -->
  <img src="fixtures/3-small.jpg" data-dimensions="400,100" data-full-src="fixtures/3-large.jpg">
</div>
```

Instantiate the gallery:

```javascript
<script type="text/javascript">
  var gallery = ImageGallery('.image-gallery', {
    use: [
      ImageGallery.LazyLoading,
      ImageGallery.Responsive
    ]
  });
</script>
```


## License

MIT