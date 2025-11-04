// Js Fonksiyonları


// onblur="inputKontrol(this,true,false,2,40);"
function inputKontrol(){
  var a=arguments;var zorunluAlan;var fonk;var min;var max;
  if(typeof a[4] == 'number'){max=a[4];}else{max=4;}
  if(typeof a[3] == 'number'){min=a[3];}else{min=4;}
  if(typeof a[1] == 'boolean'){zorunluAlan=a[1];}else{zorunluAlan=false;}
  if(typeof a[2] == 'function'){fonk=a[2];}else{fonk=false;}
  if(typeof a == 'object' && (a[0] == '[object HTMLInputElement]' || a[0] == '[object HTMLTextAreaElement]'))
  {
    if(a[0].type=='text' || a[0].type=='password' || a[0].type=='textarea')
    {
      if(a[0].value.trim()==''){ if(zorunluAlan){a[0].style.borderColor="red";a[0].alt='not';return false;}else{a[0].style.borderColor="yellow";a[0].alt='ok';return true;}  }
      if(a[0].value.length<min || a[0].value.length>max){a[0].style.borderColor="red";a[0].alt='not';return false;}
      if(fonk){ if(!fonk(a[0].value)){a[0].style.borderColor="red";a[0].alt='not';return false;} }
      a[0].style.borderColor="green";a[0].alt='ok';
    }
    else if(a[0].type=='email')
    {
      if(a[0].value.trim()==''){ if(zorunluAlan){a[0].style.borderColor="red";a[0].alt='not';return false;}else{a[0].style.borderColor="yellow";a[0].alt='ok';}  }
      var dizi=a[0].value.split('@');if(dizi.length!=2){a[0].style.borderColor="red";a[0].alt='not';return false;}
      dizi[1]=dizi[1].split('.');if(dizi[1].length<=1 || dizi[1][1]=='' || dizi[1][0]==''){a[0].style.borderColor="red";a[0].alt='not';return false;}
      if(fonk){ if(!fonk(dizi[0])){a[0].style.borderColor="red";a[0].alt='not';return false;}  }
      a[0].style.borderColor="green";a[0].alt='ok';
    }else{a[0].alt='pas';alert("Tanımlanmamış element tipi : "+a[0].type);return false;}
  } else{a[0].alt='pas';alert("Tanımlanmamış element");return false;}
  return true;}


function AjaxJSON(){
    var a=arguments;var adres;var degisken;var fonk;
    if(typeof a[0] == 'string'){adres=a[0];}else{return false;}
    if(typeof a[1] == 'string'){degisken=a[1];}else{degisken='';}
    if(typeof a[2] == 'function'){fonk=a[2];}else{fonk=function (cevap){alert('Hiç İşlem yok.');}}
    $.ajax({
      type:'POST',
      dataType: 'json',
      url:adres,
      data:degisken,
      success:fonk,
      error: function(msg) {
        if(msg.status==404){msjGoster('İstenilen fonksiyon bulunamadı.','uyari');}
        else if(msg.status==500){msjGoster('Sunucu İsteğe cevap vermiyor.','uyari');}
        else if(msg.status==401){msjGoster('Yetkiyi aşan istek.','uyari');}
        else if(msg.status==203){uyariGoster('İstenilen işlem için yetersiz veri.','uyari');}
        else if(msg.status!=200){msjGoster('İstekde işlemsel hata oluştu. ','uyari');}
      }
    }); }


function AjaxHTML(){
    var a=arguments;var adres;var degisken;var fonk;
    if(typeof a[0] == 'string'){adres=a[0];}else{return false;}
    if(typeof a[1] == 'string'){degisken=a[1];}else{degisken='';}
    if(typeof a[2] == 'function'){fonk=a[2];}else{fonk=function (cevap){alert('Hiç İşlem yok.');}}
    $.ajax({
      type:'POST',
      dataType: 'html',
      url:adres,
      data:degisken,
      success:fonk,
	  xhrFields: {withCredentials: true},
      error: function(msg) {
        if(msg.status==404){msjGoster('İstenilen fonksiyon bulunamadı.','uyari');}
        else if(msg.status==500){msjGoster('Sunucu İsteğe cevap vermiyor.','uyari');}
        else if(msg.status==401){msjGoster('Yetkiyi aşan istek.','uyari');}
        else if(msg.status==203){uyariGoster('İstenilen işlem için yetersiz veri.','uyari');}
        else if(msg.status!=200){msjGoster('İstekde işlemsel hata oluştu. ','uyari');}
      }
    }); }


// Verilen string olarak çoklu karakterkerin dışındaki bütün karakterleri filtreler
// Genel filtreleme fonksiyonu
  function stngFltr (metin,karakterler){
    var cikti="";
    for(var t=0;t<metin.length;t++)
      { for(var f=0;f<karakterler.length;f++) { if(metin[t]==karakterler[f]){cikti+=metin[t];break;}  } }  
    return cikti;  }

// çerez oluşturmak için kullanılıyor.
function setCookie(cname, cvalue, exminutes) {
		// exminutes milisaniye olmalıdır.
        var d = new Date();
        d.setTime(d.getTime() + (exminutes * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }