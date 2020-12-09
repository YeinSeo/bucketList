window.onload = function () {
    // 입학 상담 및 지원 btn
    // 로고 색상
    var a = document.getElementById("logo")
    document.getElementById('btn').addEventListener('click', function () {
        if (a.style.color == 'black') { a.style.color = 'red' }
        else if (a.style.color == 'red') { a.style.color = 'black' }
    });

    // // 카피문구
    // var b = document.getElementById("copy")
    // document.getElementById('btn').addEventListener('click', function () {
    //     if (b.style.color == 'black') { b.style.color = 'red' }
    //     else if (b.style.color == 'red') { b.style.color = 'black' }
    // });

    // // 네비
    // var b = document.getElementById("nav")
    // document.getElementById('btn').addEventListener('click', function () {
    //     if (b.style.color == 'black') { b.style.color = 'red' }
    //     else if (b.style.color == 'red') { b.style.color = 'black' }
    // });

    // 기사 사진
    // var b = document.getElementById("mm1")
    // document.getElementById('btn').addEventListener('click', function () {
    //     if (b.img src = 'images/img_sample1.png') {
    //         b.img src = 'images/IMG_1768.jpg }
    //     else if (b.style.color == 'green') { b.style.color = 'black' }
    // });
}