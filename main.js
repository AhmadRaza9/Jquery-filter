'use strict';

$(document).ready(() => {
$(document.querySelectorAll('[data-target]')).click((e) =>{
    $('.filter-sec > *').slideUp('slow')
    $(`.${e.target.dataset.target}`).slideDown('slow');
    })
});
