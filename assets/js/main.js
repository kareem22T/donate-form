$(function () { // switch between two donates methods
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
})

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
