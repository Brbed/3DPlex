
$(document).ready(function(){
  $('header .DRP_Doun').addClass('DRP_Doun_MOVm_HId')
  $('header .MAIN_MUNU li:nth-child(2)').hover(function(){
  $('header .DRP_Doun').addClass('DRP_Doun_MOVm_HId')
    $('header .AboutUs').toggleClass('DRP_Doun_MOVmnt')
  })
  $('header .AboutUs').hover(function(){
    $('header .AboutUs').toggleClass('DRP_Doun_MOVm_HId')
    $('header .AboutUs').toggleClass('DRP_Doun_MOVmnt')
    $('header .AboutUs').toggleClass('ACTVHDr')
  })

  $('header .MAIN_MUNU li:nth-child(3)').hover(function(){
    $('header .DRP_Doun').toggleClass('DRP_Doun_MOVm_HId')
  $('header .DRP_Doun').toggleClass('DRP_Doun_MOVm_HId')
    $('header .SUrvucs').toggleClass('DRP_Doun_MOVmnt')
  })
  $('header .SUrvucs').hover(function(){
    $('header .DRP_Doun').toggleClass('DRP_Doun_MOVm_HId')
  $('header .DRP_Doun').toggleClass('DRP_Doun_MOVm_HId')
    $('header .SUrvucs').toggleClass('DRP_Doun_MOVmnt')
  })
  // --------------------------------------------------------------
  $('#Our_Projects .COntNt_SliDs .sldTw2 div').addClass('Scti4sn_Dvv_HId')
  $('#Our_Projects .COntNt_SliDs .sldTre3 div').addClass('Scti4sn_Dvv_HId')
  $('#Our_Projects .COntNt_SliDs .sldTw2').hover(function(){
    $('#Our_Projects .COntNt_SliDs .sldTw2 div').removeClass('Scti4sn_Dvv_HId')
    $('#Our_Projects .COntNt_SliDs .sldTre3 div').removeClass('Scti4sn_Dvv_MOvmnT')
    $('#Our_Projects .COntNt_SliDs .sldTre3 div').addClass('Scti4sn_Dvv_HId')
    $('#Our_Projects .COntNt_SliDs .sldTw2 div').addClass('Scti4sn_Dvv_MOvmnT')
  })
  $('#Our_Projects .COntNt_SliDs .sldTre3').hover(function(){
    $('#Our_Projects .COntNt_SliDs .sldTre3 div').removeClass('Scti4sn_Dvv_HId')
    $('#Our_Projects .COntNt_SliDs .sldTre3 div').addClass('Scti4sn_Dvv_MOvmnT')
    $('#Our_Projects .COntNt_SliDs .sldTw2 div').removeClass('Scti4sn_Dvv_MOvmnT')
    $('#Our_Projects .COntNt_SliDs .sldTw2 div').addClass('Scti4sn_Dvv_HId')
  })
  $('#Our_Projects .COntNt_SliDs .sldON1').hover(function(){
    $('#Our_Projects .COntNt_SliDs .sldTre3 div').removeClass('Scti4sn_Dvv_MOvmnT')
    $('#Our_Projects .COntNt_SliDs .sldTre3 div').addClass('Scti4sn_Dvv_HId')
    $('#Our_Projects .COntNt_SliDs .sldTw2 div').removeClass('Scti4sn_Dvv_MOvmnT')
    $('#Our_Projects .COntNt_SliDs .sldTw2 div').addClass('Scti4sn_Dvv_HId')
  })
  $(window).scroll(function(){
    if($(this).scrollTop()>=746){
      $('#About_3DPlex div span').addClass('About_3DPlex_sPn_Movmnt')
      $('#About_3DPlex div h2').addClass('About_3DPlex_H2_Movmnt')
      $('#About_3DPlex div p:nth-child(3)').addClass('About_3DPlex_p_Movmnt')
      $('#About_3DPlex div button').addClass('About_3DPlex_sPn_Movmnt')
      $('#About_3DPlex .R3d_lttr p').addClass('About_3DPlex_sPn_Movmnt')
      $('#About_3DPlex .R3d_lttr h2').addClass('About_3DPlex_p_Movmnt')
    }
    // =================What_We_Offer=================      
    // =================What_We_Offer end =================
    if($(this).scrollTop()>=1000){
			$('.LoUOd1').addClass('LoUOd1_MOVmnt')
      $('#CountR_LoUOd1').addClass('CountR_LoUOd1_movmnt')
			$('.LoUOd2').addClass('LoUOd2_MOVmnt')
      $('#CountR_LoUOd2').addClass('CountR_LoUOd2_movmnt')
			$('.LoUOd3').addClass('LoUOd3_MOVmnt')
      $('#CountR_LoUOd3').addClass('CountR_LoUOd3_movmnt')

      $('#About_3DPlex .We_Turning h2').addClass('About_3DPlex_sPn_Movmnt')
      $('#About_3DPlex .We_Turning p').addClass('About_3DPlex_H2_Movmnt')
		}
    if($(this).scrollTop()>=1356){
      $('#What_We_Offer .TtiTtle p:first-child').addClass('What_We_Offer_TtiTtle_p1')
      $('#What_We_Offer .TtiTtle p:nth-child(3)').addClass('What_We_Offer_TtiTtle_p2')
      $('#What_We_Offer .TtiTtle h2').addClass('What_We_Offer_TtiTtle_h2')
    }
    if($(this).scrollTop()>=2461){
      $('#Trusted_By .Custom .row p span').addClass('Trusted_By_Custom_p_Mvmnt')
      $('#Trusted_By .Custom .row h2:first-child').addClass('Trusted_By_Custom_h2_Mvmnt')
      $('#Trusted_By .Custom .row h2:nth-child(2)').addClass('Trusted_By_Custom_h2Span_Mvmnt')
      $('#Trusted_By .Custom .row .co1 button').addClass('Trusted_By_Custom_p_Mvmnt')
      $('#Trusted_By .coO2 button').addClass('Trusted_By_coO2button')
    }
    if($(this).scrollTop()>=2787){
      $('#Testimoniaals .cOo2 h2:nth-child(2)').addClass('Trusted_By_Custom_h2Span_Mvmnt')
    }
    if($(this).scrollTop()>=3574){
      $('#Our_Projects .TTittle span').addClass('What_We_Offer_TtiTtle_p1')
      $('#Our_Projects .TTittle h2').addClass('What_We_Offer_TtiTtle_h2')
      $('#Our_Projects .TTittle p').addClass('What_We_Offer_TtiTtle_p2')
    }
    if($(this).scrollTop()>=3777){
      $('#Our_Projects .COntNt_SliDs .sldON1').addClass('sec_SecionDIV_One')
      $('#Our_Projects .COntNt_SliDs .sldTw2').addClass('sec_SecionDIV_TWo')
      $('#Our_Projects .COntNt_SliDs .sldTre3').addClass('sec_SecionDIV_TRe')
    }
    if($(this).scrollTop()>=4507){
      $('#Quick_Help .tiTTle h2').addClass('Trusted_By_Custom_h2Span_Mvmnt')
    }
    if($(this).scrollTop()>=4678){
      $('#Quick_Help .Slidr_collaPs').addClass('Scti4sn_Dvv_MOvmnT')
    }
    if($(this).scrollTop()>=5333){
      $('#Precision_Help .RIGht_SLiD h2').addClass('Trusted_By_Custom_h2_Mvmnt')
      $('#Precision_Help .RIGht_SLiD p').addClass('What_We_Offer_TtiTtle_h2')
    }
  })
})
// ---------------------------------------------------
CountrOne=document.getElementById('CountrOne')
durSLdr_One=20
CountrNumOne=1

CountrTWo=document.getElementById('CountrTWo')
durSLdr_two=500
CountrNumtwo=0

CountrOneFUNC=setInterval(function(){
    CountrNumOne++
    CountrOne.innerHTML=CountrNumOne + '+'
    if(CountrNumOne>=176){
      clearInterval(CountrOneFUNC)
    }
},durSLdr_One)
CountrtwoFUNC=setInterval(function(){
    CountrNumtwo++
    CountrTWo.innerHTML=CountrNumtwo + 'Million'
    if(CountrNumtwo>=6){
      clearInterval(CountrtwoFUNC)
    }
},durSLdr_two)

SECC_Transparen=document.getElementById('SECC_Transparen')
No_MinimumOrder=document.getElementById('No_MinimumOrder')
Accurate_ssPrototyping=document.getElementById('Accurate_ssPrototyping')
Trusted_ssionals=document.getElementById('Trusted_ssionals')
HHHyCount=document.getElementById('HHHyCount')
duf=50
nuM=1


  comntr=setInterval(COUnfsCrl,duf)
    function COUnfsCrl(){
  HHHyCount.innerHTML= nuM++ + '%'
  if(nuM>=97){
    clearInterval(comntr)
  }
    }
function scollMe(){
  if(this.scrollY>=200){
    SECC_Transparen.className='sec_SecionDIV_One'
    No_MinimumOrder.className='sec_SecionDIV_TWo'
    Accurate_ssPrototyping.className='sec_SecionDIV_TRe'
    Trusted_ssionals.className='sec_SecionLSt_h2_motion'

    D3_Printing=document.getElementById('D3_Printing')
    D3D_Scanning=document.getElementById('D3D_Scanning')
    Casting=document.getElementById('Casting')
    CNC_Machining=document.getElementById('CNC_Machining')

    if(this.scrollY>=1562){
    D3_Printing.className='sec_SecionDIV_One'
    D3D_Scanning.className='sec_SecionDIV_TWo'
    Casting.className='sec_SecionDIV_TRe'
    CNC_Machining.className='sec_SecionDIV_F0r'
    }
    brans=document.getElementById('brans')
      brans.style.left='5%'
    if(this.scrollY>=2311){
      brans.style.left='0%'
    }
    if(this.scrollY>=2361){
      brans.style.left='-5%'
    }
    if(this.scrollY>=2411){
      brans.style.left='-10%'
    }
    if(this.scrollY>=2461){
      brans.style.left='-15%'
}
}
}