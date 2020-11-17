<div class="mt-3">
    <button class="js-modal-trigger btn" data-modal="#modal01">
        Open modal 1
    </button>

    <button class="js-modal-trigger btn" data-modal="#modal02">
        Open modal 2
    </button>

    @modal(['id' => 'modal01'])
        @slot('title')
            This is a header modal
        @endslot

        This is the body modal 01
    @endmodal

    @component('components.modal', ['id' => 'modal02'])
        @slot('title')
            dsfsadfdsfa
        @endslot

        asfassad
    @endcomponent
</div>

