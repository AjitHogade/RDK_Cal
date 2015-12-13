angular.module("ionicApp.controllers",[]);
//---2016-01-01T07:00:00 /yyyy-mm-dd ------
var events=[
  {
     	title:' <img src="img/eventIco/dada.jpg" height="25" width="25">NEW YEAR <i class="fa fa-flag fa-2x" style="color:red"></i> <br>मकर-संक्रांत',
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
    description:'<center><h2><i class="fa fa-circle fa-2x" style="color:black"></i>अमावस्या</h2></center><div class="allDetail">दर्शवेळा अमावस्या प्रारंभ-सकाळी ०७.५३<br>मार्गशीर्ष कृ.१४<br>मार्गशीर्ष अमावस्या मूळ.१०.००<br>ठाणे डवले नगर सप्ताह प्रारंभ</div>', 
    },
    {
	title:"पौष शु.१<br>पूर्वाषाढा.०९.४१",
	start:"2016-01-10",
    description:'</h2></center><div class="allDetail">मार्गशीर्ष अमावस्या-मूळ.१०.००<br>दर्शवेळा अमावस्या प्रारंभ-सकाळी ०७.५३<br>मार्गशीर्ष कृ.१४<br>पौष मासाआरंभ <br>ठाणे डवले नगर सप्ताह २</div>', 
    },
    {
	start:"2016-01-11",
    description:'<center><h2>शिवरात्री</h2></center><div class="allDetail">मार्गशीर्ष कृ.१३<br> जेष्ठा०९.४७<br>शिवरात्री <br>श्री संत सेवागिरी महाराज <br>पुसेगाव रथ उत्सव </div>', 
    },
    {
title:"पौष शु.२<br>उत्तराषाढा.०८.५७",
start:"2016-01-11",
description:"<center><h2>ठाणे डवले नगर सप्ताह ३</h2></center><div class='allDetail'>पौष शु.२<br>उत्तराषाढा.०८.५७<br>ठाणे डवले नगर सप्ताह ३</div>"
},
{
title:"<img src='img/eventIco/vivekanand.jpg' height='25' width='25'><br>स्वामी विवेकानंद जयंती",
start:"2016-01-12",
description:"<center><h2><img src='img/eventIco/vivekanand.jpg' height='25' width='25'>स्वामी विवेकानंद जयंती</h2></center><div class='allDetail'>राष्ट्रीय युवा दिन <br>पौष शु.३<br>उत्तराषाढा.०७.५४<br>धनिष्ठा .३०.३९<br>ठाणे डवले नगर सप्ताह ४</div>"
},
{
title:"शततारका .२९.१८<br>पौष शु.४",
start:"2016-01-13",
description:"<center><h2></h2></center><div class='allDetail'>पौष शु.४<br>शततारका .२९.१८<br>ठाणे डवले नगर सप्ताह ५</div>"
},
{
title:"भोगी <br>धनुर्मास समाप्ती ",
start:"2016-01-14",
description:"<center><h2>भोगी </h2></center><div class='allDetail'>धनुर्मास समाप्ती<br>पूर्व भाद्रपदा.२७.५४<br> पौष शु.५<br>ठाणे डवले नगर सप्ताह ६</div>"
},
{
title:"गुरुदेव दादांची शुध्द षष्ठी<br>मकर संक्रांती पुण्यकाल",
start:"2016-01-15",
description:"<center><h2>गुरुदेव दादांची शुध्द षष्ठी<br>मकर संक्रांती पुण्यकाल</h2></center><div class='allDetail'>मकर संक्रांती पुण्यकाल सूर्याउदयापासून - सुर्यास्तापर्यंत<br>श्रीगुरुभक्त मंडळ बोरखळ प्रसाद<br>ठाणे डवले नगर सप्ताह कला <br>उ.भाद्रपदा  २६.३२<br>पौष शु.६</div>"
 },
{
title:"करि दिन <br>पौष शु.७",
start:"2016-01-16",
description:"<center><h2>करि दिन </h2></center><div class='allDetail'>पौष शु.७<br>रेवती .२५.१२</div>"
 },
{
title:"<img src='img/eventIco/durga.jpg' height='25' width='25'><br>दुर्गाष्ठमी<br> पौष शु.८",
start:"2016-01-17",
description:"<center><h2><img src='img/eventIco/durga.jpg' height='25' width='25'>दुर्गाष्ठमी</h2></center><div class='allDetail'> पौष शु.८<br>अश्विनी .23.५७</div>"
 },
{
title:" पौष शु.९<br>भरणी .२२.४७",
start:"2016-01-18",
description:"<center><h2></h2></center><div class='allDetail'> पौष शु.९<br>भरणी .२२.४७</div>"
 },
{
title:" पौष शु.१०<br>कृतिका .२१.४५",
start:"2016-01-19",
description:"<center><h2></h2></center><div class='allDetail'>पौष शु.१०<br>कृतिका .२१.४५</div>"
 },
{
title:" <i class='fa fa-flag fa-2x' style='color:red'></i> <br>पुत्रदा एकादशी",
start:"2016-01-20",
description:"<center><h2> <i class='fa fa-flag fa-4x' style='color:red'></i> पुत्रदा एकादशी</h2></center><div class='allDetail'>पौष शु.११<br>रोहिणी.२०.५३</div>"
 },
{
title:"मृगशीर्ष .२०.१७<br>प्रदोष",
start:"2016-01-21",
description:"<center><h2>प्रदोष</h2></center><div class='allDetail'>मृगशीर्ष .२०.१७<br>प्रदोष</div>"
 },
{
title:"पौष शु.१३<br>आद्रा .१९.५९",
start:"2016-01-22",
description:"<center><h2></h2></center><div class='allDetail'>पौष शु.१३<br>आद्रा .१९.५९</div>"
 },
{
title:"<i class='fa fa-circle-o fa-2x' style='color:'></i><br>पौष पोर्णिमा ",
start:"2016-01-23",
description:"<center><h2>नेताजी सुभाषचंद्र बोस जयंती</h2></center><div class='allDetail'><br>शाकंभरी पोर्णिमा प्रारंभ - सकाळी ०७.३०<br>पौष शु.१४/ पौष पोर्णिमा<br>पुनर्वसु .२०.०६</div>"
 },
{
title:"पौष शु.१<br>पोर्णिमा समाप्ती सकाळी ०७.१५",
start:"2016-01-24",
description:"<center><h2></h2></center><div class='allDetail'>पोर्णिमा समाप्ती सकाळी ०७.१५<br>पौष शु.१<br>पुष्य .२०.४३</div>"
 },
{
title:"पौष शु.१<br>आश्लेषा .१९.५९",
start:"2016-01-25",
description:"<center><h2></h2></center><div class='allDetail'>पौष शु.१<br>आश्लेषा .१९.५९</div>"
 },
{
title:"<img src='img/eventIco/flag.jpg' height='25' width='25'><br>गणराज्य दिन ",
start:"2016-01-26",
description:"<center><h2><img src='img/eventIco/flag.jpg' height='25' width='25'><br>गणराज्य दिन </h2></center><div class='allDetail'>पौष शु.२<br>मघा .२३.३८<br></div>"
 },
{
title:"<img src='img/eventIco/ganesh.jpg' height='25' width='25'><br>संकष्ट चतुर्थी",
start:"2016-01-27",
description:"<center><h2><img src='ganesh.jpg' height='25' width='25'><br>संकष्ट चतुर्थी</h2></center><div class='allDetail'>चंद्रोदय ०९.२२<br>पूर्वा .२५.५७<br>पौष कृ.३</div>"
 },
{
title:"उत्तरा .२८.४२<br>पौष कृ.४",
start:"2016-01-28",
description:"<center><h2></h2></center><div class='allDetail'> पौष कृ.४<br>उत्तरा .२८.४२</div>"
 },
{
title:"हस्त .अहोरात्र<br> पौष कृ.५",
start:"2016-01-29",
description:"<center><h2></h2></center><div class='allDetail'>हस्त .अहोरात्र<br> पौष कृ.५</div>"
 },
{
title:"<img src='img/eventIco/gandhi.jpg' height='25' width='25'><br>महात्मा गांधी पुण्यतिथी",
start:"2016-01-30",
description:"<center><h2><img src='img/eventIco/gandhi.jpg' height='25' width='25'>महात्मा गांधी पुण्यतिथी</h2></center><div class='allDetail'>हुतात्मा दिन <br> पौष कृ.६<br>हस्त .०७.४४</div>"
 },
{
title:"भानुसप्तमी",
start:"2016-01-30",
description:"<center><h2></h2></center><div class='allDetail'>भानुसप्तमी<br>पौष कृ.७<br>चित्रा .१०.५०</div>"
 }

     ];