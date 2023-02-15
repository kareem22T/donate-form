$(function () { 
    // switch between two donates methods
    $('#the_donta').trigger('click')
    $('#the_donta').on('click', function() {
        $('#donate-form').css('opacity', 0)
        $('#visa-donate-now').attr('name', 'submit-egy')
        setTimeout(() => {
            $('#donate-form').css('opacity', 1)
        }, 600);
    })
    $('#the_donta1').on('click', function() {
        $('#donate-form').css('opacity', 0)
        $('#visa-donate-now').attr('name', 'submit-dollar')
        setTimeout(() => {
            $('#donate-form').css('opacity', 1)
        }, 600);
    })

    // switch cart methods 
    $('.banks label').on('click', function () {
        $(this).addClass('active')
        $('.banks label').not(this).removeClass('active')

        if ($("input:radio").attr('checked', true)) {
            $(this).siblings('label').addClass('active')
        }
    })

    $('.switch-btns a').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.donates').css('opacity', 0)
        setTimeout(() => {
            if ($(this).hasClass('egy')) {
                $('.donates thead tr th:last-child').text('قيمة التبرع بالجنيه ')
            } else {
                $('.donates thead tr th:last-child').text('قيمة التبرع بالدولار ')
            }
        }, 350);
        setTimeout(() => {
            $('.donates').css('opacity', 1)
        }, 500);
    })

})
function validateBank() { // validate cart
    let bank = document.forms["cart_form"]["bank"].value;
    if (bank == "") {
        $(function () {
            $('#validation-msgs').append('<div class="alert alert-danger">عفوا البنك مطلوب</div>')
        })

        document.getElementById('validation-msgs').style.opacity = 1

        setTimeout(() => {
            document.getElementById('validation-msgs').style.opacity = 0
        }, 2000);

        setTimeout(() => {
            $(function () {
                $('#validation-msgs').children().remove()
            })
        }, 2500);

        return false
    }

}

// validation form
function validateForm() {
    let valid = true;
    let name = document.forms["donate-form"]["the_name"].value;
    let email = document.forms["donate-form"]["the_email"].value;
    let phone = document.forms["donate-form"]["the_phone"].value;
    let target = document.forms["donate-form"]["donation_target"].value;
    let price = document.forms["donate-form"]["price"].value;

    let form_content = [
        {
            input: name,
            error_msg: "عفوا الاسم مطلوب"
        },
        {
            input: email,
            error_msg: "عفوا البريد الالكتروني مطلوب"
        },
        {
            input: phone,
            error_msg: "عفوا رقم الهاتف مطلوب"
        },
        {
            input: target,
            error_msg: "عفوا جهة التبرع مطلوبة"
        },
        {
            input: price,
            error_msg: "عفوا قيمة التبرع مطلوبة"
        },
    ]

    for (let index = 0; index < form_content.length; index++) {
        if (form_content[index].input == "") {
            $(function () {
                $('#validation-msgs').append('<div class="alert alert-danger">' + form_content[index].error_msg +'</div>')
            })
            valid = false
        }
    }

    document.getElementById('validation-msgs').style.opacity = 1

    setTimeout(() => {
        document.getElementById('validation-msgs').style.opacity = 0
    }, 2000);

    setTimeout(() => {
        $(function () {
            $('#validation-msgs').children().remove()
        })
    }, 2500);

    return valid;

}
