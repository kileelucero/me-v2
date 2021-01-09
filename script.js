$(document).ready(function () {
    $('#arrayVideos').hide();
    $('#arrayImages').hide();
    $('#randomBtn').hide();

    $("#imageView").click(function () {
        $('#arrayImages').show();
        $('#arrayVideos').hide();
        $('#randomBtn').show();
        var image = new Array();
        image[0] = "./assets/bgImg.PNG";
        image[1] = "./assets/mtnSunset_Small.JPG";
        image[2] = "./assets/moneyTree_Small.JPG";
        image[3] = "./assets/IMG_0073.JPG";
        image[4] = "./assets/milkyRed_Small.JPG";
        image[5] = "./assets/kauaiPineapple_Small.JPG";
        image[6] = "./assets/kauaiPalm_Small.JPG";
        image[7] = "./assets/kauaiFlower_Small.JPG";
        image[8] = "./assets/kauaiCove_Small.JPG";
        image[9] = "./assets/kauaiSunset_Small.JPG";
        image[10] = "./assets/myProfilePic_Small.jpg";
        image[11] = "./assets/kauaiSpider_Small.jpeg";
        image[12] = "./assets/utahSunset_Small.jpeg";
        var size = image.length;
        var x = Math.floor(size * Math.random());
        $('#arrayImages').attr('src', image[x]);
        $("#randomBtn").click(function () {
            var image = new Array();
            image[0] = "./assets/bgImg.PNG";
            image[1] = "./assets/mtnSunset_Small.JPG";
            image[2] = "./assets/moneyTree_Small.JPG";
            image[3] = "./assets/IMG_0073.JPG";
            image[4] = "./assets/milkyRed_Small.JPG";
            image[5] = "./assets/kauaiPineapple_Small.JPG";
            image[6] = "./assets/kauaiPalm_Small.JPG";
            image[7] = "./assets/kauaiFlower_Small.JPG";
            image[8] = "./assets/kauaiCove_Small.JPG";
            image[9] = "./assets/kauaiSunset_Small.JPG";
            image[10] = "./assets/myProfilePic_Small.jpg";
            image[11] = "./assets/kauaiSpider_Small.jpeg";
            image[12] = "./assets/utahSunset_Small.jpeg";
            var size = image.length
            var x = Math.floor(size * Math.random())
            $('#arrayImages').attr('src', image[x]);
        });
    });

    $("#videoView").click(function () {
        $('#arrayImages').hide();
        $("#randomBtn").hide();
        $('#arrayVideos').show();
        var video = new Array();
        video[0] = "./assets/videos/kanarravilleFalls.MP4";
        var size = video.length;
        var x = Math.floor(size * Math.random());
        $('#arrayVideos').attr('src', video[x]);
    });

});