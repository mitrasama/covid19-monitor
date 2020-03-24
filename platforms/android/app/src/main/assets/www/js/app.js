var $$=Dom7;
var nama='';
var api = "https://app.portalindo.net/api/";
// var api = "https://latihan.portalindo.net/api/";
// var api = "http://localhost/portalindo/api/";
var PrinterName = "BlueTooth Printer";
var kodelogo = 'data:image/png;base64,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';

function Cek_print(){
	BTPrinter.connect(function(data){
		app.dialog.alert('Printer Connected!');
		console.log(data)
	},function(err){
		app.dialog.alert('Printer Disconnect!');
		console.log(err)
	}, PrinterName);
}

var app = new Framework7({
  root: '#app',
  theme: 'ios',
  name: 'M-Portalindo',
  id: 'com.myapp.portalindo',
  statusbar: {
    enabled:true,
    materialBackgroundColor:'#007aff',
  },
  // Add default routes
  routes: [
    {
      path: '/',
      url: './index.html',
      name: 'home',
      on: {
        pageAfterIn(e, page) {
          page.router.clearPreviousHistory();
        },
      },
    },
    {
      path: '/dashboard/',
      url: 'dashboard.html',
      name: 'dashboard',
      on: {
        pageAfterIn(e, page) {
          page.router.clearPreviousHistory();
        },
      },
    },
    {
      path: '/pendataan/',
      url: 'pendataan.html',
      name: 'pendataan',
    },
    {
      path: '/radius/',
      url: 'radius.html',
      name: 'radius',
    },
    {
      path: '/kunjungan/',
      url: 'kunjungan.html',
      name: 'kunjungan',
    },
    {
      path: '/penawaran/',
      url: 'penawaran.html',
      name: 'penawaran',
    },
    {
      path: '/perbaikan/',
      url: 'perbaikan.html',
      name: 'perbaikan',
    },
    {
      path: '/batch/',
      url: 'batch.html',
      name: 'batch',
    },
    {
      path: '/cetaknota/',
      url: 'cetaknota.html',
      name: 'cetaknota',
    },
    {
      path: '/belumminat/',
      url: 'belumminat.html',
      name: 'belumminat',
    },
  ],
  // ... other parameters
});

/** Function Login */
$$(document).on('page:init', '.page[data-name="home"]', function (e) {  
  Refresh();
  $("#button_clear").click(function() {
    Refresh();
  });

  $("#button_login").click(function() {
    Cek_login();
  });

  function Refresh(){
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    // $('#username').focus();
    nama='';
  }

  function Cek_login(){
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
        type: "POST",
        url: api+"cek_login",
        data: {
          username:username,
          password:password
        },
        dataType: "JSON",
      success: function(data){
        if(data.length > 0){
          app.router.navigate('/dashboard/');
          nama = data[0].nama;
        }else{
          app.dialog.alert('Username/Password Salah');
          Refresh();
        }
      },error: function (error) {
        console.log('login gagal');
      }
    });
  }
});
/** Function Login */

/** Function Dashboard */
$$(document).on('page:init', '.page[data-name="dashboard"]', function (e) {
  $("#panggilan_sales").text(nama);  

  /** Payment */
  var rupiah = document.getElementById("rupiah");
  rupiah.addEventListener("keyup", function(e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    rupiah.value = formatRupiah(this.value, "Rp. ");
  });
  
  /* Fungsi formatRupiah */
  function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  
    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }
  
    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  }  
  /** Payment */
  
  /** Settings */
  document.getElementById('nama_printer').value = PrinterName;
  $("#button_settings").click(function() {
    var nama_printer_cek = $("#nama_printer").val();
	PrinterName = nama_printer_cek;
	app.dialog.alert('Printer di Simpan!');
  });
  
  $("#button_connect").click(function() {
    Cek_print();
  });
  
  $("#button_cek_print").click(function() {
    BTPrinter.printText(function(data){
      console.log("Success");
      console.log(data)
    },function(err){
      console.log("Error");
      console.log(err)
    }, "String to Print")
  });
  /** Settings */
});
/** Function Dashboard */

/** Function Pendataan */
$$(document).on('page:init', '.page[data-name="pendataan"]', function (e) {
  document.getElementById('nama_salesman').value = nama;
  // $('#tipe_pembelian').focus();

  $("#button_simpan_pendataan").click(function() {
    Simpan_pendataan();
  });

  $("#gps_pendataan").click(function() {
    Dapatkan_lokasi();
  });

  function Simpan_pendataan(){
    var tipe_pembelian = $("#tipe_pembelian").val();
    var nama_outlet = $("#nama_outlet").val();
    var kecamatan = $("#kecamatan").val();
    var kota_kabupaten = $("#kota_kabupaten").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var nama_pemilik = $("#nama_pemilik").val();
    var tipe_outlet = $("#tipe_outlet").val();
    var fasilitas = $("#fasilitas").val();
    var supplier = $("#supplier").val();
    var telepon = $("#telepon").val();
    var ada_whatsapp = $("#ada_whatsapp").val();
    var jumlah_pegawai = $("#jumlah_pegawai").val();
    var alamat = $("#alamat").val();
    var nama_salesman = $("#nama_salesman").val();
    $.ajax({
      type: "POST",
      url: api+"Simpan_pendataan",
      data: {
        tipe_pembelian: tipe_pembelian,
        nama_outlet: nama_outlet,
        kecamatan: kecamatan,
        kota_kabupaten: kota_kabupaten,
        latitude: latitude,
        longitude: longitude,
        nama_pemilik: nama_pemilik,
        tipe_outlet: tipe_outlet,
        fasilitas: fasilitas,
        supplier: supplier,
        telepon: telepon,
        ada_whatsapp: ada_whatsapp,
        jumlah_pegawai: jumlah_pegawai,
        alamat: alamat,
        nama_salesman: nama_salesman
      },
      dataType: "JSON",
        success: function(data){
          app.dialog.alert('Simpan pendataan sukses');
          document.getElementById('nama_outlet').value = "";
          document.getElementById('kecamatan').value = "";
          document.getElementById('kota_kabupaten').value = "";
          document.getElementById('latitude').value = "";
          document.getElementById('longitude').value = "";
          document.getElementById('nama_pemilik').value = "";
          document.getElementById('fasilitas').value = "";
          document.getElementById('supplier').value = "";
          document.getElementById('telepon').value = "";
          document.getElementById('ada_whatsapp').value = "";
          document.getElementById('jumlah_pegawai').value = "";
          document.getElementById('alamat').value = "";
          $('#tipe_pembelian').focus();
        },error: function (error) {
          app.dialog.alert('Simpan pendataan gagal');
          console.log(error);
        }
    });
  }

  document.addEventListener("deviceready", Dapatkan_lokasi, false);
  function Dapatkan_lokasi() {
    navigator.geolocation.getCurrentPosition(Tulis_kordinat, onError);
  }

  var Tulis_kordinat = function (position) {
    document.getElementById('longitude').value = position.coords.latitude;
    document.getElementById('latitude').value = position.coords.longitude;
  }

  function onError(error) {
    console.log('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
  }
});
/** Function Pendataan */

/** Function Radius */
$$(document).on('page:init', '.page[data-name="radius"]', function (e) {

  $("#gps_pendataan").click(function() {
    getMapLocation();    
  });

  // Get geo coordinates
  function getMapLocation() {
    navigator.geolocation.getCurrentPosition(codeAddressgps);
  }

  function codeAddressgps(position) { 
    lat = position.coords.latitude;
    lon = position.coords.longitude;        
    var pusatRadius = new google.maps.LatLng(lat, lon);
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      mapTypeId: google.maps.MapTypeId.HYBRID,
      center: pusatRadius,
      zoom: 10        
    });
    var PusatMarker = new google.maps.Marker({
      position: pusatRadius,
      map: map,
      title:'Lokasi Saya',
      animation: google.maps.Animation.BOUNCE
    });
    var circle = new google.maps.Circle({
      map: map,
      radius: 10000,    // in metres
      fillColor: '#AA0000',
      strokeColor: '#EC310A'
    });
    circle.bindTo('center', PusatMarker, 'position');
    var request = {
      location: pusatRadius,
      radius: 10000 /* jarak meter */
    };
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.search(request, callback);
    createMarkergps(pusatRadius);
  }

  function createMarkergps(pusatRadius) {
    $.ajax({
      type: "GET",
      url: api+"radius_data",
      dataType: "JSON",
      success: function(locations){
        var bounds = new google.maps.LatLngBounds(); // diluar looping
        for (i = 0; i < locations.length; i++) { 
          pos = new google.maps.LatLng(locations[i][3], locations[i][4]);
          var distance_from_location =  google.maps.geometry.spherical.computeDistanceBetween(pusatRadius, pos);
          console.log(distance_from_location);

          if(distance_from_location < 10000)
          {
            //marker icon shows
            bounds.extend(pos); // di dalam looping 
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i].longitude, locations[i].latitude),
              map: map,
              icon: './image/outlets.png'
            });
      
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                var dataoutlet = "<b>" +locations[i].nama_outlet+ "</b> <br/>" +locations[i].nama_pemilik+ "<br/>" +locations[i].alamat+ "<br/>" +locations[i].telepon+ "<br/> <a href='http://www.google.com/maps/place/" +locations[i].longitude+ "," +locations[i].latitude+ "' target='_blank'>Bagikan</a>";   
                infowindow.setContent(dataoutlet);
                infowindow.open(map, marker, dataoutlet);
              }
            })(marker, i));
            map.fitBounds(bounds); // setelah looping
          }else{
            //marker icon is none because > 100 meter
          }        
        }
      },error: function (error) {
        console.log(error);
      }
    });
  }

  Tampil_peta();
  function Tampil_peta(){
    $.ajax({
      type: "GET",
      url: api+"radius_data",
      dataType: "JSON",
      success: function(locations){
        var map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: 17,
          center: new google.maps.LatLng(locations[0].longitude,locations[0].latitude),
          mapTypeId: google.maps.MapTypeId.HYBRID
        });
      
        var infowindow = new google.maps.InfoWindow();      
        var marker, i;
      
        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].longitude, locations[i].latitude),
            map: map,
			      icon: './image/outlets.png'
          });
      
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              var dataoutlet = "<b>" +locations[i].nama_outlet+ "</b> <br/>" +locations[i].nama_pemilik+ "<br/>" +locations[i].alamat+ "<br/>" +locations[i].telepon+ "<br/> <a href='http://www.google.com/maps/place/" +locations[i].longitude+ "," +locations[i].latitude+ "' target='_blank'>Bagikan</a>";   
              infowindow.setContent(dataoutlet);
              infowindow.open(map, marker, dataoutlet);
            }
          })(marker, i));
        }
      },error: function (error) {
        console.log(error);
      }
    });
  }  
  
});
/** Function Radius */

/** Function Batch */
$$(document).on('page:init', '.page[data-name="batch"]', function (e) {
  $("#button_check_batch").click(function() {
    Check();
  });

  function Check(){
    var nomor_batch = $("#nomor_batch").val();
    $.ajax({
      type      : "POST",
      url       : api+"batch_number",
      dataType  : "JSON",
      data      : { nomor_batch: nomor_batch },
      success   : function(data){
        if(typeof data !== 'undefined' && data.length > 0){
          app.dialog.alert('Detect! No SJ: '+data[0].no_suratjalan);
          document.getElementById('nomor_batch').value = "";
        }else{
          app.dialog.alert('Batch Number Not Found');
          document.getElementById('nomor_batch').value = "";
        }
      }
    });
  }

});
/** Function Batch */

/** Function Penawaran */
$$(document).on('page:init', '.page[data-name="penawaran"]', function (e) {  

  var autocompleteDropdownAjax = app.autocomplete.create({
    inputEl: '#nama_outlet_penawaran',
    openIn: 'dropdown',
    preloader: true,
    valueProperty: 'nama_outlet',
    textProperty: 'nama_outlet',
    limit: 5,
    source: function (query, render, autocomplete) {
      var autocomplete = this;
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      autocomplete.preloaderShow();
      app.request({
        url: api+'data_outlet',
        method: 'GET',
        dataType: 'json',
        data: {
          query: query,
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].nama_outlet.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
          }
          autocomplete.preloaderHide();
          render(results);
        }
      });
    },
    on: {
      change: function (value) {
        document.getElementById('id_outlet_penawaran').value = value[0].id_outlet;
      }
    }
  });

  $("#button_penawaran").click(function() {
    Simpan_penawaran();
  });

  function Simpan_penawaran(){
    var id_outlet = $("#id_outlet_penawaran").val();
    var tipe_pembelian = $("#tipe_pembelian_penawaran").val();
    $.ajax({
      type      : "POST",
      url       : api+"simpan_penawaran",
      dataType  : "JSON",
      data      : { 
                    id_outlet: id_outlet,
                    tipe_pembelian: tipe_pembelian
                  },
      success   : function(data){
        app.dialog.alert('Simpan Perubahan Berhasil');
        document.getElementById('nama_outlet_penawaran').value = "";
      },error: function (error) {
        app.dialog.alert('Simpan Perubahan Gagal');
        console.log(error);
      }
    });
  }

});
/** Function Penawaran */

/** Function Perbaikan */
$$(document).on('page:init', '.page[data-name="perbaikan"]', function (e) {
  
  var autocompleteDropdownAjax = app.autocomplete.create({
    inputEl: '#nama_outlet_perbaikan',
    openIn: 'dropdown',
    preloader: true,
    valueProperty: 'nama_outlet',
    textProperty: 'nama_outlet',
    limit: 5,
    source: function (query, render, autocomplete) {
      var autocomplete = this;
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      autocomplete.preloaderShow();
      app.request({
        url: api+'data_outlet_full',
        method: 'GET',
        dataType: 'json',
        data: {
          query: query,
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].nama_outlet.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
          }
          autocomplete.preloaderHide();
          render(results);
        }
      });
    },
    on: {
      change: function (value) {
        document.getElementById('id_outlet_perbaikan').value = value[0].id_outlet;
        Show_data(value);
      }
    }
  });

  function Show_data(value){
    $("#show_data_perbaikan").empty();
    var data = '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Kecamatan</div>'+
              '<div class="item-input-wrap">'+
              '<input name="kecamatan_perbaikan" id="kecamatan_perbaikan" type="text" required value="'+value[0].kecamatan+'">'+  
              '</div>'+
              '</div>'+
              '</li>'+
              '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Kota/Kabupaten</div>'+
              '<div class="item-input-wrap">'+
              '<input name="kabupaten_perbaikan" id="kabupaten_perbaikan" type="text" required value="'+value[0].kabupaten+'">'+           
              '</div>'+
              '</div>'+
              '</li>'+
              '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Latitude</div>'+
              '<div class="item-input-wrap">'+
              '<input name="latitude_perbaikan" id="latitude_perbaikan" type="text" required value="'+value[0].latitude+'">'+           
              '</div>'+
              '</div>'+
              '</li>'+
              '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Longitude</div>'+
              '<div class="item-input-wrap">'+
              '<input name="longitude_perbaikan" id="longitude_perbaikan" type="text" required value="'+value[0].longitude+'">'+
              '</div>'+
              '</div>'+
              '</li>'+
              '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Nama Pemilik</div>'+
              '<div class="item-input-wrap">'+
              '<input name="nama_pemilik_perbaikan" id="nama_pemilik_perbaikan" type="text" required value="'+value[0].nama_pemilik+'">'+
              '</div>'+
              '</div>'+
              '</li>'+
              '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Telepon</div>'+
              '<div class="item-input-wrap">'+
              '<input name="telepon_perbaikan" id="telepon_perbaikan" type="number" required value="'+value[0].telepon+'">'+        
              '</div>'+
              '</div>'+
              '</li>'+
              '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Whatsapp</div>'+
              '<div class="item-input-wrap">'+
              '<input name="ada_whatsapp_perbaikan" id="ada_whatsapp_perbaikan" type="number" required value="'+value[0].ada_whatsapp+'">'+            
              '</div>'+
              '</div>'+
              '</li>'+
              '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Jumlah Pegawai</div>'+
              '<div class="item-input-wrap">'+
              '<input name="jumlah_pegawai_perbaikan" id="jumlah_pegawai_perbaikan" type="number" required value="'+value[0].jumlah_pegawai+'">'+              
              '</div>'+
              '</div>'+
              '</li>'+
              '<li class="item-content item-input">'+
              '<div class="item-inner">'+
              '<div class="item-title item-label">Alamat</div>'+
              '<div class="item-input-wrap">'+
              '<input name="alamat_perbaikan" id="alamat_perbaikan" type="text" required value="'+value[0].alamat+'">'+          
              '</div>'+
              '</div>'+
              '</li>';

    $("#show_data_perbaikan").append(data);
    $('#button_perbaikan').attr('disabled', false);
  }

  $("#button_perbaikan").click(function() {
    Simpan_perbaikan();
  });

  function Simpan_perbaikan(){
    var id_outlet = $("#id_outlet_perbaikan").val();
    var nama_outlet = $("#nama_outlet_perbaikan").val();
    var kecamatan = $("#kecamatan_perbaikan").val();
    var kabupaten = $("#kabupaten_perbaikan").val();
    var latitude = $("#latitude_perbaikan").val();
    var longitude = $("#longitude_perbaikan").val();
    var nama_pemilik = $("#nama_pemilik_perbaikan").val();
    var telepon = $("#telepon_perbaikan").val();
    var ada_whatsapp = $("#ada_whatsapp_perbaikan").val();
    var jumlah_pegawai = $("#jumlah_pegawai_perbaikan").val();
    var alamat = $("#alamat_perbaikan").val();
    $.ajax({
      type      : "POST",
      url       : api+"simpan_perbaikan",
      dataType  : "JSON",
      data      : { 
                    id_outlet: id_outlet,
                    nama_outlet: nama_outlet,
                    kecamatan: kecamatan,
                    kabupaten: kabupaten,
                    latitude: latitude,
                    longitude: longitude,
                    nama_pemilik: nama_pemilik,
                    telepon: telepon,
                    ada_whatsapp: ada_whatsapp,
                    jumlah_pegawai: jumlah_pegawai,
                    alamat: alamat
                  },
      success   : function(data){
        app.dialog.alert('Simpan Perbaikan Berhasil');
        document.getElementById('nama_outlet_perbaikan').value = "";
        $("#show_data_perbaikan").empty();
      },error: function (error) {
        app.dialog.alert('Simpan Perbaikan Gagal');
        console.log(error);
      }
    });
  }

});
/** Function Perbaikan */

/** Function Kunjungan */
$$(document).on('page:init', '.page[data-name="kunjungan"]', function (e) {
  
  /** Data Informasi */
  $$('.tambah-info').on('click', function () {
    app.dialog.prompt('Ada informasi apa?', function (value) {
      $.ajax({
        type      : "POST",
        url       : api+"simpan_informasi",
        dataType  : "JSON",
        data      : { keterangan: value },
        success   : function(data){
          app.dialog.alert('Simpan Informasi Berhasil');
        },error: function (error) {
          app.dialog.alert('Simpan Informasi Gagal');
          console.log(error);
        }
      });
    });
  });
  /** Data Informasi */

  /** Set data default */
    /** Variabel tanggal sekarang */
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

      /** Tanggal jatuh tempo */
      var newdate = new Date();
      newdate.setDate(newdate.getDate() + 1);    
      var tgl = newdate.getDate();
      var bln = newdate.getMonth() + 1;
      var thn = newdate.getFullYear();
      var tempo = thn + '-' + bln + '-' + tgl;
      /** Tanggal jatuh tempo */

      /** Get no nota */
      var cek_kode_nota = nama.substring(0, 2);
      var kode_nota = cek_kode_nota.toUpperCase();
      $.ajax({
        type      : "GET",
        url       : api+"no_nota",
        dataType  : "JSON",
        success   : function(data){
          document.getElementById('no_nota_penjualan').value = kode_nota+data;
          document.getElementById('piutang_no_nota_penjualan').value = kode_nota+data;
        },error: function (error) {
          app.dialog.alert('Gagal no nota!');
          console.log(data)
        }
      });
      /** Get no nota */

    /** Variabel tanggal sekarang */
    document.getElementById('tanggal').value = today;
    document.getElementById('tanggal_bikin').value = today;
    document.getElementById('piutang_tanggal').value = today;
    document.getElementById('piutang_tanggalbayar').value = today;
    document.getElementById('piutang_tanggaljatuhtempo').value = tempo;
    document.getElementById('nama_admin').value = nama;
    document.getElementById('nama_salesman').value = nama;
    /** Variabel tanggal sekarang */
  /** Set data default */

  /** Set data outlet */
  var autocompleteDropdownAjax_outlet = app.autocomplete.create({
    inputEl: '#nama_outlet_kunjungan',
    openIn: 'dropdown',
    preloader: true,
    valueProperty: 'nama_outlet',
    textProperty: 'nama_outlet',
    limit: 5,
    source: function (query, render, autocomplete) {
      var autocomplete = this;
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      autocomplete.preloaderShow();
      app.request({
        url: api+'data_outlet_konsinyasi',
        method: 'GET',
        dataType: 'json',
        data: {
          query: query,
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].nama_outlet.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
          }
          autocomplete.preloaderHide();
          render(results);
        }
      });
    },
    on: {
      change: function (value) {
        document.getElementById('id_outlet_kunjungan').value = value[0].id_outlet;
        document.getElementById('rute_kunjungan').value = value[0].rute;
        $('#nama_outlet_kunjungan').attr('readonly', true);
        $('#nama_produk_kunjungan').attr('readonly', false);
      }
    }
  });
  /** Set data outlet */

  /** Set data produk */
  var autocompleteDropdownAjax_produk = app.autocomplete.create({
    inputEl: '#nama_produk_kunjungan',
    openIn: 'dropdown',
    preloader: true,
    valueProperty: 'nama_produk',
    textProperty: 'nama_produk',
    limit: 5,
    source: function (query, render, autocomplete) {
      var autocomplete = this;
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      autocomplete.preloaderShow();
      app.request({
        url: api+'data_produk',
        method: 'GET',
        dataType: 'json',
        data: {
          query: query,
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].nama_produk.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
          }
          autocomplete.preloaderHide();
          render(results);
        }
      });
    },
    on: {
      change: function (value) {
        document.getElementById('nama_produk_alias').value = value[0].nama_produk;
        document.getElementById('id_produk').value = value[0].id_produk;
        document.getElementById('isi_kemasan').value = value[0].kemasan;
        document.getElementById('harga_beli').value = value[0].harga_beli;
        document.getElementById('harga_gb_200_dus').value = value[0].harga_gb_200_dus;
        document.getElementById('harga_gb_150_dus').value = value[0].harga_gb_150_dus;
        document.getElementById('harga_gb_50_dus').value = value[0].harga_gb_50_dus;
        document.getElementById('harga_gb_k_50_dus').value = value[0].harga_gb_k_50_dus;
        document.getElementById('harga_jpc_dus').value = value[0].harga_jpc_dus;
        document.getElementById('harga_jpc_botol').value = value[0].harga_jpc_botol;
        document.getElementById('harga_jpt_dus').value = value[0].harga_jpt_dus;
        document.getElementById('harga_jpt_botol').value = value[0].harga_jpt_botol;
        document.getElementById('harga_ky_t_bayar').value = value[0].harga_ky_t_bayar;
        document.getElementById('harga_ky_r_jual').value = value[0].harga_ky_r_jual;
      }
    }
  });
  /** Set data produk */

  /** Proses komputasi */
  Refresh()
  var mycart_penjualan_lapangan = [];
  var mycart_stokOutlet = [];
  $(function () {
    if (localStorage.mycart){
      mycart_penjualan_lapangan = JSON.parse(localStorage.mycart_penjualan_lapangan);
      mycart_stokOutlet = JSON.parse(localStorage.mycart_stokOutlet);
      showCart();
    }
  });

  function Refresh(){
    localStorage.removeItem("mycart_penjualan_lapangan");
    localStorage.removeItem("mycart_stokOutlet");
  }

  $('.add').click(function(){

    if (document.getElementById('JPCD').checked) {
      var tanggal_add = $("#tanggal").val();
      var no_nota_penjualan_add = $("#no_nota_penjualan").val();
      var nama_salesman_add = $("#nama_salesman").val();
      var rute_add = $("#rute_kunjungan").val();
      var id_outlet_add = $("#id_outlet_kunjungan").val();
      var id_produk_add = $("#id_produk").val();
      var jumlah_karton = $("#jumlah_kunjungan").val();
      var isi_kemasan = $("#isi_kemasan").val();
      var jumlah_add = jumlah_karton * isi_kemasan
      var harga_karton = $("#harga_jpc_dus").val();
      var harga_add = harga_karton
      var tipe_pembelian_add = $("#tipe_pembelian").val();
      var tempo_add = $("#tempo").val();
      var status_add = $("#status").val();
      var id_file_penjualan_add = $("#id_file").val();
      var subtotal_add = harga_add * jumlah_add;
      var nama_produk_add = $("#nama_produk_alias").val();
      var nama_admin_add = $("#nama_admin").val();
      var satuan_add = 'dus';
      var kemasan_add = $("#isi_kemasan").val();
      var tanggal_bikin_add = $("#tanggal_bikin").val();
    } else if (document.getElementById('JPCB').checked) {
      var tanggal_add = $("#tanggal").val();
      var no_nota_penjualan_add = $("#no_nota_penjualan").val();
      var nama_salesman_add = $("#nama_salesman").val();
      var rute_add = $("#rute_kunjungan").val();
      var id_outlet_add = $("#id_outlet_kunjungan").val();
      var id_produk_add = $("#id_produk").val();
      var jumlah_add = $("#jumlah_kunjungan").val();
      var harga_add = $("#harga_jpc_botol").val();
      var tipe_pembelian_add = $("#tipe_pembelian").val();
      var tempo_add = $("#tempo").val();
      var status_add = $("#status").val();
      var id_file_penjualan_add = $("#id_file").val();
      var subtotal_add = harga_add * jumlah_add;
      var nama_produk_add = $("#nama_produk_alias").val();
      var nama_admin_add = $("#nama_admin").val();
      var satuan_add = 'pcs';
      var kemasan_add = $("#isi_kemasan").val();
      var tanggal_bikin_add = $("#tanggal_bikin").val();
    } else if (document.getElementById('JPTD').checked) {
      var tanggal_add = $("#tanggal").val();
      var no_nota_penjualan_add = $("#no_nota_penjualan").val();
      var nama_salesman_add = $("#nama_salesman").val();
      var rute_add = $("#rute_kunjungan").val();
      var id_outlet_add = $("#id_outlet_kunjungan").val();
      var id_produk_add = $("#id_produk").val();
      var jumlah_karton = $("#jumlah_kunjungan").val();
      var isi_kemasan = $("#isi_kemasan").val();
      var jumlah_add = jumlah_karton * isi_kemasan
      var harga_karton = $("#harga_jpt_dus").val();
      var harga_add = harga_karton
      var tipe_pembelian_add = $("#tipe_pembelian").val();
      var tempo_add = $("#tempo").val();
      var status_add = $("#status").val();
      var id_file_penjualan_add = $("#id_file").val();
      var subtotal_add = harga_add * jumlah_add;
      var nama_produk_add = $("#nama_produk_alias").val();
      var nama_admin_add = $("#nama_admin").val();
      var satuan_add = 'dus';
      var kemasan_add = $("#isi_kemasan").val();
      var tanggal_bikin_add = $("#tanggal_bikin").val();
    } else if (document.getElementById('JPTB').checked) {
      var tanggal_add = $("#tanggal").val();
      var no_nota_penjualan_add = $("#no_nota_penjualan").val();
      var nama_salesman_add = $("#nama_salesman").val();
      var rute_add = $("#rute_kunjungan").val();
      var id_outlet_add = $("#id_outlet_kunjungan").val();
      var id_produk_add = $("#id_produk").val();
      var jumlah_add = $("#jumlah_kunjungan").val();
      var harga_add = $("#harga_jpt_botol").val();
      var tipe_pembelian_add = $("#tipe_pembelian").val();
      var tempo_add = $("#tempo").val();
      var status_add = $("#status").val();
      var id_file_penjualan_add = $("#id_file").val();
      var subtotal_add = harga_add * jumlah_add;
      var nama_produk_add = $("#nama_produk_alias").val();
      var nama_admin_add = $("#nama_admin").val();
      var satuan_add = 'pcs';
      var kemasan_add = $("#isi_kemasan").val();
      var tanggal_bikin_add = $("#tanggal_bikin").val();
    } else if (document.getElementById('KONS').checked) {
      var tanggal_add = $("#tanggal").val();
      var no_nota_penjualan_add = $("#no_nota_penjualan").val();
      var nama_salesman_add = $("#nama_salesman").val();
      var rute_add = $("#rute_kunjungan").val();
      var id_outlet_add = $("#id_outlet_kunjungan").val();
      var id_produk_add = $("#id_produk").val();
      var jumlah_add = $("#jumlah_kunjungan").val();
      var harga_add = $("#harga_ky_t_bayar").val();
      var tipe_pembelian_add = $("#tipe_pembelian").val();
      var tempo_add = $("#tempo").val();
      var status_add = $("#status").val();
      var id_file_penjualan_add = $("#id_file").val();
      var subtotal_add = harga_add * jumlah_add;
      var nama_produk_add = $("#nama_produk_alias").val();
      var nama_admin_add = $("#nama_admin").val();
      var keluar_add = 'KELUAR';
      var satuan_add = 'pcs';
      var kemasan_add = $("#isi_kemasan").val();
      var tanggal_bikin_add = $("#tanggal_bikin").val();

    }

    addToCart(tanggal_add, no_nota_penjualan_add, nama_salesman_add, rute_add, id_outlet_add, id_produk_add, jumlah_add, harga_add, tipe_pembelian_add, tempo_add, status_add, id_file_penjualan_add, subtotal_add, nama_produk_add, nama_admin_add, satuan_add, kemasan_add, tanggal_bikin_add );
    stokOutlet(id_outlet_add, tanggal_add, id_produk_add, keluar_add, jumlah_add, no_nota_penjualan_add, id_file_penjualan_add);

    document.getElementById('nama_produk_kunjungan').value = "";
    document.getElementById('jumlah_kunjungan').value = "1";
  })

  function addToCart(tanggal_add, no_nota_penjualan_add, nama_salesman_add, rute_add, id_outlet_add, id_produk_add, jumlah_add, harga_add, tipe_pembelian_add, tempo_add, status_add, id_file_penjualan_add, subtotal_add, nama_produk_add, nama_admin_add, satuan_add, kemasan_add, tanggal_bikin_add) {
    //cek data in cart then update qty
    for (var i in mycart_penjualan_lapangan) {
      if(mycart_penjualan_lapangan[i].id_produk == id_produk_add)
      {
        app.dialog.alert('Data produk sudah ada !')
        return;          
      }
    }

    // jika tidak ada insert all
    var item = { tanggal: tanggal_add, no_nota_penjualan: no_nota_penjualan_add, nama_salesman: nama_salesman_add, rute: rute_add, id_outlet: id_outlet_add, id_produk: id_produk_add, jumlah: jumlah_add, harga: harga_add, tipe_pembelian: tipe_pembelian_add, tempo: tempo_add, status: status_add, id_file_penjualan: id_file_penjualan_add, subtotal: subtotal_add, nama_produk: nama_produk_add, nama_admin: nama_admin_add, satuan: satuan_add, kemasan: kemasan_add, tanggal_bikin: tanggal_bikin_add }; 
    mycart_penjualan_lapangan.push(item);
    saveCart();
    showCart();
  }

  function stokOutlet(id_outlet_add, tanggal_add, id_produk_add, keluar_add, jumlah_add, no_nota_penjualan_add, id_file_penjualan_add) {
    //cek data in cart then update qty
    for (var i in mycart_stokOutlet) {
      if(mycart_stokOutlet[i].id_produk == id_produk_add)
      {
        console.log('Data produk sudah ada !');
        return;          
      }
    }

    // jika tidak ada insert all
    var item = { id_outlet: id_outlet_add, tanggal: tanggal_add, id_produk: id_produk_add, masuk_keluar: keluar_add, jumlah: jumlah_add, no_actiontracking: no_nota_penjualan_add, id_file_actiontracking: id_file_penjualan_add }; 
    mycart_stokOutlet.push(item);
    
    if( window.localStorage){
      localStorage.mycart_stokOutlet = JSON.stringify(mycart_stokOutlet);
    }
  }

  function deleteItem(index){
    mycart_penjualan_lapangan.splice(index,1); // hapus item berdasarkan index
    mycart_stokOutlet.splice(index,1);
    saveCart();
    showCart();
  }

  function saveCart() {
    if( window.localStorage){
      localStorage.mycart_penjualan_lapangan = JSON.stringify(mycart_penjualan_lapangan);
      localStorage.mycart_stokOutlet = JSON.stringify(mycart_stokOutlet);
    }
  }

  function rubah(angka){
    var reverse = angka.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
  }

  function showCart() {
    
    $("#cartBody").empty();

    for (var i in mycart_penjualan_lapangan) { //tampilkan data dari local storage mycart_penjualan_lapangan, template bisa anda sesuaikan
      var item = mycart_penjualan_lapangan[i];
      var row = '<tr>'+
                  '<td class="label-cell" style="text-align: center;">'+[parseInt(i)+1]+'</td>'+
                  '<td class="label-cell" style="text-align: left;">'+item.nama_produk+'</td>'+
                  '<td class="numeric-cell" style="text-align: center;">'+rubah(item.harga)+'</td>';
          if(item.satuan == "dus"){
          row += '<td class="numeric-cell" style="text-align: center;">'+item.jumlah/item.kemasan+' '+item.satuan+'</td>';
          }else{
          row += '<td class="numeric-cell" style="text-align: center;">'+item.jumlah+' '+item.satuan+'</td>';
          }
                  
           row += '<td class="numeric-cell" style="text-align: center;">'+rubah(item.subtotal)+'</td>';
           row += '<td class="label-cell" style="text-align: right;"><button class="add_cart col button button-small color-red" data-id="'+i+'"><i class="fa fa-trash"></i></button></td>';
           row += '</tr>';

      $("#cartBody").append(row); //append ul dengan id cartbody
    }

    // untuk total
    var total = 0;
    for(var i = 0; i < mycart_penjualan_lapangan.length; i++) {
      total += mycart_penjualan_lapangan[i].subtotal; //jumlahkan keseluruhan row subtotal dari mycart_penjualan_lapangan untuk mendapatkan total
    }
    totalCart.innerHTML = rubah(total);
    document.getElementById('piutang_nominal_nota_penjualan').value = total;
    //isikan div dengan id totalcart dengan nilai diatas
  }

  $(document).on("click", ".add_cart", function () {
    var id = $(this).data("id");
    var index = id.toString();
    deleteItem(index);
  });

  function deleteItem(index){
    mycart_penjualan_lapangan.splice(index,1); // hapus item berdasarkan index
    mycart_stokOutlet.splice(index,1);
    saveCart();
    showCart();
  }
  /** Proses komputasi */

  /** Fungsi simpan */
  $("#button_kunjungan").click(function() {
    if (document.getElementById('Transaksi').checked) {
      Simpan_nota();
    }else{
      simpan_kunjungan();
    }
    
  });

  function Simpan_nota(){
    if(window.localStorage!==undefined) {
      $.ajax({
        type: "POST",
        url: api+"simpan_nota",
        data: {data: localStorage.getItem('mycart_penjualan_lapangan')},
        dataType: "JSON",
        success: function(data){     
          console.log("Simpan nota berhasil");
          Simpan_stokoutlet();
        },error: function (error) {
          console.log(error);
          app.dialog.alert('Simpan nota gagal');
        }
      });
    }else{
      app.dialog.alert("Proses simpan gagal, Localstorage Kosong");
    }
  }
  
  $("#cek_logo").click(function() {
    Cetaknow();
  });
  
  /** Fungsi Cetak Nota */
  function Cetaknow(){
    BTPrinter.connect(function(data){

      BTPrinter.printBase64(function(data){
        console.log("Success");
        console.log(data);
      },function(err){
        console.log("Error");
        console.log(err);
      }, kodelogo,'0','0');

      var nama_outlet_kunjungan = $("#nama_outlet_kunjungan").val();
      BTPrinter.printTextSizeAlign(function(data){
      },function(err){
      }, ""+nama_outlet_kunjungan+"/"+mycart_penjualan_lapangan[0].nama_salesman+"/"+mycart_penjualan_lapangan[0].no_nota_penjualan+"\n"+mycart_penjualan_lapangan[0].tanggal+" Nota Jual Konsinyasi",'1','1');

      BTPrinter.printText(function(data){
      },function(err){
      }, "--------------------------------\n",'0','0');								

      for (var i in mycart_penjualan_lapangan) { //tampilkan data dari local storage mycart_penjualan_lapangan, template bisa anda sesuaikan
        var item = mycart_penjualan_lapangan[i];
        BTPrinter.printText(function(data){
        },function(err){
          app.dialog.alert("Printer gagal terhubung");
          console.log(err)
        }, item.nama_produk.substring(0, 21));

        var sisa = 32-item.nama_produk.substring(0, 21).length-rubah(item.subtotal*1,0).length, iii;
        var spacer = "";
        for (iii = 0; iii < sisa; iii++ ) {
          spacer += " ";
        }
          
        BTPrinter.printText(function(data){
        },function(err){
          app.dialog.alert("Printer gagal terhubung");
          console.log(err)
        }, spacer);
                  
        BTPrinter.printText(function(data){
        },function(err){
        }, rubah(item.subtotal*1,0)+"\n");

        if(item.jumlah > 1) {			
          BTPrinter.printTextSizeAlign(function(data){
          },function(err){
          }, rubah(item.jumlah*1,0)+" x "+rubah(item.subtotal*1/item.jumlah*1,0)+"",'1','0');
        }	
      }

      BTPrinter.printText(function(data){
			},function(err){
			}, "--------------------------------\n"); 

      var total_cek = 0;
      for(var i = 0; i < mycart_penjualan_lapangan.length; i++) {
        total_cek += mycart_penjualan_lapangan[i].subtotal;        
      }
      BTPrinter.printText(function(data){
      },function(err){
      }, "TOTAL HARGA:       Rp."+rubah(total_cek)+"\n--------------------------------\n");

      BTPrinter.printTextSizeAlign(function(data){
      },function(err){
      }, "Terimakasih sudah berlangganan\n",'1','1');
      BTPrinter.printText(function(data){
			},function(err){
			}, "\n"); 

    },function(err){
      app.dialog.alert('Printer Disconnect!');
      console.log(err)
    }, PrinterName);
  }
  /** Fungsi Cetak Nota */

  function Simpan_stokoutlet(){
    if(window.localStorage!==undefined) {
      $.ajax({
          type: "POST",
          url: api+"simpan_stokoutlet",
          data: {data: localStorage.getItem('mycart_stokOutlet')},
          dataType: "json",
        success: function(data){
          console.log("Simpan stok outlet berhasil");
          Simpan_piutang();
        },error: function (error) {
          console.log(error);
          app.dialog.alert('Simpan stokoutlet gagal');
        }
      });
    }else{
      app.dialog.alert("Proses simpan gagal, Localstorage Stokoutlet Kosong");
    }
  }

  function Simpan_piutang(){
    var tanggal = $('#piutang_tanggal').val();
    var no_nota_penjualan = $('#piutang_no_nota_penjualan').val();
    var tanggal_jatuh_tempo  = $('#piutang_tanggaljatuhtempo').val();
    var nominal_nota_penjualan = $('#piutang_nominal_nota_penjualan').val();
    var terbayar = $('#piutang_terbayar').val();
    var tanggal_bayar = $('#piutang_tanggalbayar').val();
    var sisa = nominal_nota_penjualan - terbayar
    var status = $('#piutang_status').val();

    $.ajax({
      type: "POST",
      url: api+"simpan_piutang",
      data: { 
          tanggal: tanggal,
          no_nota_penjualan: no_nota_penjualan,
          tanggal_jatuh_tempo: tanggal_jatuh_tempo,
          nominal_nota_penjualan: nominal_nota_penjualan,
          terbayar: terbayar,
          tanggal_bayar: tanggal_bayar,
          sisa: sisa,
          status: status
          },
      dataType: "JSON",
      success: function(data){
        console.log("simpan piutang berhasil");
        simpan_kunjungan();
      }, error: function(error){
        console.log(error);
        app.dialog.alert('Simpan piutang gagal');
      }
    });
  }

  function simpan_kunjungan(){
    var tanggal = $("#tanggal").val();
    var id_outlet = $("#id_outlet_kunjungan").val();
    var kondisi = $("#kondisi").val();
    var id_file = $("#id_file").val();
    var nama_salesman = nama;
    $.ajax({
      type      : "POST",
      url       : api+"simpan_kunjungan",
      dataType  : "JSON",
      data      : {
                    tanggal: tanggal,
                    id_outlet: id_outlet,
                    kondisi: kondisi,
                    id_file: id_file,
                    nama_salesman: nama_salesman
                  },
      success   : function(data){
        console.log("Simpan kunjungan berhasil");
        app.dialog.alert('Simpan kunjungan berhasil !', function(){
          app.router.back('/dashboard/', {
            ignoreCache: true,
            force: true,
            context: {}
          });
        });
      }, error: function(error){
        console.log(error);
        app.dialog.alert('Simpan kunjungan gagal');
      }
    });
  }
  /** Fungsi simpan */

});
/** Function Kunjungan */

/** Function Cetak Nota */
$$(document).on('page:init', '.page[data-name="cetaknota"]', function (e) {  
  
  app.request({
    url: api+'cetak_nota',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      $("#cartCetak").empty();

      for (var i in data) {
        var item = data[i];
        var row = '<tr>'+
                    '<td class="label-cell" style="text-align: center;">'+[parseInt(i)+1]+'</td>'+
                    '<td class="label-cell" style="text-align: left;">'+item.nama_outlet+'</td>'+
                    '<td class="label-cell" style="text-align: left;">'+item.no_nota_penjualan+'</td>'+
                    '<td class="label-cell" style="text-align: left;"><button class="cetak_lagi col button button-small color-yellow" data-nota="'+item.no_nota_penjualan+'"><i class="fa fa-print"></i></button></td>';
        $("#cartCetak").append(row);
      }
    }
  });

  function rubah(angka){
    var reverse = angka.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
  }

  $(document).on("click", ".cetak_lagi", function () {
    var nota = $(this).data("nota");
    $.ajax({
      type      : "POST",
      url       : api+"tarik_nota",
      dataType  : "JSON",
      data      : { no_nota_penjualan: nota },
      success   : function(data_nota){
        BTPrinter.connect(function(data){          
          BTPrinter.printBase64(function(data){
            console.log("Success");
            console.log(data);
          },function(err){
            console.log("Error");
            console.log(err);
          }, kodelogo,'0','0');
    
          var nama_outlet_kunjungan = data_nota[0].nama_outlet;
          BTPrinter.printTextSizeAlign(function(data){
          },function(err){
          }, ""+nama_outlet_kunjungan+"/"+data_nota[0].nama_salesman+"/"+data_nota[0].no_nota_penjualan+"\n"+data_nota[0].tanggal+" Nota Jual Konsinyasi",'1','1');
    
          BTPrinter.printText(function(data){
          },function(err){
          }, "--------------------------------\n",'0','0');								
    
          for (var i in data_nota) { //tampilkan data dari local storage mycart_penjualan_lapangan, template bisa anda sesuaikan
            var item = data_nota[i];
            BTPrinter.printText(function(data){
            },function(err){
              app.dialog.alert("Printer gagal terhubung");
              console.log(err)
            }, item.nama_produk.substring(0, 21));
    
            var sisa = 32-item.nama_produk.substring(0, 21).length-rubah(item.subtotal*1,0).length, iii;
            var spacer = "";
            for (iii = 0; iii < sisa; iii++ ) {
              spacer += " ";
            }
              
            BTPrinter.printText(function(data){
            },function(err){
              app.dialog.alert("Printer gagal terhubung");
              console.log(err)
            }, spacer);
                      
            BTPrinter.printText(function(data){
            },function(err){
            }, rubah(item.subtotal*1,0)+"\n");
    
            if(item.jumlah > 1) {			
              BTPrinter.printTextSizeAlign(function(data){
              },function(err){
              }, rubah(item.jumlah*1,0)+" x "+rubah(item.subtotal*1/item.jumlah*1,0)+"",'1','0');
            }	
          }
    
          BTPrinter.printText(function(data){
          },function(err){
          }, "--------------------------------\n"); 
    
          var total_cek = 0;
          for(var i = 0; i < data_nota.length; i++) {
            total_cek += parseInt(data_nota[i].subtotal);        
          }
          BTPrinter.printText(function(data){
          },function(err){
          }, "TOTAL HARGA:       Rp."+rubah(total_cek)+"\n--------------------------------\n");
    
          BTPrinter.printTextSizeAlign(function(data){
          },function(err){
          }, "Terimakasih sudah berlangganan\n",'1','1');
          BTPrinter.printText(function(data){
          },function(err){
          }, "\n"); 
    
        },function(err){
          app.dialog.alert('Printer Disconnect!');
          console.log(err)
        }, PrinterName);
      }, error: function(error){
        console.log(error);
        app.dialog.alert('Cetak nota gagal');
      }
    });
  });
  

});
/** Function Cetak Nota */

/** Function belum Minat */
$$(document).on('page:init', '.page[data-name="belumminat"]', function (e) {
  
  app.request({
    url: api+'belumminat',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      $("#cartBelumminat").empty();

      for (var i in data) {
        var item = data[i];
        var row = '<tr>'+
                    '<td class="label-cell" style="text-align: center;">'+[parseInt(i)+1]+'</td>'+
                    '<td class="label-cell" style="text-align: left;">'+item.nama_outlet+'</td>'+
                    '<td class="label-cell" style="text-align: left;">'+item.nama_pemilik+'</td>'+
                    '<td class="label-cell" style="text-align: left;"><a href="geo:'+item.latitude+','+item.longitude+'"><button class="col button button-small color-yellow"><i class="fa fa-map-marker"></i></button></a></td>';
        $("#cartBelumminat").append(row);
      }
    }
  });

});
/** Function belum Minat */

var mainView = app.views.create('.view-main');