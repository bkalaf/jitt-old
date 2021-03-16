# [tag]

.Structure
* span.tag

.Colors
* span.tag.is-dark
* span.tag.is-primary
* span.tag.is-dark.is-light
* span.tag.is-dark.is-light

.Sizes
* span.tag.is-normal
* span.tag.is-medium
* span.tag.is-large

.Modifiers
* span.tag.is-rounded
* a.tag.is-delete

```html
<span class="tag is-success">
  Bar
  <button class="delete is-small"></button>
</span>
<span class="tag is-warning is-medium">
  Hello
  <button class="delete is-small"></button>
</span>
<span class="tag is-danger is-large">
  World
  <button class="delete"></button>
</span>
```

.List of tags
* div.tags 

.Attach Tags Together
* div.tags.has-addons

.Attachs Tags Containers Together
* .field.is-grouped.is-grouped-multiline

```html
<div class="field is-grouped is-grouped-multiline">
  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">npm</span>
      <span class="tag is-info">0.9.1</span>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">build</span>
      <span class="tag is-success">passing</span>
    </div>

  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">chat</span>
      <span class="tag is-primary">on gitter</span>
    </div>
  </div>
</div>
```
