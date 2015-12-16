angular.module("ionicApp.controllers",[]);
//---2016-01-01T07:00:00 /yyyy-mm-dd ------
var events=[
  //---------------January 2016 ------ //
     {
     title:"मार्गशीर्ष कृ.७<br>उत्तरा २०.६६",
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
    description:'<center><h2></h2></center><div class="allDetail">मार्गशीर्ष अमावस्या-मूळ.१०.००<br>दर्शवेळा अमावस्या प्रारंभ-सकाळी ०७.५३<br>मार्गशीर्ष कृ.१४<br>पौष मासाआरंभ <br>ठाणे डवले नगर सप्ताह २</div>', 
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
description:"<center><h2><img src='img/eventIco/vivekanand.jpg' height='80' width='80'>स्वामी विवेकानंद जयंती</h2></center><div class='allDetail'>राष्ट्रीय युवा दिन <br>पौष शु.३<br>उत्तराषाढा.०७.५४<br>धनिष्ठा .३०.३९<br>ठाणे डवले नगर सप्ताह ४</div>"
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
description:"<center><h2><img src='img/eventIco/durga.jpg' height='80' width='80'>दुर्गाष्ठमी</h2></center><div class='allDetail'> पौष शु.८<br>अश्विनी .23.५७</div>"
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
description:"<center><h2><img src='img/eventIco/flag.jpg' height='80' width='80'><br>गणराज्य दिन </h2></center><div class='allDetail'>पौष शु.२<br>मघा .२३.३८<br></div>"
 },
{
title:"<img src='img/eventIco/ganesh.jpg' height='25' width='25'><br>संकष्ट चतुर्थी",
start:"2016-01-27",
description:"<center><h2><img src='ganesh.jpg' height='80' width='80'><br>संकष्ट चतुर्थी</h2></center><div class='allDetail'>चंद्रोदय ०९.२२<br>पूर्वा .२५.५७<br>पौष कृ.३</div>"
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
description:"<center><h2><img src='img/eventIco/gandhi.jpg' height='80' width='80'>महात्मा गांधी पुण्यतिथी</h2></center><div class='allDetail'>हुतात्मा दिन <br> पौष कृ.६<br>हस्त .०७.४४</div>"
 },
{
title:"भानुसप्तमी",
start:"2016-01-31",
description:"<center><h2></h2></center><div class='allDetail'>भानुसप्तमी<br>पौष कृ.७<br>चित्रा .१०.५०</div>"
 },


//--------------February 2016-------------------//


 {
title:"पौष कृ. ८<br>कालाष्टमी ",
start:"2016-02-01",
description:"<center><h2></h2></center><div class='allDetail'>पौष कृ. ८<br>स्वाती १३.४५<br>कालाष्टमी </div>"
 },
{
title:"पौष कृ. ९<br>विशाखा १६.१४",
start:"2016-02-02",
description:"<center><h2></h2></center><div class='allDetail'>पौष कृ. ९<br>विशाखा १६.१४</div>"
 },
{
title:"पौष कृ. १०<br>अनुराधा १८.०७",
start:"2016-02-03",
description:"<center><h2></h2></center><div class='allDetail'>पौष कृ. १०<br>अनुराधा १८.०७</div>"
 },
{
title:"<i class='fa fa-flag fa-2x' style='color:red'></i> <br>षतिला एकादशी ",
start:"2016-02-04",
description:"<center><h2><i class='fa fa-flag fa-2x' style='color:red'></i> षतिला एकादशी </h2></center><div class='allDetail'>संत निवृत्तीनाथ यात्रा -त्र्यंबेकेश्वर <br>ज्येष्ठा १९.१७<br>पौष कृ. ११</div>"
 },
{
title:"पौष कृ. १२<br>मूळ १९. ४२",
start:"2016-02-05",
description:"<center><h2></h2></center><div class='allDetail'>पौष कृ. १२<br>मूळ १९. ४२</div>"
 },
 {
title:"<img src='img/eventIco/shiv.jpg' height='25' width='25'><br>शनिप्रदोष शिवरात्री ",
start:"2016-02-06",
description:"<center><h2><img src='img/eventIco/vivekanand.jpg' height='80' width='80'><br>शनिप्रदोष शिवरात्री </h2></center><div class='allDetail'>मेरु त्रयोदशी <br>पौष कृ. १३<br>पूर्वाषाढा १९. २४</div>"
 },
{
title:"<i class='fa fa-flag fa-2x' style='color:red'></i> <br>अमावास्या",
start:"2016-02-07",
description:"<center><h2><i class='fa fa-flag fa-2x' style='color:red'></i>अमावास्या प्रारंभ रात्रै १०. २०</h2></center><div class='allDetail'>पौष कृ. १४ <br>उत्तराषाढा १८. २९</div>"
 },
{
title:"<i class='fa fa-circle fa-2x' style='color:black'></i><br>अमावस्या",
start:"2016-02-08",
description:"<center><h2></h2></center><div class='allDetail'><br><br></div>"
 },
{
title:"माघ शु. १<br>धनिष्ठा १५. १५",
start:"2016-02-09",
description:"<center><h2></h2></center><div class='allDetail'>माघ शु. १<br>धनिष्ठा १५. १५</div>"
 },
{
title:"माघ शु. २<br>शततारका १३. १५",
start:"2016-02-10",
description:"<center><h2></h2></center><div class='allDetail'>माघ शु. २<br>शततारका १३. १५</div>"
 },
{
title:"<img src='img/eventIco/ganesh1.jpg' height='25' width='25'><br>श्रीगणेश जयंती विनायक ",
start:"2016-02-11",
description:"<center><h2><img src='img/eventIco/ganesh1.jpg' height='80' width='80'>श्रीगणेश जयंती विनायक </h2></center><div class='allDetail'>चतुर्थी वरद चतुर्थी <br>श्री. स. स. भाऊसाहेब महाराज पुण्यतिथी <br>पू. भाद्रपदा ११. ०९<br>माघ शु. ३</div>"
 },
{
title:"श्रीपंचमी वसंत पंचमी <br>उ. भाद्रपदा ०९. ०६",
start:"2016-02-12",
description:"<center><h2></h2></center><div class='allDetail'>श्रीपंचमी वसंत पंचमी <br>उ. भाद्रपदा ०९. ०६<br>माघ शु. ४/५</div>"
 },
{
title:"<img src='img/eventIco/dada.jpg' height='25' width='25'><br>गुरुदेव दादांची शुद्ध शष्टी ",
start:"2016-02-13",
description:"<center><h2><img src='img/eventIco/dada.jpg' height='80' width='80'>गुरुदेव दादांची शुद्ध शष्टी</h2></center><div class='allDetail'>गुरुभक्त श्री अशोक पवार ठाणे (प्रसाद )<br>अश्विनी २९. ३२<br>रेवती ०७. १२<br>माघ शु. ६</div>"
 },
{
title:"रथसप्तमी <br>भरणी २८. १०",
start:"2016-02-14",
description:"<center><h2></h2></center><div class='allDetail'>रथसप्तमी <br>भरणी २८. १०<br>माघ शु. ७</div>"
 },
{
title:"<img src='img/eventIco/durga.jpg' height='25' width='25'><br>दुर्गाष्टमी ",
start:"2016-02-15",
description:"<center><h2><img src='img/eventIco/durga.jpg' height='80' width='80'>दुर्गाष्टमी</h2></center><div class='allDetail'>भिमाष्ठमी <br>कृतिका २७. ०८<br>माघ शु. ८</div>"
 },
{
title:"माघ शु. ९<br>रोहिणी २६. २९",
start:"2016-02-16",
description:"<center><h2></h2></center><div class='allDetail'>माघ शु. ९<br>रोहिणी २६. २९</div>"
 },
{
title:"माघवारी आरंभ <br>मृगशीर्ष २६. १३",
start:"2016-02-17",
description:"<center><h2></h2></center><div class='allDetail'>माघवारी आरंभ <br>मृगशीर्ष २६. १३<br>माघ शु. १०</div>"
 },
{
title:"<i class='fa fa-flag fa-2x' style='color:red'></i> <br>जया एकादशी ",
start:"2016-02-18",
description:"<center><h2><i class='fa fa-flag fa-2x' style='color:red'></i> जया एकादशी</h2></center><div class='allDetail'>माघवारी <br>आर्दा २६. २३<br>माघ शु. ११</div>"
 },
{
title:"<img src='img/eventIco/shivaji.jpg' height='25' width='25'><br>छत्रपती शिवाजी महाराज जयंती ",
start:"2016-02-19",
description:"<center><h2><img src='img/eventIco/shivaji.jpg' height='80' width='80'>भिष्म्द्वाद्शी छत्रपती शिवाजी महाराज जयंती<br>(तारखे प्रमाणे)</h2></center><div class='allDetail'>माघवारी  समाप्त<br>पुनर्वसु २६. ५८<br>माघ शु. १२</div>"
 },
{
title:"शनिप्रदोष <br>पुष्य २७. ५९",
start:"2016-02-20",
description:"<center><h2></h2></center><div class='allDetail'>शनिप्रदोष <br>पुष्य २७. ५९<br>माघ शु. १३</div>"
 },
 {
title:"<i class='fa fa-circle-o fa-2x' style='color:'></i><br>पौर्णिमा प्रारंभ रात्रो १०. ३००",
start:"2016-02-21",
description:"<center><h2><i class='fa fa-circle-o fa-2x' style='color:'></i>पौर्णिमा<br>(प्रारंभ रात्रो १०. ३० - रात्री ११. ४९) </h2></center><div class='allDetail'>आश्लेषा २९. २७<br>माघ शु. १४</div>"
 },
{
title:"माघ पौर्णिमा<br>मघा अहोरात्र",
start:"2016-02-22",
description:"<center><h2></h2></center><div class='allDetail'>माघ पौर्णिमा<br>मघा अहोरात्र</div>"
 },
{
title:"गुरुप्रतीपदा गाणगापूर यात्रा<br>माघ कृ. १",
start:"2016-02-23",
description:"<center><h2></h2></center><div class='allDetail'>गुरुप्रतीपदा गाणगापूर यात्रा<br>माघ कृ. १<br>मघा ०७. २१<br>परकंदी सप्ताह आरंभ </div>"
 },
{
title:"जागतिक मुद्रण दिन<br>पूर्वा ०९. ४१",
start:"2016-02-24",
description:"<center><h2></h2></center><div class='allDetail'>जागतिक मुद्रण दिन<br>पूर्वा ०९. ४१<br>परकंदी सप्ताह २<br>माघ कृ. २</div>"
 },
{
title:"संत नरहरी सोनार पुण्यतिथी<br>उत्तरा १२. २३",
start:"2016-02-25",
description:"<center><h2></h2></center><div class='allDetail'>संत नरहरी सोनार पुण्यतिथी<br>उत्तरा १२. २३<br>माघ कृ. ३<br>परकंदी सप्ताह ३</div>"
 },
{
title:"<img src='img/eventIco/genesh.jpg' height='25' width='25'><br>संकष्ठ चतुर्थी चंद्रोदय ०९. ३९",
start:"2016-02-26",
description:"<center><h2><img src='img/eventIco/genesh.jpg' height='80' width='80'>संकष्ठ चतुर्थी चंद्रोदय ०९. ३९</h2></center><div class='allDetail'>माघ कृ. ४<br>हस्त १५. २१<br>परकंदी सप्ताह ४ गुरुपूजा </div>"
 },
{
title:"मराठी राजभाषा दिन <br>चित्रा १८. २६",
start:"2016-02-27",
description:"<center><h2>मराठी राजभाषा दिन</h2></center><div class='allDetail'>चित्रा १८. २६<br>माघ कृ. ४<br>परकंदी सप्ताह काला </div>"
 },
{
title:"राष्ट्रीय विज्ञान दिन <br>स्वाती २१. २९",
start:"2016-02-28",
description:"<center><h2>राष्ट्रीय विज्ञान दिन </h2></center><div class='allDetail'>स्वाती २१. २९<br>माघ कृ. ५</div>"
 },
{
title:"माघ कृ. ६<br>विशाखा २४. १६",
start:"2016-02-29",
description:"<center><h2></h2></center><div class='allDetail'>माघ कृ. ६<br>विशाखा २४. १६</div>"
 },

 //---------------March 2016 ---------------//

{
title:"कालाष्ठमी<br> माघ कृ. ",
start:"2016-03-01",
description:"<center><h2></h2></center><div class='allDetail'>कालाष्ठमी<br>अनुराधा २६.३६<br>माघ कृ. </div>"
 },
{
title:"माघ कृ. ८<br>ज्येष्ठा २८.१९",
start:"2016-03-02",
description:"<center><h2></h2></center><div class='allDetail'>माघ कृ. ८<br>ज्येष्ठा २८.१९</div>"
 },
{
title:"img<br>श्री रामदास नवमी ",
start:"2016-03-03",
description:"<center><h2>img श्री रामदास नवमी </h2></center><div class='allDetail'>सांगोला दौरा आरंभ <br>मूळ २९.१९<br>माघ कृ. ९</div>"
 },
{
title:"पूर्वाषाढा २९.३१<br>सांगोला दौरा ",
start:"2016-03-04",
description:"<center><h2></h2></center><div class='allDetail'>सांगोला दौरा <br>पूर्वाषाढा २९.३१<br>माघ कृ. १०</div>"
 },
{
title:"उत्तराषाढा २८.५७<br>सांगोला दौरा ",
start:"2016-03-05",
description:"<center><h2></h2></center><div class='allDetail'>सांगोला दौरा <br>उत्तराषाढा २८.५७<br>माघ कृ. ११</div>"
 },
{
title:"प्रदोष<br>सांगोला दौरा ",
start:"2016-03-06",
description:"<center><h2></h2></center><div class='allDetail'>प्रदोष<br>सांगोला दौरा <br>श्रवण २७.४२<br>माघ कृ. १२</div>"
 },
{
title:"img<br>महाशिवरात्री ",
start:"2016-03-07",
description:"<center><h2>img महाशिवरात्री </h2></center><div class='allDetail'>सांगोला दौरा <br>धनिष्ठा २५.५२<br>माघ कृ. १३</div>"
 },
{
title:"img<br>अमावस्या ",
start:"2016-03-08",
description:"<center><h2>img अमावस्या<br>(प्रारंभ सकाळी १०.३४ - समाप्ती सकाळी ७.२४) </h2></center><div class='allDetail'>जागतिक महिला दिन <br>दर्श अमावस्या <br>सांगोला दौरा <br>शावतारका २३.३५<br>माघ कृ. १४</div>"
 },
{
title:"खग्रास सूर्यग्रहण ग्र. वे. <br>प्र. भाद्रपदा २१.०२",
start:"2016-03-09",
description:"<center><h2>खग्रास सूर्यग्रहण ग्र. वे.</h2></center><div class='allDetail'>मंगळवार दि. ७ रात्री ९ पासून ग्रहण सुटेपर्यंत पाळावेत <br>सांगोला दौरा सांगता <br>प्र. भाद्रपदा २१.०२<br>माघ अमावस्या / फाल्गुन शु. १</div>"
 },
{
title:"फाल्गुन शु. २ उ. <br>भाद्रपदा १८.२१",
start:"2016-03-10",
description:"<center><h2></h2></center><div class='allDetail'>फाल्गुन शु. २ उ. <br>भाद्रपदा १८.२१</div>"
 },
{
title:"फाल्गुन शु. ३<br>रेवती १५.४२ ",
start:"2016-03-11",
description:"<center><h2></h2></center><div class='allDetail'>फाल्गुन शु. ३<br>रेवती १५.४२</div>"
 },
{
title:"img<br>विनायक चतुर्थी",
start:"2016-03-12",
description:"<center><h2>img विनायक चतुर्थी </h2></center><div class='allDetail'>फाल्गुन शु. ४<br>अश्विनी १३.१४</div>"
 },
{
title:"फाल्गुन शु. ५<br>भरणी ११.०७",
start:"2016-03-13",
description:"<center><h2></h2></center><div class='allDetail'>फाल्गुन शु. ५<br>भरणी ११.०७</div>"
 },
{
title:"img<br>गुरुदेव दादांची शुद्ध षष्ठी ",
start:"2016-03-14",
description:"<center><h2>img गुरुदेव दादांची शुद्ध षष्ठी </h2></center><div class='allDetail'>गुरुभक्त श्री जितेंद्र महादेव रांजणे रामचंद्र बळीप प्रसाद <br>कृत्तिका ०९.२६<br>फाल्गुन शु. ६</div>"
 },
{
title:"जागतिक ग्राहक दिन<br>",
start:"2016-03-15",
description:"<center><h2>जागतिक ग्राहक दिन</h2></center><div class='allDetail'>रोहिणी ०८.१८<br>फाल्गुन शु. ७</div>"
 },
{
title:"img<br>दुर्गाष्ठमी ",
start:"2016-03-16",
description:"<center><h2>img दुर्गाष्ठमी </h2></center><div class='allDetail'>मृगशीर्ष ०७.४६<br>फाल्गुन शु. ८</div>"
 },
{
title:"फाल्गुन शु. ९<br>आर्दा ०७.५१",
start:"2016-03-17",
description:"<center><h2></h2></center><div class='allDetail'>फाल्गुन शु. ९<br>आर्दा ०७.५१</div>"
 },
{
title:"फाल्गुन शु. १०<br>पुनर्वसु ०८. ३२",
start:"2016-03-18",
description:"<center><h2></h2></center><div class='allDetail'>फाल्गुन शु. १०<br>पुनर्वसु ०८. ३२</div>"
 },
{
title:"img<br>आमलकी एकादशी",
start:"2016-03-19",
description:"<center><h2>img आमलकी एकादशी</h2></center><div class='allDetail'>वढाव सप्ताह आरंभ <br>पुष्य ०९. ४८<br>फाल्गुन शु. ११</div>"
 },
{
title:"फाल्गुन शु. १२<br>आश्लेषा ११. ३४",
start:"2016-03-20",
description:"<center><h2></h2></center><div class='allDetail'>वढाव सप्ताह २<br>प्रदोष<br>फाल्गुन शु. १२<br>आश्लेषा ११. ३४</div>"
 },
{
title:"फाल्गुन शु. १३<br>मघा १३. ४५",
start:"2016-03-21",
description:"<center><h2></h2></center><div class='allDetail'>वढाव सप्ताह ३<br>फाल्गुन शु. १३<br>मघा १३. ४५</div>"
 },
{
title:"img<br>पौर्णिमा प्रारंभ दुपारी ३. १२",
start:"2016-03-22",
description:"<center><h2>img पौर्णिमा<br>( प्रारंभ दुपारी ३. १२ -  समाप्ती सायं. ५.३०)</h2></center><div class='allDetail'>वढाव सप्ताह ४<br>फाल्गुन शु. १४<br>पूर्वा १६. १८<br></div>"
 },
{
title:"img<br>होळी हुताशनी पौर्णिमा",
start:"2016-03-23",
description:"<center><h2>img होळी हुताशनी पौर्णिमा<br>फाल्गुन पौर्णिमा </h2></center><div class='allDetail'>वढाव सप्ताह ५<br>जागतिक हवामान दिन<br>उत्तरा १९.०६</div>"
 },
{
title:"img<br>धुलीवंदन ",
start:"2016-03-24",
description:"<center><h2>img धुलीवंदन</h2></center><div class='allDetail'>वढाव सप्ताह ६<br>फाल्गुन १ <br>हस्त २२. ०५</div>"
 },
{
title:"तुकाराम बीज <br>वढाव सप्ताह काला",
start:"2016-03-25",
description:"<center><h2>तुकाराम बीज</h2></center><div class='allDetail'>वढाव सप्ताह काला<br>गुड फ्रायडे <br>फाल्गुन कृ. २<br>चित्रा २५.०९</div>"
 },
{
title:"img<br>छत्रपती शिवाजी महाराज जयंती ",
start:"2016-03-26",
description:"<center><h2>img छत्रपती शिवाजी महाराज जयंती</h2></center><div class='allDetail'>फाल्गुन कृ.३<br>स्वाती २८.११</div>"
 },
{
title:"img<br>संकष्ट चतुर्थी ",
start:"2016-03-27",
description:"<center><h2>img संकष्ट चतुर्थी<br>(चंद्रोदय १०.००) </h2></center><div class='allDetail'>विशाखा अहोरात्र <br>फाल्गुन कृ.  ४</div>"
 },
{
title:"img<br>रंगपंचमी ",
start:"2016-03-28",
description:"<center><h2>img रंगपंचमी</h2></center><div class='allDetail'>फाल्गुन कृ. ५<br>विशाखा ०७.०४</div>"
 },
{
title:"img<br>श्री एकनाथ षष्ठी ",
start:"2016-03-29",
description:"<center><h2>img श्री एकनाथ षष्ठी </h2></center><div class='allDetail'>अनुराधा ०९. ४०<br>फाल्गुन कृ. ६</div>"
 },
{
title:"ज्येष्ठा ११. ४८<br>फाल्गुन कृ. ६",
start:"2016-03-30",
description:"<center><h2></h2></center><div class='allDetail'>ज्येष्ठा ११. ४८<br>फाल्गुन कृ. ६</div>"
 },
{
title:"कालाष्टमी <br>फाल्गुन कृ. ७",
start:"2016-03-31",
description:"<center><h2></h2></center><div class='allDetail'>कालाष्टमी <br>फाल्गुन कृ. ७<br>मूळ १३. २२</div>"
 },

     ];