# [notification]

.Structure
* div.notification
    * button.delete

.Colors
* .notification.is-primary
* .notification.is-primary.is-light

.Javascript
```js
document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
});
```