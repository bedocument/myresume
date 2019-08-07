$(document).ready(function(){
  console.log('javascript ready!!!!');
//偵測windows寬度 , 如果 >992 就自動把左側menu關閉 , 因為已出現上方menu
  window.onresize = function(event) {
    console.log('windows resize');

    var w = $(window).width();
    var h = $(window).height();
    //當resize的時候 , 把#FeaturedImg高度設定清掉
    $("#FeaturedImg").css("height",'');
    console.log('width='+w+'--height='+h);  
  
if(w>992)
{
  $('#mobile-demo').sidenav('close');

}

};
//end of 偵測windows寬度 , 如果 >992 就自動把左側menu關閉 , 因為已出現上方menu

//綁定左側menu
$('#mobile-demo').sidenav();
//end of 綁定左側menu

//固定上方menu欄位
$(window).scroll(function () {
 console.log('window-scroll');
        if ($(this).scrollTop() > 10) {
            $('header').addClass("menufixed");
        }
        else {
            $('header').removeClass("menufixed"); 
        }
    });
 //end of 固定上方menu欄位


//綁定超連結滑動動畫
//OK
     $(document).on('click', 'a[href^="#"]', function (event) {

      console.log('a_event');
      event.preventDefault();
      let a_id = $(this).closest('a').attr('id');
      
      if(typeof(a_id)=="undefined")
      {
        console.log('a_id not exists==='+a_id);
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      }
      else
      {
        //偵測目前瀏覽器的高度 , 然後加到#FeaturedImg , 
        //目的是當點選箭頭的時候把#FeaturedImg清空仍可以保持當下高度 , (#FeaturedImg清空, 高度=0 左右箭頭因為沒高度會出現閃爍狀況)
        //window.onresize(瀏覽器變更大小的時候) , 再去把#FeaturedImg的高度=0
        let myhi = $('#FeaturedImg').height();
        let mywindow_w=$(window).width();   // returns width of browser viewport
        // $(document).width();  // returns width of HTML document (same as pageWidth in screenshot)
        let content_l="<h4 class='wow fadeInUp' id='FeaturedTextH4'  data-wow-duration='0.8s' data-wow-delay='0.3s' style='color:#0AA78F;'>UI Design</h4>"+
        "<h2 class='wow fadeInUp' id='FeaturedTextH2'  data-wow-duration='0.8s' data-wow-delay='0.5s'>MES Data Collect-M</h2>";
        let content_m="<h4 class='wow fadeInUp' id='FeaturedTextH4'  data-wow-duration='0.8s' data-wow-delay='0.3s' style='color:#0AA78F;'>UI Design</h4>"+
        "<h4 class='wow fadeInUp' id='FeaturedTextH2'  data-wow-duration='0.8s' data-wow-delay='0.5s'>MES Data Collect-M</h4>";
        let mycontent="";
        if(mywindow_w <992)
        {
          mycontent=content_m;
        }
        else
        {
          mycontent=content_l;
        }

        // //保持當下的高度
        // $("#FeaturedImg").css("height",myhi);
        // //清空內容    
        // $('#FeaturedImg').html('');
        // $('#FeaturedText').html('');
        // console.log('FeaturedImg-h='+myhi);
        // console.log('a_id exists==='+a_id);
        // if(a_id=="arrow-right")
        // {          
          
        //  let new_html="<img  class='wow fadeInUp' data-wow-duration='0.8s' data-wow-delay='0.3s' src='images/img-2-6_1058X1000.jpg'  style='height:100%;width: 100%;'></img>" ;
        //  let new_Texthtml=                                                                       
        //  mycontent+
        //  "<span class='wow fadeInUp' id='FeaturedTextspan'  data-wow-duration='0.8s' data-wow-delay='0.8s'>programmer</span>"+
        //  "<p class='wow fadeInUp' id='FeaturedTextp'  data-wow-duration='0.8s' data-wow-delay='0.8s'>"+
        //  "Stamp is a clean and elegant Multipurpose Landing Page Template. "+
        //  "It will fit perfectly for Startup, Web App or any type of Web Services."+
        //  "It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. "+
        //  "All variations are organized separately so you can use / customize the template very easily.</p>" ;
        //  $('#FeaturedImg').html(new_html);
        //  $('.FeaturedText').html(new_Texthtml);
        // //  $('#FeaturedTextH4').html('web design 2');
        // //  $('#FeaturedTextH2').html('MES 222');
        // //  $('#FeaturedTextHspan').html('im a good programmer');
        // //  $('#FeaturedTextp').html('AAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAA AAAAA');
       
        // }
        // if(a_id=="arrow-left")
        // {          
          
        //  let new_html="<img  class='wow fadeInUp' data-wow-duration='0.8s' data-wow-delay='0.3s' src='images/img-2-3_1058X1000.jpg'  style='height:100%;width: 100%;'></img>" ;
        //  let new_Texthtml=                                                                       
        //  mycontent+
        //  "<span class='wow fadeInUp' id='FeaturedTextspan'  data-wow-duration='0.8s' data-wow-delay='0.8s'>Design & Development</span>"+
        //  "<p class='wow fadeInUp' id='FeaturedTextp'  data-wow-duration='0.8s' data-wow-delay='0.8s'>"+
        //  "Stamp is a clean and elegant Multipurpose Landing Page Template. "+
        //  "It will fit perfectly for Startup, Web App or any type of Web Services."+
        //  "It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. "+
        //  "All variations are organized separately so you can use / customize the template very easily.</p>" ;
        //  $('#FeaturedImg').html(new_html);
        //  $('.FeaturedText').html(new_Texthtml);
        // //  $('#FeaturedTextH4').html('Web Design');
        // //  $('#FeaturedTextH2').html('MES Dashboard');
        // //  $('#FeaturedTextHspan').html('Design & Development');
        // //  $('#FeaturedTextp').html('Stamp is a clean and elegant Multipurpose Landing Page Template. It will fit perfectly for Startup, Web App or any type of Web Services. It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. All variations are organized separately so you can use / customize the template very easily.');
       
        // }
      }



  });
//   $(document).on('click', 'waves-effect', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// }); 
//end of 綁定超連結滑動動畫  
  
//go to top 按鈕
$(window).scroll(function(){
  //var $(window).scrollTop(); 為 scroll
  var scroll = $(window).scrollTop();
  console.log('scroll==='+scroll);
  if( scroll >= 70){
    // 當卷軸超過70px,.gototop就淡入，如果小於就淡出
    $(".gototop").fadeIn();
    
  }else{
    
    $(".gototop").fadeOut();
    
  }
});
// 當我按下.gototop時，添加動畫讓卷軸跑道最上面
$('.gototop').click(function(){
  $('html,body').animate({
    scrollTop:$('html').offset().top
  })
  
  return false;
});
//end of go to top 按鈕

//綁定Modal視窗
$('.modal').modal(
  {
    //設定選項
    // preventScrolling:true,
    // dismissible:true,
  }
  

);

//end of 綁定Modal視窗

//超連結圖片彈出Modal綁定事件
$("a.modal-trigger").click(function()
{
console.log('href hihix');
});
//end of 超連結圖片彈出Modal綁定事件

//綁定圖片彈出視窗
$('.materialboxed').materialbox();
//end of 綁定圖片彈出視窗

//WOW.JS
new WOW().init();

//id=a1的click事件

    //新寫法 on (jquery 1.7之後支援), 可以把動態加入的元件加入event
    $(document).on('click', 'img', function (event) {
      console.log('img_click event');
      console.log($(this).attr('src'));
      var new_src=$(this).attr('src');
      var mycheck_text=new_src.replace("images/", "").replace("500X500.jpg","");
      //mycheck_text=img-1 , img-2, img-3......用此去MyobjArray找
      console.log(' mycheck_text='+ mycheck_text);
      let MyobjArray = [
        { img: 'img-1', title: 'ordering system',
        skill:'<img class="myimg1" src="images/c-logo.png"><img class="myimg1" src="images/SQLserver.png"><img class="myimg1" src="images/html5-logo.png"><img class="myimg1" src="images/css3-logo.png">',
        text:"the system was builded with asp for a long time ago , so i rebuild this system with asp.net"+
            "Additionally,i also build a RWD version."+
             "<br/>Complete time:2014"+
             "<ul>"+
             "<li>Features：</li>"+
             "<li>-ordering</li>"+
             "<li>-setting menu</li>"+
             "<li>-querying record </li>"+
             "<li>-status</li>"+
             "<li>-ordering notice</li>"+
            "</ul>"        　
         },
        { img: 'img-2', title: 'MES-Dashboard system',
        skill:'<img class="myimg1" src="images/restapi.png"><img class="myimg1" src="images/SQLserver.png"><img class="myimg1" src="images/javascript-logo.png"><img class="myimg1" src="images/html5-logo.png"><img class="myimg1" src="images/css3-logo.png">',
        text:"The Dashboard displays the equipment connection status and the equipment real-time data immediately."+
             "<br/>Complete time:2018"+
             "<ul>"+
             "<li>Features：</li>"+             
             "<li>-production status</li>"+
             "<li>-equipment connection status</li>"+
             "<li>-real time equipment data</li>"+             
            "</ul>"        　
         },
        { img: 'img-3', title: 'Todolist Approval System',
        skill:'<img class="myimg1" src="images/kendoui.png"><img class="myimg1" src="images/restapi.png"><img class="myimg1" src="images/c-logo.png"><img class="myimg1" src="images/SQLserver.png"><img class="myimg1" src="images/javascript-logo.png"><img class="myimg1" src="images/bootstrap-logo.png">',
        text:"the system supplys the employees with tracking the todolist of the jobs."+
             "<br/>Complete time:2017"+
             "<ul>"+
             "<li>Features：</li>"+             
             "<li>-create todolist</li>"+
             "<li>-approval todolist</li>"+
             "<li>-query todolist </li>"+
            "</ul>"        　
         },
        { img: 'img-4', title: 'Employee system(RWD)',
        skill:'<img class="myimg1" src="images/bootstrap-logo.png"><img class="myimg1" src="images/html5-logo.png"><img class="myimg1" src="images/css3-logo.png"> ',
        text:"the system supplys the employees with common useful function."+
             "<br/>Complete time:2016"+
             "<ul>"+
             "<li>Features：</li>"+             
             "<li>-ordering system</li>"+
             "<li>-extension query</li>"+
             "<li>-IDC monitoring</li>"+
             "<li>-production management data</li>"+
            "</ul>"        　
         },
        { img: 'img-5', title: 'AD account system',
        skill:'<img class="myimg1" src="images/c-logo.png"><img class="myimg1" src="images/SQLserver.png"><img class="myimg1" src="images/javascript-logo.png"><img class="myimg1" src="images/bootstrap-logo.png">',
        text:"the system supplys the IT staff with Easier way to create AD account."+
             "<br/>Complete time:2015"+
             "<ul>"+
             "<li>Features：</li>"+            
             "<li>-query,create AD account</li>"+
             "<li>-create Email</li>"+
             "<li>-disable AD account/Email</li>"+
             "<li>-delete AD account/Email</li>"+
            "</ul>"        　
         },
        { img: 'img-6', title: 'Line-Temperature and humidity chatbot',
        skill:'<img class="myimg1" src="images/restapi.png"><img class="myimg1" src="images/c-logo.png"><img class="myimg1" src="images/SQLserver.png">',
        text:"the chatbot will alarm as soon as the Temperature or the humidity Exceeds the standard."+
             "<br/>Complete time:2016"+
             "<ul>"+
             "<li>Features：</li>"+            
             "<li>-query temperature and humidity</li>"+
             "<li>-temperature and humidity alarm</li>"+
            "</ul>"        　
         },     
        { img: 'img-7', title: 'Satisfaction Survey system ',
        skill:'<img class="myimg1" src="images/c-logo.png"><img class="myimg1" src="images/SQLserver.png">',
        text:"the system supplys the employees with the response of the Staff Training."+
             "<br/>Complete time:2012"+
             "<ul>"+
             "<li>Features：</li>"+             
             "<li>-Questionnaire</li>"+
             "<li>-Statistics</li>"+
            "</ul>"        　
         }, 
        { img: 'img-8', title: 'training system',
        skill:'<img class="myimg1" src="images/c-logo.png"><img class="myimg1" src="images/SQLserver.png">',
        text:"the system supplys the employees with testing after the training course."+
             "<br/>Complete time:2013"+
             "<ul>"+
             "<li>Features：</li>"+            
             "<li>-setting question</li>"+
             "<li>-test</li>"+
            "</ul>"        　
         },          
      ];
      let Myobj = search(mycheck_text, MyobjArray);
      console.log('mytitle='+Myobj.title);
      $('#modal_title').text(Myobj.title);
      $('#modal_text').html(Myobj.text);
      $('#modal_skill').html(Myobj.skill);
      $('#myimg1').attr('src',new_src);
      $("#myimg1").width('60%').height('60%');

    });

    //輪播初始化

    // $('.carousel').carousel(
    //   {
    //     fullWidth:false,
    //     indicators:true,
    //     numVisible:5,
    //     noWrap:false,

    //   }
    // );

    // //輪播method

    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.carousel');
    //   var instances = M.Carousel.init(elems, options);    
    //  // instance.destroy();
    // });

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators:true,
    
    }); 


    







  });
//end of document ready



//找出Object-Arrary裡面的Object
function search(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].img === nameKey) {
          return myArray[i];
      }
  }
}

//mmenu按鈕要判斷瀏覽器大小 , 如果是桌面模式 就不縮小 , 如果是手機模式 就縮小
function myFunction(){
  var w = $(window).width();
  var h = $(window).height();
 // console.log('width='+w+'--height='+h);
      
  if(w<993)
  {
    $('.sidenav').sidenav('close');
  
  }
  
}




  //動態產生專案html圖檔區塊
function myprojects_row_append(){


  // var mySecondDiv=$(" <div class='a1 col s12 m12 l6 xl3'><a  href='' class='modal-trigger' data-target='modal1'> <div class='img-wrap'><img class='mydemo' src='images/img-1500X500.jpg'></div></a></div>");
  // $('#myprojects_row').append(mySecondDiv);
}



