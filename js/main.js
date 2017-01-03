var inArray=[null];
var outArray=[null];
var idx=1;
var lock=true;
var arr=[null,0,0,1,2,3,4,5];
var arr1=[1,3,4,5,6,7];
inArray[1]=function(){
    $(".page1 .load").css({
        "display":"block"
    })
    var R=[
            {
            "src":"images/b1_01.png",
            "class":"page1-no1"
            },
            {
            "src":"images/b1_02.png",
            "class":"page1-no2"
            },
            {
            "src":"images/b1_03.png" ,
            "class":"page1-no3"
            },
            {
            "src":"images/b1_03_btn.png",
            "class":"page1-no3btn"
            },
            {
            "src":"images/b1_04.png",
            "class":"page1-no4"
            }   
    ]
  
    var count=0;
     for(var i = 0 ; i < R.length ; i++ ){
           var imgs=new Image();
           imgs.src=R[i].src;
           imgs.className=R[i].class;
           $imgs=$(imgs)
           $imgs.load(function(){
            count++;
            $(this).hide().appendTo($(".page1 .inner-c"));
            if(count==R.length){
             $(".page1 .load").css({
                    "display":"none"
                    })
                show();
            }
         })
     }
     function show(){
        $(".page1-no1").show().css({
            "margin-left":"-100px"
        }).animate({
            "margin-left":0
        },1000)
         $(".page1-no2").show().css({
            "margin-left":"-100px"
        }).animate({
            "margin-left":0
        },1000)
         $(".page1-no3").show().css({
            "margin-top":"50px"
        }).animate({
            "margin-top":0
        },1000)
         $(".page1-no3btn").show().css({
            "margin-top":"50px"
        }).animate({
            "margin-top":0
        },1000)
         $(".page1-no4").show().css({
            "margin-left":"-100px"
        }).animate({
            "margin-left":0
        },1000,function(){
            lock=true;
        })
     }
}
outArray[1]=function(){
        $(".page1 img").fadeOut();
}
inArray[2]=function(){
    $(".page2 img").each(function(i){
        $(this).fadeIn(i*100)
    })
    $(".page2 .no1").show().css({
        "margin-top":"300px",
        "left":"-600px"
    }).animate({
         "margin-top":"-200px",
        "left":"-300px"
    },1000)
    $(".page2 .no2").show().css({
        "margin-top":"-400px",
        "left":"0px"
    }).animate({
         "margin-top":"-200px",
        "left":"225px"
    },1000,function(){
        lock=true;
    })
}

outArray[2]=function(){
     $(".page2 .no1").animate({
         "margin-top":"300px",
        "left":"-600px"
    },1000)
    $(".page2 img").fadeOut();
}
inArray[3]=function(){
    $(".page3 .no1").show().velocity({
        "rotateZ":"360deg"
    },1500,function(){
        $(this).velocity({"rotateZ":"0deg"},0)
        lock=true;
    })
     $(".page3 .num").velocity({
        "left":"360px",
        "top":"210px"
     },0).fadeIn(0).velocity("reverse",1000);
}
outArray[3]=function(){
    $(".page3 .no1").velocity({
        "translateZ":"500px"
    },800,function(){
        $(this).velocity({ "translateZ":"0px"})
    }).fadeOut();
    $(".page3 .num").velocity({
        "left":"360px",
        "top":"210px",
     },1000).velocity("reverse",0);    
}
inArray[4]=function(){
    $(".page4 .mas").each(function(i){
        $(this).velocity({
            "translateY":"800px",
        },0).delay(i*50).velocity({
            "translateY":"0px"
        },1000)
    })
    $(".page .iphone1").css({
        "margin-left":"300px",
          "opacity":0.8
    }).animate({
        "margin-left": "0px",
          "opacity":1
    },1500)
     $(".page .iphone2").delay(100).css({
        "margin-left":"50px",
        "opacity":"0"
    }).animate({    
        "margin-left": "0px",
        "opacity":"1"
    },1500,function(){
        lock=true;
    })

}
outArray[4]=function(){
     $(".page .iphone1").css({
        "margin-left":"0px",
          "opacity":1
    }).animate({
        "margin-left": "300px",
          "opacity":0.5
    },500)
     $(".page .iphone2").delay(100).css({
        "margin-left":"0px",
        "opacity":"1"
    }).animate({    
        "margin-left": "50px",
        "opacity":"0"
    },1000)
     $(".page4 .mas").each(function(i){
        $(this).velocity({
            "translateY":"0px",
        },0).delay(800-(i*50)).velocity({
            "translateY":"800px"
        },1000)
    })
}
inArray[1]()
$(document).mousewheel(function(event){
    if(!lock) return;
    lock=false;
       var oldidx=idx
       event.preventDefault();
         idx-=event.deltaY;
         if(idx<1){
            idx=1;
            oldidx=0;
         }else if(idx>4){
            idx=4;
         }
         if(idx!=oldidx){
      $(".content").animate({
          "top":(-idx+1)*100+"%"
      },500,function(){
      })
       outArray[oldidx]();
       inArray[idx]();
       $(".nav li").eq(arr[idx]).addClass("cur").siblings().removeClass("cur");
        $(".round li").eq(arr[idx]).addClass("cur").siblings().removeClass("cur");
}
     
})
$(".nav li").click(function(){
    if(!lock) return;
    lock=false;
    oldidx=idx;
    idx=arr1[$(this).index()];
     $(".nav li").eq(arr[idx]).addClass("cur").siblings().removeClass("cur");
     $(".round li").eq(arr[idx]).addClass("cur").siblings().removeClass("cur");
     $(".content").animate({
          "top":(-idx+1)*100+"%"
      },500,function(){
      outArray[oldidx]();
       inArray[idx]();
      })
})