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
        image[1] = "./assets/IMG_0028.PNG";
        image[2] = "./assets/IMG_0036.PNG";
        image[3] = "./assets/IMG_0073.PNG";
        image[4] = "./assets/IMG_0076.PNG";
        image[5] = "./assets/IMG_3428.PNG";
        image[6] = "./assets/IMG_3562.PNG";
        image[7] = "./assets/IMG_3592.PNG";
        image[8] = "./assets/IMG_4170.PNG";
        image[9] = "./assets/IMG_4303.PNG";
        image[10] = "./assets/myProfilePic2.PNG";
        image[11] = "./assets/spiderKauai.PNG";
        image[12] = "./assets/sunsetKauai.PNG";
        image[13] = "./assets/sunsetUtah.PNG";
        var size = image.length;
        var x = Math.floor(size * Math.random());
        $('#arrayImages').attr('src', image[x]);
        $("#randomBtn").click(function () {
            var image = new Array();
            image[0] = "./assets/bgImg.PNG";
            image[1] = "./assets/IMG_0028.PNG";
            image[2] = "./assets/IMG_0036.PNG";
            image[3] = "./assets/IMG_0073.PNG";
            image[4] = "./assets/IMG_0076.PNG";
            image[5] = "./assets/IMG_3428.PNG";
            image[6] = "./assets/IMG_3562.PNG";
            image[7] = "./assets/IMG_3592.PNG";
            image[8] = "./assets/IMG_4170.PNG";
            image[9] = "./assets/IMG_4303.PNG";
            image[10] = "./assets/myProfilePic2.PNG";
            image[11] = "./assets/spiderKauai.PNG";
            image[12] = "./assets/sunsetKauai.PNG";
            image[13] = "./assets/sunsetUtah.PNG";
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