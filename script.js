$(document).ready(function () {
    $('#arrayVideos').hide();
    $('#arrayImages').hide();
    $('#randomBtn').hide();

    $("#imageView").click(function () {
        $('#arrayImages').show();
        $('#arrayVideos').hide();
        $('#randomBtn').show();
        var image = new Array();
        image[0] = "./assets/KauaiEucalyptus_Small.PNG";
        image[1] = "./assets/mtnSunset_Small.PNG";
        image[2] = "./assets/moneyTree_Small.PNG";
        image[3] = "./assets/IMG_0073.PNG";
        image[4] = "./assets/milkyRed_Small.PNG";
        image[5] = "./assets/kauaiPineapple_Small.PNG";
        image[6] = "./assets/kauaiPalm_Small.PNG";
        image[7] = "./assets/kauaiFlower_Small.PNG";
        image[8] = "./assets/kauaiCove_Small.PNG";
        image[9] = "./assets/kauaiSunset_Small.PNG";
        image[10] = "./assets/myProfilePic_Small.PNG";
        image[11] = "./assets/kauaiSpider_Small.PNG";
        image[12] = "./assets/utahSunset_Small.PNG";
        var size = image.length;
        var x = Math.floor(size * Math.random());
        $('#arrayImages').attr('src', image[x]);
        $("#randomBtn").click(function () {
            var image = new Array();
            image[0] = "./assets/KauaiEucalyptus_Small.PNG";
            image[1] = "./assets/mtnSunset_Small.PNG";
            image[2] = "./assets/moneyTree_Small.PNG";
            image[3] = "./assets/IMG_0073.PNG";
            image[4] = "./assets/milkyRed_Small.PNG";
            image[5] = "./assets/kauaiPineapple_Small.PNG";
            image[6] = "./assets/kauaiPalm_Small.PNG";
            image[7] = "./assets/kauaiFlower_Small.PNG";
            image[8] = "./assets/kauaiCove_Small.PNG";
            image[9] = "./assets/kauaiSunset_Small.PNG";
            image[10] = "./assets/myProfilePic_Small.PNG";
            image[11] = "./assets/kauaiSpider_Small.PNG";
            image[12] = "./assets/utahSunset_Small.PNG";
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