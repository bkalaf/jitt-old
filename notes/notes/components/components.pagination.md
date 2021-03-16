# [pagination]

.Structure
* .pagination
    * .pagination-previous
    * .pagination-next
    * .pagination-list
        * .pagination-link
        * .pagination-ellipsis

```html
<nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
```

.Modifiers
* .pagination.is-centered
* .pagination.is-right

.Styles
* .pagination.is-rounded

.Sizes 
* .pagination.is-small
* .pagination.is-medium
* .pagination.is-large
