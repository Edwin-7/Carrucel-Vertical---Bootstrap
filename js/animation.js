// function avanza(){
//     var panel= $('.slider').find('.S_panel');
//        var n_obj= $('.slider').find('.S_panel').size();

       
//         $.each(panel,function(i,obj){
            
//             if ($(obj).hasClass('panel-active')) 
//             {

//                 $(obj).slideUp(700, function(){
//                     $(obj).removeClass('panel-active');
//                 });

//                 if (i+1 >= n_obj) 
//                 {
//                      $($('.slider').find('.S_panel').get(0)).slideDown(700,
//                         function(){
//                          $($('.slider').find('.S_panel').get(0)).addClass('panel-active');
//                         });
//                     return false;
//                 }else{
//                     $($('.slider').find('.S_panel').get(i+1)).slideDown(700,
//                         function(){
//                         $($('.slider').find('.S_panel').get(i+1)).addClass('panel-active');
//                         });
//                     return false;
//                 }
//            }
//         });
// }

// setInterval(function()
// {
//  avanza() 
// }, 6000);

function muestra_big(elemnt){
     img= $(elemnt).data('img');

    $('.estatic').fadeIn(200);
    $('#img_big').attr('src',img)
}

function cierra_img(){
   
    $('.estatic').fadeOut(200);
}

$(document).on('ready', function(){



    $('.big_img').click(function(){
       
        muestra_big($(this));
        console.log($(this).data('img'));
    });

    $('.estatic').click(function(){
        cierra_img()
    });

    $('#btnAde').click(function(){

       var panel= $('.slider').find('.S_panel');
       var n_obj= $('.slider').find('.S_panel').size();

        $.each(panel,function(i,obj){
            
            if ($(obj).hasClass('panel-active')) 
            {

                $(obj).slideUp(700, function(){
                    $(obj).removeClass('panel-active');
                });

                if (i+1 >= n_obj) 
                {
                     $($('.slider').find('.S_panel').get(0)).slideDown(700,
                        function(){
                         $($('.slider').find('.S_panel').get(0)).addClass('panel-active');
                        });
                    return false;
                }else{
                    $($('.slider').find('.S_panel').get(i+1)).slideDown(700,
                        function(){
                        $($('.slider').find('.S_panel').get(i+1)).addClass('panel-active');
                        });
                    return false;
                }
           }
        });
    });

    $('#btnAtr').click(function(){

        var panel= $('.slider').find('.S_panel');
       var n_obj= $('.slider').find('.S_panel').size();

       
        $.each(panel,function(i,obj){
            
            if ($(obj).hasClass('panel-active')) 
            {

                $(obj).slideUp(700, function(){
                    $(obj).removeClass('panel-active');
                });

                if (i == 0) 
                {
                     $($('.slider').find('.S_panel').get(n_obj - 1)).slideDown(700,
                        function(){
                         $($('.slider').find('.S_panel').get(n_obj - 1)).addClass('panel-active');
                        });
                     console.log('priemera ' +i)
                    return false;
                }else{
                    $($('.slider').find('.S_panel').get(i-1)).slideDown(700,
                        function(){
                        $($('.slider').find('.S_panel').get(i-1)).addClass('panel-active');
                        });
                    console.log(i)
                    return false;
                }
           }
        });
    });

    
  
})

