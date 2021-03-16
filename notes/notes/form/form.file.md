# [file]

.parts
* .file: main container
    * .file-label: interactive part
        * .file-input: hidden
        * .file-cta: upload cta
            * .file-icon: optional icon
            * .file-label: Choose file text
        * .file.name: container for name

```html
<div class="file">
  <label class="file-label">
    <input class="file-input" type="file" name="resume">
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
  </label>
</div>
```

.Modifiers
* .file.has-name
* .file.is-right
* .file.is-fullwidth
* .file.is-boxed

.Colors
* .is-primary
* ...
* .is-dark
* .is-white
* .is-black

.Sizes
* .file.is-small
* .file.is-medium
* .file.is-normal
* .file.is-large

.Alignment
* .file.is-centered
* .file.is-right

.Javascript
```html
<div id="file-js-example" class="file has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume">
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
    <span class="file-name">
      No file uploaded
    </span>
  </label>
</div>

<script>
  const fileInput = document.querySelector('#file-js-example input[type=file]');
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector('#file-js-example .file-name');
      fileName.textContent = fileInput.files[0].name;
    }
  }
</script>
```
