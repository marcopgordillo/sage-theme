@extends('layouts.app')

@section('content')
  @include('partials.page-header')

  @if (!have_posts())
    <div class="alert alert-warning">
      {{ __('Sorry, no results were found.', 'sage') }}
    </div>
    {!! get_search_form(false) !!}
  @endif

  @while (have_posts()) @php the_post() @endphp
    @include('partials.content-'.get_post_type())
    @include('icons::icon', [
      'name' => 'youtube',
      'classes' => 'h-6 w-6 text-red-500'
    ])
  @endwhile

  {!! get_the_posts_navigation() !!}

  @include('partials.modal-wrapper')
@endsection
