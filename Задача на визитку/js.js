handle = function (e) {
    form = e.form;
    let data = {
        organization: form.organization.value,
        FIO: form.FIO.value,
        job: form.job.value,
        phone: form.phone.value,
        // phone2: form.phone2.value,
        mail: form.mail.value,
        place: form.place.value,

    }
    if (form.phone2 !== undefined) {
        data = Object.assign(data, { phone2: form.phone2.value })
        console.log("obj", data)
    }
    card = document.getElementsByClassName("main_card")[0];
    card.querySelector('.organization').textContent = data.organization;
    card.querySelector('.FIO').textContent = data.FIO;
    card.querySelector('.job').textContent = data.job;
    card.querySelector('.phone').textContent = data.phone;
    card.querySelector('.mail').textContent = data.mail;
    card.querySelector('.place').textContent = data.place;
    card.querySelector('.phone2').textContent = data.phone2;


    aligning = function (switches, object) {
        if (switches[0].checked) {
            object.style["align-self"] = "flex-start";
            // console.log(card.querySelector('.FIO'));
        }
        if (switches[1].checked) {
            object.style["align-self"] = "center";
            // console.log(card.querySelector('.FIO'));
        }
        if (switches[2].checked) {
            object.style["align-self"] = "flex-end";
            // console.log(card.querySelector('.FIO'));
        }
    }
    FIO_align = document.getElementsByName("align_FIO");
    FIO = card.querySelector('.FIO');
    aligning(FIO_align, FIO);
    job_align = document.getElementsByName("align_job");
    job = card.querySelector('.job');
    aligning(job_align, job);

    font_sizing = function (switches, object, sizes) {
        if (switches[0].checked) {
            object.style["font-size"] = sizes[0];
            // console.log(card.querySelector('.FIO'));
        }
        if (switches[1].checked) {
            object.style["font-size"] = sizes[1];
            // console.log(card.querySelector('.FIO'));
        }
        if (switches[2].checked) {
            object.style["font-size"] = sizes[2];
            // console.log(card.querySelector('.FIO'));
        }
    }
    job_size = document.getElementsByName("size_job");
    font_sizing(job_size, job, ['14px', "16px", "18px"])
    FIO_size = document.getElementsByName("size_FIO");
    font_sizing(FIO_size, FIO, ['24px', "26px", "28px"])
    mail_btt = document.getElementsByClassName("mail_display")[0]
    mail = card.querySelector('.mail')
    if (!mail_btt.checked) {
        console.log(mail_btt.checked);
        mail.style.display = "none";

    } else {
        mail.style.display = "block";
    }
    adress_btt = document.getElementsByClassName("adress_display")[0]
    adress = card.querySelector('.place')
    if (!adress_btt.checked) {
        console.log(adress_btt.checked);
        adress.style.display = "none";

    } else {
        adress.style.display = "block";
    }

};
phone_adder = function (e) {
    phone_del = function () {

        div.removeChild(div_child)
        label.style.display = "block"
    };
    label = e.parentNode
    div = label.parentNode

    inp = document.createElement("input");
    inp.name = 'phone2'
    but = document.createElement("button")
    but.type = "button"
    but.textContent = "-"
    but.onclick = phone_del;
    div_child = document.createElement("div")
    div_child.className = "ad_form"
    div_child.append(inp)
    div_child.append(but)

    if (div.children.length > 1) {
        return false
    } else {
        div.append(div_child)
        label.style.display = "none"
    }
};
