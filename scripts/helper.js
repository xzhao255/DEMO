var ActiveBtnClass = 'btn-primary';
var ClickedBtn = [
    {
        btnGrp: 'left-quad-reflex',
        active: '-1',
    },
    {
        btnGrp: 'left-quad-strength',
        active: '-1',
    },

];

$(document).ready(function () {
    // Hard code for demo
    $('body').on('click', '.rating', ratingClickHandler);


    // Below events are to make the popover stay open
    $('.pop').on('mouseenter', function () {
        $(this).popover('show');
        clickBtn(this);
    }).on('mouseleave', function () {
        var _this = this;
        setTimeout(function () {
            if (!$('.popover:hover').length) {
                $(_this).popover('hide');
            }
        }, 100);
    });

    $('body').on('mouseleave', '.popover', function () {
        $(this).popover('hide');
    });

    // Front
    bindPopover('#left-hand', 'right', '#left-hand-pop');
    bindPopover('#left-arm', 'right', '#left-arm-pop');
    bindPopover('#left-upper-arm', 'right', '#left-upper-arm-pop');
    bindPopover('#left-lower-arm', 'right', '#left-lower-arm-pop');
    bindPopover('#right-abdom', 'top', '#right-abdom-pop');
    bindPopover('#left-abdom', 'right', '#left-abdom-pop');
    bindPopover('#left-quad', 'right', '#left-quad-pop');

    // Back
    bindPopover('#left-hamstring', 'left', '#left-hamstring-pop');

});

// When opening the popover, highlight buttons that were clicked
// Mimic DB trip
function clickBtn(_this) {
    for (var i = 0; i < ClickedBtn.length; i++) {
        console.log('active: ' + ClickedBtn[i].active);
        $('.popover').find('#' + ClickedBtn[i].active).addClass(ActiveBtnClass);
        console.log('adding class for ' + $(_this).find('#' + ClickedBtn[i].active).attr('id'));
    }
};


// Now only work for left quad for demo
function ratingClickHandler(e) {
    var _this = e.target;
    var id = $(_this).attr('id');

    renderAvatar(id);
    handleBtnState(_this, id);

};

function renderAvatar(id) {
    if (id.indexOf('left-quad-strength') > -1) {
        $('body').find('#left-quad').css({"fill": "yellow", "fill-opacity": "0.3"});
    }
    else if (id.indexOf('left-quad-reflex') > -1) {
        $('body').find('#left-quad').css({"fill": "red", "fill-opacity": "0.3"});
    }
};

function handleBtnState(_this, id) {
    for (var i = 0; i < ClickedBtn.length; i++) {
        // First find that button group
        var btn = ClickedBtn[i];

        if (id.indexOf(btn.btnGrp) > -1) {
            // Check if already clicked, if so, clear it
            if (btn.active === id) {
                $(_this).toggleClass(ActiveBtnClass);
                btn.active = '-1';
            } else {
                // If not already clicked, click it
                $(_this).toggleClass(ActiveBtnClass);

                // Un-click the other one
                var target = $(_this).siblings('#' + btn.active);
                target.removeClass(ActiveBtnClass);
                btn.active = id;
            }
            return;
        }
    }
};


function bindPopover(bindingElement, placement, contentUrl) {
    $(bindingElement).popover({
        trigger: 'manual',
        placement: placement,
        html: true,
        animation: true,
        content: function () {
            var html = $(contentUrl).html();
            return html;
        },
        container: 'body'
    });
};

