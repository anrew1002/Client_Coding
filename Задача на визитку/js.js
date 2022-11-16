handle = function (e) {
    form = e.form;
    let data = {
        organization: form.organization.value,
        FIO: form.FIO.value,
        job: form.job.value,
        phone: form.phone.value,
        mail: form.mail.value,
        place: form.place.value,

    }
    // console.log(form);
    card = document.getElementsByClassName("main_card")[0];
    // console.log(form.organization.value);
    card.querySelector('.organization').textContent = data.organization;
    // console.log(card.getElementsByClassName('.organization'))
    card.querySelector('.FIO').textContent = data.FIO;
    card.querySelector('.job').textContent = data.job;
    card.querySelector('.phone').textContent = data.phone;
    card.querySelector('.mail').textContent = data.mail;
    card.querySelector('.place').textContent = data.place;

};
// span class="organization"></span>
{/* <span class="FIO"></span>
<span class="job"></span>
<span class="phone"></span>
<span class="mail"></span>
<span class="place"></span> */}