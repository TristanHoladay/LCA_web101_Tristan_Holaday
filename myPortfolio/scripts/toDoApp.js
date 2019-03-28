$(function() {

let $itemField = $('#itemField');



let $list = $('ul');
let $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        if ($itemField.empty()) {
            alert("You Haven't Inputted Text!");
            return;
        }
        
        let text = $('input[type="text"]').val();
        $list.append(`<li>${text}</li>`);
        $('input[type="text"]').val('');
    });

$list.on('click', 'li', function() {

    let $this = $(this);
    $this.remove();
});

});