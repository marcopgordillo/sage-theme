<dialog class="modal" id="{{ $id }}">
    <div class="modal-inner">
        <button class="js-close-modal modal-close-button" type="button">
            <span aria-hidden="true">&times;</span>
        </button>

        <div class="modal-header">
            <h2 class="text-2xl font-bold">{{ $title }}</h2>
        </div>

        <div class="modal-body">
            {{ $slot }}
        </div>
    </div>
</dialog>
