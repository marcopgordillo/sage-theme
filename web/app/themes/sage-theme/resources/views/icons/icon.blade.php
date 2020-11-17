@php
  $iconUrl = "images/icons-sprite.svg#{$name}"
@endphp
<svg class="{{ $classes }}" fill="none" stroke="currentColor">
  <use xlink:href="@asset($iconUrl)" />
</svg>
