var $$=Dom7;
var app = new Framework7({
  root: '#app',
  theme: 'ios',
  name: 'Covid19',
  id: 'com.abdul.covid19',
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
    }
  ],
  // ... other parameters
});

/** Function Home */
$$(document).on('page:init', '.page[data-name="home"]', function (e) {
  Utama();

  var intervalID = window.setInterval(Utama, 1800000);

  function Utama(){
    createMarkergps();
    LockdownMap();
    datadunia();
    dataindo();
    startTime();
  }

  function createMarkergps(){
    $.ajax({
      type: "GET",
      url: "https://covid19.mathdro.id/api/recovered",
      dataType: "JSON",
      success: function(locations){
        var map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: 3,
          center: new google.maps.LatLng(-4.385705, 117.548452)
        });
      
        var infowindow = new google.maps.InfoWindow();      
        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].long),
            map: map,
			      icon: './image/warning.svg'
          });
      
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              var dataoutlet = "<b>" +locations[i].combinedKey+ "</b><br>Positif : "+locations[i].confirmed+ "<br>Sembuh : "+locations[i].recovered+"<br>Fatal : " +locations[i].deaths;   
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

  function LockdownMap(){
    $.ajax({
      type: "GET",
      url: "https://api.kawalcorona.com/indonesia/provinsi/",
      dataType: "JSON",
      success: function(data){
        var html = '';
          var i;
          var total = 0;
          var batas = 0;
          for(i=0; i<data.length; i++){
            total += data[i].attributes.Kasus_Posi;
            html += '<tr>'+
                      '<td class="checkbox-cell">'+
                      '<i class="fa fa-medkit fa-lg"></i>'+
                      '</label>'+
                      '</td>'+
                      '<td class="label-cell">'+data[i].attributes.Provinsi+'</td>'+
                      '<td class="numeric-cell">'+data[i].attributes.Kasus_Posi+'</td>'+
                    '</tr>';
          }
          $('#show_data').html(html);
          batas = total * 0.2;
          console.log(batas)
      }
    });
  }

  function datadunia(){
    $.ajax({
      type: "GET",
      url: "https://covid19.mathdro.id/api",
      dataType: "JSON",
      success: function(data){
        $("#confirmed").empty();
        $("#confirmed").append(rubah(data.confirmed.value));

        $("#recovered").empty();
        $("#recovered").append(rubah(data.recovered.value));

        $("#death").empty();
        $("#death").append(rubah(data.deaths.value));
      },error: function (error) {
        console.log(error);
      }
    });
  }

  function dataindo(){
    $.ajax({
      type: "GET",
      url: "https://covid19.mathdro.id/api/countries/IDN",
      dataType: "JSON",
      success: function(data){
        $("#active").empty();
        var kasus = "Positif : "+rubah(data.confirmed.value)+"&nbsp;&nbsp;&nbsp;Sembuh : "+rubah(data.recovered.value)+"&nbsp;&nbsp;&nbsp;Fatal : "+rubah(data.deaths.value);
        $("#active").append(kasus);
        notificationFull.open();
      },error: function (error) {
        console.log(error);
      }
    });
  }

  function rubah(angka){
    var reverse = angka.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
  }

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }  

  document.getElementById("tanggal").innerHTML = formatAMPM();
  function formatAMPM() {
    var d = new Date(),
      minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
      ampm = d.getHours() >= 12 ? 'pm' : 'am',
      months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
      days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    return days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
  }

  var notificationFull = app.notification.create({
    icon: '<i class="fa fa-bell"></i>',
    title: 'COVID19 NOW',
    titleRightText: 'now',
    subtitle: 'Notification About Us',
    text: 'Aplikasi ini dibuat untuk tujuan kesehatan masyarakat ditengah serangan wabah corona. dikembangkan oleh cvabdul.com',
    closeTimeout: 5000,
  });

  // Create notification with close button
  var notificationWithButton = app.notification.create({
    icon: '<i class="fa fa-bell"></i>',
    title: 'COVID19 NOW',
    subtitle: 'Notification About Us',
    text: 'Aplikasi ini dibuat untuk tujuan kesehatan masyarakat ditengah serangan wabah corona. dikembangkan oleh cvabdul.com',
    closeButton: true,
  });  

  $$('.open-with-button').on('click', function () {
    notificationWithButton.open();
  });

});
/** Function Login */

var mainView = app.views.create('.view-main');