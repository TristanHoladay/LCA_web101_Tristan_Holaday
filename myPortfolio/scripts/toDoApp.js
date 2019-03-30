$(function() {

let $itemField = $('#itemField');



let $list = $('#todo');
let $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function(e) {
        if ($itemField.val() == false) {
            alert("You Haven't Inputted Text!");
            return;
        }
        
        e.preventDefault();  
        let text = $('input[type="text"]').val();
        $list.append(`<li>${text}</li>`);
        $('input[type="text"]').val('');
        
    });

$list.on('click', 'li', function() {

    let $this = $(this);
    $this.remove();
});

});
