angular.module("ionicApp.controllers",[]);
//---2016-01-01T07:00:00 /yyyy-mm-dd ------
var events=[
  {
     	title:' <img src="/dada.jpg" height="25" width="25">NEW YEAR <i class="fa fa-flag fa-2x" style="color:red"></i> <br>मकर-संक्रांत',
     	start:"2015-01-03",
     	description:'<i class="fa fa-flag" style="color:red"></i>long description<b style="color:red">sasasasa sasa </b><br>sasa sasa sasa sasas asa sasas asas as asa sas ',
        className:'publicHoliday',
        HighPriority:1    },
     {
     title:"मार्गशीर्ष कृ.७<br>उत्तरा २०.६६",
     description:'',
     description:'<center><h2></h2></center><div class="allDetail">मार्गशीर्ष कृ.७<br>उत्तरा २०.६६</div>',
    // url:"http://google.com/",
     start:"2016-01-01"
     },
     {
     title:"कालाष्टमी<br>मार्गशीर्ष कृ.८",
     description:'<center><h2></h2></center><div class="allDetail">कालाष्टमी<br>मार्गशीर्ष कृ.८<br>हस्त २३.३३</div>',
     start:"2016-01-02"
     },
     {
     title:"महिला मुक्तीदिन<br>सावित्रीबाई फ़ुले जयंती ",
     description:'<center class="mainEvent"><h2>* महिला मुक्तीदिन<br>* सावित्रीबाई फ़ुले जयंती </h2></center><div class="allDetail">मार्गशीर्ष कृ.९<br>चित्रा २६.३३</div>',
     start:"2016-01-03"
     },
        
     {
     	title:'मार्गशीर्ष कृ.१०<br>श्री गोंदवलेकर महाराज पुण्यतिथी',
     	start:"2016-01-04",
        description:'<center><h2>* श्री गोंदवलेकर महाराज पुण्यतिथी</h2></center><div class="allDetail">मार्गशीर्ष कृ.१०<br>स्वाती  २९.१६</div>',
     },
     {
     	title:'<i class="fa fa-flag fa-2x" style="color:red"></i> <br>सफला स्मार्त एकादशी',
        start:"2016-01-05",
        description:'<center><h2><i class="fa fa-flag fa-4x" style="color:red"></i> सफला स्मार्त एकादशी</h2></center><div class="allDetail">मार्गशीर्ष कृ.११<br>विशाखा.अहोरात्र </div>',
     },
    {
    title:'<i class="fa fa-flag fa-2x" style="color:red"></i> <br>भागवत एकादशी',
	start:"2016-01-06",
    description:'<center><h2><i class="fa fa-flag fa-4x" style="color:red"></i> भागवत एकादशी</h2></center><div class="allDetail">मार्गशीर्ष कृ.१२<br>विशाखा. ०७.२५</div>',
    },
    {
	title:"मार्गशीर्ष कृ.१२<br>प्रदोष",
	start:"2016-01-07",
    description:'<center><h2></h2></center><div class="allDetail">मार्गशीर्ष कृ.१२<br>अनुराधा. ०८.५६<br>प्रदोष</div>', 
    },
    {
	title:"शिवरात्री<br>मार्गशीर्ष कृ.१३ ",
	start:"2016-01-08",
    description:'<center><h2>शिवरात्री</h2></center><div class="allDetail">मार्गशीर्ष कृ.१३<br> जेष्ठा०९.४७<br>शिवरात्री <br>श्री संत सेवागिरी महाराज <br>पुसेगाव रथ उत्सव </div>', 
    },
    {
	title:"<i class='fa fa-circle fa-2x' style='color:black'></i> <br>अमावस्या",
	start:"2016-01-09",
    description:'<center><h2><i class="fa fa-circle fa-2x" style="color:black"></i>अमावस्या</h2></center><div class="allDetail">अमावस्या समाप्ती-सकाळी ०७.००<br>पौष शु.१<br>पूर्वाषाढा.०९.४१<br>पौष मासाआरंभ <br>ठाणे डवले नगर सप्ताह २</div>', 
    },
    {
	title:"पौष शु.१<br>पूर्वाषाढा.०९.४१",
	start:"2016-01-10",
    description:'</h2></center><div class="allDetail">मार्गशीर्ष अमावस्या-मूळ.१०.००<br>दर्शवेळा अमावस्या प्रारंभ-सकाळी ०७.५३<br>मार्गशीर्ष कृ.१४<br>पौष मासाआरंभ <br>ठाणे डवले नगर सप्ताह २</div>', 
    },
    {
	title:"Birthday Party",
	start:"2016-01-11",
    description:'<center><h2>शिवरात्री</h2></center><div class="allDetail">मार्गशीर्ष कृ.१३<br> जेष्ठा०९.४७<br>शिवरात्री <br>श्री संत सेवागिरी महाराज <br>पुसेगाव रथ उत्सव </div>', 
    },
    {
	title:"Birthday Party",
	start:"2016-01-12",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-13",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-14",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-15",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-16",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-17",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-18",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-19",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-20",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-21",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-22",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-23",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-24",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-25",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-26",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-27",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-28",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-29",
	imageurl:"img/dada.png"
    },
    {
	title:"Birthday Party",
	start:"2016-01-30",
	imageurl:"img/dada.png"
    }

     ];