/*
 * skd_tugas2 v0.1
 * 
 * Jufans Anurwan I.
 * twitter: @jufanz
 * fork me at https://github.com/jufans
 * 
 * copyright(c)2013
 * under MIT license
 * 
 * 
 * M3111086 - Sebelas Maret University 
 * 
 */

function acak(){
    var nilai1=document.getElementById('enkrip');
    var nilai2=document.getElementById('dekrip');
    var pecah=nilai1.value.split('');
    
    for (var i = 0; i < nilai1.value.length; i++) {
        var ascii=pecah[i].charCodeAt(0);
        ascii=(ascii+65)%128+1;
        pecah[i]=String.fromCharCode(ascii);
        pecah[i]=pecah[i];
    }
    pecah=pecah.join('');
    nilai2.value=pecah;
}

function tata(){
    var nilai1=document.getElementById('enkrip');
    var nilai2=document.getElementById('dekrip');
    var pecah=nilai2.value.split('');
    for (var i = 0; i < nilai2.value.length; i++) {
        var ascii=pecah[i].charCodeAt(0);
        ascii=(ascii+62)%128;
        pecah[i]=String.fromCharCode(ascii);
        pecah[i]=pecah[i];
    }
    pecah=pecah.join('');
    nilai1.value=pecah;
}
