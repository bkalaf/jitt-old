# [nesting]

.Structure
* .columns
    * .column
        * .columns

```html
<div class="columns">
  <div class="column">
    <p class="bd-notification is-info">First column</p>
    <div class="columns is-mobile">
      <div class="column">
        <p class="bd-notification is-info">First nested column</p>
      </div>
      <div class="column">
        <p class="bd-notification is-info">Second nested column</p>
      </div>
    </div>
  </div>
  <div class="column">
    <p class="bd-notification is-danger">Second column</p>
    <div class="columns is-mobile">
      <div class="column is-half">
        <p class="bd-notification is-danger">50%</p>
      </div>
      <div class="column">
        <p class="bd-notification is-danger">Auto</p>
      </div>
      <div class="column">
        <p class="bd-notification is-danger">Auto</p>
      </div>
    </div>
  </div>
</div>
```
