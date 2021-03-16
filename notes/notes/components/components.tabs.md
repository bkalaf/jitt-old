# [tabs]

Horizontal navigation tabs

.Structure
* tabs
    * ul
        * li
            * a

```html
<div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
```

.Alignment
* .tabs.is-centered
* .tabs.is-right

.Icons
```html
<div class="tabs is-centered">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
```

.Sizes
* .tabs.is-small
* .tabs.is-medium
* .tabs.is-large

.With Borders
* .tabs.is-boxed

.Mutually Exclusive'
* .tabs.is-toggle
* .tabs.is-toggle.is-toggle-rounded

.Full
* .tabs.is-fullwidth
