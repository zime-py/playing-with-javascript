// function one(){
// return 'hello worlds';
// }
// document.getElementById('test').innerHTML=one();
// console.log(one())

//how define varible

// var name='mahmud'  
// var f_name=name;
// var _name=name;
// var l$name=name;
// console.log(name)
// console.log(f_name)
// console.log(_name)
// console.log(l$name)


// var f_name_l='mahmud'
// console.log(f_name_l)

// var Name='mahmud'
// var name='hossain'

// console.log(name)
// console.log(Name)

// var My_first_name='mahmud'
// console.log(My_first_name)

// // ****রিমিটিভ ডাটা টাইপঃ

// // প্রিমিটিভ টাইপের ডাটাগুলো তে ভ্যালু সরাসরি স্টোর করা থাকে। আমরা জানি জাভাস্ক্রিপ্ট এ সবই অবজেক্ট। কিন্তু এই প্রিমিটিভ ডাটা টাইপগুলো ছাড়া। এগুলা অবজেক্ট না। যেমনঃ

// // (i) নাম্বারঃ নরমাল নাম্বার থেকে শুরু করে যেকোনো ধরনের নাম্বার। দশমিক ও হতে পারে
//  var Int_number=10;
//  var Flot_number=10.5;
//  console.log(Int_number)
//  console.log(Flot_number)


// (ii) স্ট্রিংঃ টেক্সট নাম্বার সহ। মানে ক্যারেক্টার এর সিকুয়েন্স।
//  স্ট্রিং অবশ্যই ‘ ’ অথবা “ ” এর ভিতরে থাকবে। ডাবল (“”) নাকি সিঙ্গেল (‘ ’) ইউজ করবেন সেটা একদমি আপনার ইচ্ছা। 
//  তবে একবার ডাবল একবার সিঙ্গেল ইউজ করলে খারাপ দেখা যায়(যদিও এটাও লিগ্যাল, 
//  কিন্তু ভালো প্র্যাক্টিস না) তাই যেখানে যেভাবে লিখা শুরু করবেন সেভাবেই লিখবেন।
//  নাম্বারও যদি এভাবে ডাবল বা সিঙ্গেল এর ভিতরে লিখেন তাহলে সেটাও স্ট্রিং হিসেবে গণ্য হবে।
// var Myself="i am mahmud , i live in ....."
// console.log(Myself)


// // (iii) বুলিয়ানঃ সত্য নাইলে মিথ্যা true, false। সব ছোটো হাতের। বড় হাতের বা ক্যাপিটেলাইজড ভ্যালু ভুল দেখাবে। 

// var x=10;
// var y=20;
// var result=x>y;
// console.log(result)

// var x=100;
// var y=20;
// var result=x>y;
// console.log(result)


// (iv) আন্ডিফাইন্ডঃ যখন আপনি ভ্যারিয়েবল ডিক্লেয়ার করেন, কিন্তু কোনো ডাটা ঐটাতে রাখা হয় না, তখন বাই ডিফল্ট undefined হয়ে থাকে সেটা(iv) আন্ডিফাইন্ডঃ যখন আপনি ভ্যারিয়েবল ডিক্লেয়ার করেন, কিন্তু কোনো ডাটা ঐটাতে রাখা হয় না, তখন বাই ডিফল্ট undefined হয়ে থাকে 
// var name;
// console.log(name)


// // নালঃ এটার কোনো অস্তিত্ব নাই। কিন্তু আন্ডিফাইন্ড না। মানে আপনি আপনার ভ্যারিয়েবলে কিছু রাখতে চাচ্ছেন না, কিন্তু আবার এটা আন্ডিফাইন্ড ও রাখতে চাচ্ছেন না। null ই হবে, Null বার NULL ভুল!
// var name=null;
// console.log(name)


// // কনকাটিনেশনঃ
// // এবার আসি আরো কিছু ব্যাসিক টপিক নিয়ে। কনকাটিনেশন বা কয়েকটা ডাটা একসাথে অ্যাড করতে চাইলে জাভাস্ক্রিপ্ট এ ‘+’ ইউজ করা হয়
// var Firtname='Mahmud';
// var Lastname='Hossain';
// var FullName='my full name is'+Firtname+' '+Lastname
// console.log(FullName)

 
 // // সেজন্যই জাভাস্ক্রিপ্ট এ কোনো ডাটা টাইপ দেখার জন্যে typeof
 // var name='mahmud'
 // console.log(typeof(name))


// // এখন যদি কয়েকটা টাইপ একসাথে অ্যাড করে একটা ভ্যারিয়েবলের সেইভ করি তাহলে সেটা কোন টাইপের হবে সেটা ডিপেন্ট করে আপনার ডাটার উপর। আপনি যদি নাম্বার নাম্বার অ্যাড করেন তাহলে সেটা কনকাটিনেশন না হয়ে অ্যাডিশন হবে। 
// // আর যদি আপনি স্ট্রিং এর সাথে নাম্বার যোগ করেন বা নাম্বারের সাথে স্ট্রিং যোগ করেন তাহলে পুরোটাই স্ট্রিং টাইপের হয়ে যাবে। কারণ নাম্বার নাম্বার ছাড়া ক্যারেক্টার সেইভ করতে পারে না। কিন্তু স্ট্রিং ক্যারেক্টারসহ নাম্বারও সেইভ করতে পারেঃ
// var name='mahmud'+10;
// console.log(name)
// console.log(typeof(name))


// // ভ্যারিবল এর ডাটা পরিবর্তনঃ
// // আপনি চাইলে আপনার একবার ডিক্লেয়ার করা ভ্যারিয়েবলের ডাটা পরিবর্তন করতে পারবেন। 
// // তবে একবার ডিক্লেয়ার করে পরে আবার ডিক্লেয়ার করার দরকার নেই। 
// // জাস্ট ভ্যারিয়েবল এর নাম লিখে ইকুয়্যাল টু আপনার ডাটা।
// var name='mahmud';
// name='hossain';
// name='mahmud hossain';
// console.log(name)


// // আবার প্রথমে নাম্বার নিয়ে পরে স্ট্রিং এও পরিবর্তন করতে পারবেন
// // যেটা জাভাস্ক্রিপ্ট এ একদম লিগ্যালঃ
// var name='mahmud';
// name=12345;
// console.log(name)


// যেকোনো ডাটা টাইপ থেকে যেকোনো ডাটা টাইপেই পরিবর্তন করতে পারবেন। 
// এখানে আপনার স্বাধীনতা আছে পুরোপুরি।
// কমেন্টঃ
// কোডে কমেন্ট করা ভালো প্র্যাক্টিসের মধ্যে পড়ে। 
// কারণ অনেকসময় কোডের কন অংশ কি করছে সেটা বুঝতে ঝামেলা হয়ে যায়। 
// সেক্ষেত্রে কিছু বর্ননা লিখে রাখলে যে এই অংশ এই কাজ করে ঐ অংশ ঐ কাজ করে তাহলে পরে যেকেউ বা আপনি নিজেও কয়েক বছর পরেও আপনার কোড দেখে বুঝতে পারবেন যে আসলে এই অংশের কাজ হচ্ছে এটা।
// তাই কোডে প্রোপার কমেন্ট রাখা ভালো। আর কমেন্ট গুলো জাভাস্ক্রিপ্ট এর ইঞ্জিন একদম কমপ্লিটলি এড়িয়ে চলবে। মানে এগুলা আইটপুটে আসবে না কখনো
// কমেন্ট দুইভাবে করা যায়ঃ
// ১। সিঙ্গেল লাইন কমেন্টঃ
// একই লাইনের কমেন্ট হলে ভা আপনার কোডের শেষে কিছু লিখতে চাইলেঃ
// var name='mahmud';  //this is firsr name


// // ২। মাল্টি-লাইন কমেন্টঃ
// // কয়েকটা লাইনে কমেন্ট লিখতে চাইলেঃ
// var fname='mahmud';
// var lname='hossain';
 /*
 on the above is 
 my first and 
last name */



// জাভাস্ক্রিপ্টঃ অপারেটর নিয়ে সবকিছু
// জাভাস্ক্রিপ্ট এ কয়েকরকম এর অপারেটর আছেঃ
// ১। অ্যারিথমেটিক অপারেটর
// ২। কম্পারিজম অপারেটর
// ৩। লজিক্যাল/রিলেশনাল অপারেটর
// ৪। অ্যাসাইনমেন্ট অপারেটর
// ৫। কন্ডিশনাল/টার্নারি অপারেটর

// // ++(ইনক্রিমেন্ট) — এটা আপনার অপারেন্ড এর সাথে ১ যোগ করবে। ধরুন আপনার একটা ভ্যারিয়েবল আছে aযেটার ভ্যালু 10, 
// // এখন a++লিখলে এটার ভ্যালুর সাথে এক যোগ হবে। এটা a = a + 1এটার শর্টকাট বলা চলে
// var number =10;
// console.log(number++)  //10
// console.log(++number)  //11 right way
// console.log(number)


// // --(ডিক্রিমেন্ট) — অনেকটা ইনক্রিমেন্ট অপারেটরের মতোই কিন্তু ভ্যালু ১ কমাবে।
// //  সেইমভাবে এটাও a = a - 1এটার শর্টকাট।
// var number=10;
// console.log(number--) //10
// console.log(--number) //9 and rigt way
// console.log(number)


// // ২। কম্পারিজম অপারেটরঃ একটা ভ্যালুর সাথে আরেকটা কম্পেয়ার করার জন্য। দুইটা ভ্যালু সমান কি সমান না, নাকি বড় না ছোটো। এরা রেজাল্ট হিসাবে হয় সত্য trueঅথবা মিথ্যা falseরিটার্ন করে।
// // ==(ইকুয়্যাল) — দুইটার ভ্যালু সমান সমান কিনা দেখার জন্যে। সমান হলে সত্য trueনাইলে মিথ্যা falseরিটার্ণ করবে।
// var a=10;
// var b=5;
// var z=a==b;
// console.log(z)


// // !=(ইকুয়্যাল না) — দুইটার ভ্যালু সমান না হলে সত্য trueদেখাবে
// var a=10;
// var b=10;
// var z=a!=b;
// console.log(z);


// // >=(বড় অথবা ইকুয়্যাল) — একটা আরেকটা থেকে বড় বা সমান সমান কিনা সেটা দেখার জন্যে।
// // বড় বা সমান হলে সত্য trueনাইলে মিথ্যা false
// var a=10;
// var b=10;
// var z=a>=b;
// console.log(z);


// // <=(ছোটো অথবা ইকুয়্যাল) — একটা আরেকটা থেকে ছোটো বা সমান সমান কিনা সেটা দেখার জন্যে। 
// // ছোটো বা সমান হলে সত্য trueনাইলে মিথ্যা false
// var a=10;
// var b=10;
// var z=a<=b;
// console.log(z);


// // এগুলার বাইরেও আরো মোস্ট ইউস কিছু অপারেটর রয়েছে। যেমন ===এবং !==এগুলা ব্যাসিকেলি ইকুয়্যাল ==বা ইকুয়্যাল না !=অপারেটরের মতোই কিন্তু মেইন পার্থক্য হলো ট্রিপল ইকুয়্যাল অপারেটর ভ্যালু দুইটা সমান কিনা সেটা চ্যাক করে এবং সাথে দুইটা একই টাইপের কিনা সেটাও চ্যাক করে।
// // যেখানে ডাবল অপারেটরগুলো শুধুমাত্র ভ্যালু দুইটা সমান কিনা চ্যাক করে, টাইপ চ্যাক করে না।
// var a=10;
// var b='mahmud';
// var z=a===b;
// console.log(z)
// //and
// var s=a!==b;
// console.log(s)


// // লজিক্যাল অপারেটরঃ তিনরকমের হতে পারেঃ
// // &&(এন্ড) — সাধারণত দুইটা অপারেন্ড এর মাঝখানে বসে। এবং যদি দুইটা স্টেটমেন্ট সত্য trueহয় তাহলে পুরোটা সত্ য নাইলে যেকোনো একটাও যদি মিথ্যা falseহয় তাহলে পুরোটাই মিথ্যা false।
// // আর যদি দুইটাই মিথ্যা falseহয়, তাহলেও পুরোটা মিথ্যা false
// var a=10;
// var b=5;
// var c=2;
// var d=1;
// var result=(a>b)&&(c>d)
// console.log(result)
// var result=(a>b)&&(c<d)
// console.log(result)


// // ।।(অর) — সাধারণত দুইটা অপারেন্ড এর মাঝখানে বসে। এবং যদি যেকোনো একটা সত্য trueহয় তাহলে সত্য true, দুইটাই যদি সত্য trueহয় তাহলেও পুরোটা সত্য true। 
// // আর যদি একমাত্র দুইটা স্টেট্মেন্টই মিথ্যা falseহয় তাহলেই পুরোটা মিথ্যা falseহবে
// var a=10;
// var b=5;
// var c=2;
// var d=1;
// var result=(a>b)||(c>d)
// console.log(result)
// var result=(a>b)||(c<d)
// console.log(result)


// // !(নট) — সাধারণত একটা স্টেটমেন্ট এর পূর্বে বসে।
// // এবং সেটা যদি সত্য trueহয় তাহলে এটা রিটার্ন করবে মিথ্যা false, আর মিথ্যা falseহলে রিটার্ন করবে সত্য true।
// // মানে উল্টো
// var result=(2>10)
// console.log(!result)


// // +=যোগ এবং অ্যাসাইনমেন্ট অপারেটরঃ নিজের সাথে নিজের ভ্যালু যোগ করে সেটাকে 
// // আবার নিজের সাথেই অ্যাসাইন করা একই সাথে। a += 10এটার ফুল ফর্ম হচ্ছেঃ
// var a=10;
// a +=10;
// console.log(a)


// // -=বিয়োগ এবংঅ্যাসাইনমেন্ট অপারেটরঃ এটাও শর্টকাট আগেরটার মতোই। নিজের সাথে নিজের ভ্যালু বিয়োগ করে সেটাকে আবার 
// // নিজের সাথেই অ্যাসাইন করা একই সাথে। a -= 10এটার ফুল ফর্ম হচ্ছেঃ
// var a=10;
// a -=10;
// console.log(a)


// // *=গুণ এবংঅ্যাসাইনমেন্ট অপারেটরঃ এটাও শর্টকাট।নিজের সাথে নিজের ভ্যালু গুণ করে সেটাকে আবার
// //  নিজের সাথেই অ্যাসাইন করা একই সাথে। a *= 5এটার ফুল ফর্ম হচ্ছেঃ
// var a=10;
// a *=10;
// console.log(a)


// // /=ভাগ এবংঅ্যাসাইনমেন্ট অপারেটরঃ এটাও শর্টকাট। নিজের সাথে নিজের ভ্যালু ভাগ করে সেটাকে আবার
// //  নিজের সাথেই অ্যাসাইন করা একই সাথে। a /= 2এটার ফুল ফর্ম হচ্ছেঃ
// var a=100;
// a /=10;
// console.log(a)


// // %=ভাগশেষ এবংঅ্যাসাইনমেন্ট অপারেটরঃ এটাও আরেকটা শর্টকাট।নিজের সাথে নিজের ভ্যালু মড করে সেটাকে আবার
// //  নিজের সাথেই অ্যাসাইন করা একই সাথে। a %= 5এটার ফুল ফর্ম হচ্ছেঃ
// var a=100;
// a %=10;
// console.log(a)


// // কন্ডিশনাল/টার্নারি অপারেটরঃ ? :এটাও আরেকটা শর্টকাট। উদাহরন দেখলে বুঝতে পারবেনঃ
// // যদি কন্ডিশন সত্য হয় ? তাইলে ভ্যালু এটা : নাইলে ভ্যালু এইটা
// var a=10;
// var b=5;
// var result=a>b? 'yes':'no'
// console.log(result)


// জাভাস্ক্রিপ্টঃ কন্ডিশনাল স্টেটমেন্ট নিয়ে সবকিছু
// ফেসবুককেই উদাহরণ হিসাবে নিলে, আপনি রেজিস্ট্রেশন/লগিন না করলে একটা লগিন/সাইন-আপ পেজ দেখতে পাবেন।
//  আর রেজিস্ট্রেশন করে লগিন করলে আবার অন্যরকম জিনিস দেখতে পারতেছেন। তো এগুলাই আসলে প্রোগ্রামিং এ ডিসিশন।
// আর এগুলাকেই কন্ট্রোল করা হয় কন্ডিশনাল স্টেটমেন্ট দিয়ে।
// জাভাস্ক্রিপ্ট এ কন্ডিশনাল স্টেটমেন্ট ৩ রকমের আছেঃ
// ১। ifstatement
// ২। if...elsestatement
// ৩। if...else ifstatement
// আরো একটা আছে switchস্টেটমেন্ট নামে,


// ifstatement
// if(সত্য কিছু হয়) {
//    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// }
// এটা হচ্ছে শুধু একটা কন্ডিশন চ্যাক করবে। যদি অমুক সত্য হয় তাইলেই আমার ভিতরে যা আছে তা দেখাবা নাইলে কিছু দেখানোর দরকার নাই
// var name='mahmud';
// if (name=='mahmud'){
// 	console.log('true')
// }
//or
// var name='mahmud';
// var email='mahmud@gmail.com';
// var password='12345';
// if(name=='mahmud'||email=='mah@gmail.com'||password=='12345'){
// 	console.log('login')
// }


// // if...elsestatement
// // if(সত্য কিছু হয়) {
// //    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // } else {
// //    নাইলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // }
// // এটা হচ্ছে যদি ifঅমুক সত্য হয় তাইলে আমার ভিতরে যা আছে দেখাবা নাইলে elseএগুলা দেখাবা। 
// // এটা আপনাকে আরো কন্ট্রোল এনে দিবে কন্ডিশনাল স্টেটমেন্ট এর উপরে। 
// // এখানে যদি সত্য হয় তাহলে ifএর ভিতরের জিনিস এক্সিকিউট হবে।
// // আর যদি মিথ্যা হয় তাহলে elseএর ভিতরের জিনিস এক্সিকিউট হবে।
// var name='mahmud';
// var password='12345';
// if(name=='mahmud' && password=='123456789'){
// 	console.log('login')
// }
// else{
// 	console.log('registry pleae')
// }



// // ৩। if...else ifstatement
// // if(সত্য কিছু হয়) {
// //    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // } else if(নইলে যদি আমি সত্য হই){
// //    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // } else if(নইলে যদি আমি সত্য হই){
// //    তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // } 
// // ...
// // else {
// //    নাইলে আমার ভিতরের জিনিস এক্সিকিউট হবে
// // }
// // …মানে যতবার ইচ্ছা else ifইউজ করা যাবে
// // এটা হচ্ছে যদি অমুক সত্য হয় তাহলে আমার ভিতরে যা আছে দেখাবা নাইলে যদি অন্যকিছু সত্য হয়
// // তাইলে এগুলা দেখাবা বা যদি কিছুই সত্য trueনা হয় তাহলে elseআমার ভিতরের গুলা দেখাবা
// var name='mahmud';
// var password='12345';

// if(name=='mahmud' && password=='12345'){
// 	console.log('login')
// }
// else if(name=='mahmud' && password=='123456'){
// 	console.log('try again by good password')
// }
// else if(name=='mahmuds' && password=='12345'){
// 	console.log('try again by good name')
// }
// else{
// 	console.log('please registry')
// }



// // নেস্টিং কন্ডিশনাল স্টেট্মেন্টঃ
// // নেস্টিং মানে হচ্ছে একটা কন্ডিশনাল স্টেটমেন্ট এর ভিতরে আরেকটা কন্ডিশনাল স্টেটমেন্ট।
// //  এবং এটা সম্পূর্নরূপে বৈধ। আপনি যেভাবে ইচ্ছা শুধু ifএর ভিতরেও else if…elseবা else ifইউজ করতে পারবেন বা অন্যগুলার ভিতরেও শুধু ifইউজ করতে পারবেন
// //  এখানে ধরা বাধার কোনো নিয়ম নাই।
// var number=10;
// if(number>2){
// 	if(number>18){
// 		console.log('inside me yes')
// 	}
// 	else{
// 		console.log('inside me not')
// 	}
// }
// else{
// 	console.log('i am not')
// }
// একটার ভিতরে আরেকটা, আরেকটার ভিতরে আরেকটা, এভাবে যতোবার ইচ্ছা করতে পারবেন



// // সুইচ স্টেটমেন্টঃ
// // এবার আসি switchস্টেটমেন্ট এ। আমরা শেষের যেটা ইউজ করলাম, if…else ifঐটা ইউজ করে সবসময় ফ্লেক্সিবল নাও হতে পারে। ধরুন আপনি একটা ভ্যালুর উপরেই ডিসিশন নিতে চাচ্ছেন। কেস যদি অমুক হয় তাইলে এটা প্রিন্ট করা হবে, আর কেস যদি তমুক হয় তাইলে ঐটা প্রিন্ট করা হবে।

// // সুইচ (এক্সপ্রেশন) {
// //    কেস যদি এটা(১) হয়ঃ 
// //       এখানের কোড এক্সিকিউট হবে;
// //       ব্যাস তারপর শেষ;

// // কেস যদি এটা(২) হয়ঃ 
// //       এখানের কোড এক্সিকিউট হবে;
// //       ব্যাস তারপর শেষ;
// //    ...

// //    কেস যদি এটা(.) হয়ঃ 
// //       এখানের কোড এক্সিকিউট হবে;
// //       ব্যাস তারপর শেষ;

// //    কেস যদি এটা হয়ঃ 
// //       এখানের কোড এক্সিকিউট হবে;
// //       ব্যাস তারপর শেষ;

// //    কেস যদি কোনোটাই না হয় তাইলে বাই ডিফল্টঃ
// //       এখানের কোড এক্সিকিউট হবে;
// // }
// var weekday='sunday';
// switch(weekday){
// 	case 'suterday' :
// 	console.log('first day in week');
// 	break;

// 	case 'mionday' :
// 	console.log('third the in week');
// 	break;

// 	case 'sunday':
// 	console.log('great day');
// 	break;


// 	default:
// 	console.log('select a day');
// }


// জাভাস্ক্রিপ্টঃ লুপ নিয়ে সবকিছু
// প্রোগ্রামিং এ লুপ অনেক রকমের হয়। তবে জাভাস্ক্রিপ্ট এ বেশ কয়েকরকমের লুপ আছে।
//  নিচের এই স্টেটমেন্টগুলো লুপের জন্যে ইউজ করা হয়ঃ
// ১। forস্টেটমেন্ট
// ২। do…whileস্টেটমেন্ট
// ৩। whileস্টেটমেন্ট
// ৪। breakস্টেটমেন্ট
// ৫। continueস্টেটমেন্ট

// // ১। forস্টেটমেন্টঃ
// // জাভাস্ক্রিপ্ট এ ফর লুপ অন্যান্য কমন প্রোগ্রামিং ল্যাংগুয়েজের মতোই। ফর লুপ সাধারণত ইউজ করা হয় আপনি যদি কোন কাজ নির্দিষ্ট টাইম পর্যন্ত করতে চান। এখানে শুরুটা বলে দিবেন, তারপর কতক্ষন পর্যন্ত চলবে সেটা বলে দিবেন 
// // আর সবশেষে প্রতিটা স্টেপে কতটুকু যেতে চান
// // for(শুরু; কন্ডিশন; স্টেপ) {
// //    স্টেটমেন্ট;
// // }
// var i;
// for(i=0; i<8; i++){
// 	console.log(i);
// }

// // or
// var i;
// for(i=0; i<8; i++){
// 	console.log('number: ' + i);
// }



// ৩। whileস্টেটমেন্টঃ
// যতক্ষন(আমি সত্য) {
//    স্টেটমেন্ট; 
// }
// এটাও আগেরটার মতোই তবে প্রথমেই আপনার কন্ডিশন চ্যাক করে নিবে।
// যদি মিথ্যা হয় তাহলে সরাসরি লুপ থেকে বের হয়ে যাবে কোনো কিছু জিজ্ঞাসা বা এক্সিকিউট করার আগেই, 
// আর সত্য হলে লুপের ভিতরে থেকে এক্সিকিউট করবে
// var name = 'mahmud';
// while(name =='mahmud') {
//     console.log('Inside the Loop');
//     //break;
//     name = prompt('Enter the name: ');
// }
// console.log('Out of the loop');



// // ৪। breakস্টেটমেন্টঃ
// // আপনি লুপের স্টেটমেন্ট এর ভিতরে থেকেও লুপকে কন্ট্রোল করতে পারবেন। 
// // একটা চলন্ত লুপে একটা নির্দিষ্ট টাইমে যদি আপনি চান লুপ থেকে পুরোপুরি বের হয়ে আসতে তাহলে breakস্টেটমেন্ট ব্যবহার করা হয়ঃ
// var i;
// for(i=0; i<10; i++){
// 	if(i==6){
// 		break;
// 	}
// 	console.log('num: '+i)
// }



// // ৫। continueস্টেটমেন্টঃ
// // এটাও এরকম লুপকে কন্ট্রোল করতে ব্যবহার করা হয়। 
// // কিন্তু এক্ষেত্ত্রে লুপ থেকে পুরোপুরি বের হয়ে না এসে জাস্ট সেই লুপটা স্কিপ করে যায়ঃ
// for(var i = 0; i < 10; i++) {
//     if(i == 5) {
//         console.log(i + ' is skipped');
//         continue;
//     }
//     console.log('i is now at: ' + i);
// }


// // জাভাস্ক্রিপ্টঃ অ্যারে নিয়ে সবকিছু
// // অ্যারে নন-প্রিমিটিভ/রেফারেন্স ডাটা টাইপ। আমি এগুলো নিয়ে পূর্বে লিখেছিলাম। অ্যারে একধরনের অবজেক্ট। আর অবজেক্ট মানে কি জানি? হ্যা, অবজেক্ট মানে এটার কিছু প্রপার্টিজ থাকবে। আপনি অবজেক্ট হলে আপনার হাত, কান, গলা, চোখ ইত্যাদি ইত্যাদি আপনার প্রপার্টিজ। সেভাবে অ্যারেরও কিছু প্রপার্টিজ আছে যেগুলো ইউজ করে
// // অ্যারে ডিক্লেয়ার করাঃ অ্যারে দুইভাবে ডিক্লেয়ার করা যায়। তার মধ্যে প্রথমটা খুব বেশী ইউজ করা হয় না কিন্তু জেনে রাখা ভালো
// var Name = new Array('Rahim', 'Karim', 'Rafiq', 'Jabbar');
// console.log(Name)

// // দেখুন এখানে প্রত্যেকটা ডাটার সাথে একটা নাম্বার দেখাচ্ছে। হ্যা,
// //  এটাকে বলে ইন্ডেক্স নাম্বার। ইন্ডেক্স নাম্বার সাহায্য করবে আপনাকে অ্যারে থেকে স্পেসেফিক কোনো ডাটা বের করে আনতে।

// console.log(Name[2])

// // এখন যদি আপনি স্পেসেফিক কোনো ভ্যালুও চেঞ্জ করতে চান তাহলেও পারবেন এই ইন্ডেক্স নাম্বারের সাহায্যেইঃ
// Name[2]='lamyaa';
// console.log(Name)

// // অ্যারেতে কয়টা আইটেম আছে সেটা জানার জন্যে length প্রপার্টিজ 
// //অ্যাক্সেস করতে চাই তাহলে আমাদের এভাবে লিখতে হবেঃ একে ডট নোটেশান বলে
// console.log(Name.length)

// // এই ডট নোটেশান আর ব্র্যাকেট নোটেশান সব অবজেক্ট এর বেলাতেই ইউজ হয়। 
// // তাই এগুলার ইউসেজ মাথায় রাখা অবশ্যই জরুরী। 
// // ব্র্যাকেট নোটেশান ইউজ করে এই প্রপার্টিজ অ্যাক্সেস করতে চাইলেঃ
// console.log(Name['length'])
// // নামের সাথে বেশ মিল আছে তাই আশা করি ডট নোটেশান আর ব্র্যাকেট নোটেশান মনে রাখতে হবে না।


// // এবার কিভাবে অ্যারের সবগুলো আইটেম অ্যাক্সেস করা যেতে পারে? 
// // মনে হয় আগের পর্বে লুপ নিয়ে আলোচনা করেছিলাম। 
// // একইরকম কাজ বারবার করা লাগলে নাকি লুপ ইউজ করতে হয়। হ্যা!
// // আপনি লুপ ইউজ করে ইজিলি অ্যারের সবগুলো আইটেম অ্যাক্সেস করতে পারবেনঃ
// var names=['mahmud','hossain','lamyaa'];
// var i;
// for(i=0; i<names.length; i++){
// 	console.log(names[i]);
// }


// // অ্যারেতে শেষের দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
// var names=['mahmud','hossain'];
// console.log(names);
// names.push('lmayaa')
// console.log(names);


// //অ্যারেতে শেষের দিক হতে আইটেম রিমুভ করতেঃ
// var names=['mahmud','hossain'];
// console.log(names);
// names.pop()
// console.log(names);


// // অ্যারেতে শুরুর দিক হতে আইটেম রিমুভ করতেঃ
// var names=['mahmud','hossain','lamyaa']
// console.log(names)
// names.shift();
// console.log(names)

// // এখন শুরু আইটেম রিমুভ করায় সবার ইন্ডেক্স নাম্বার পরিবর্তন হবে খেয়াল রাখবেন।
// console.log(names[0])

// // // অ্যারেতে শুরুর দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ
// var names=['hossain','lamyaa']
// console.log(names)
// names.unshift('mahmud')
// console.log(names)

// // নির্দিষ্ট কোনো আইটেম এর ইন্ডেক্স নাম্বার জানতেঃ
// console.log(names.indexOf('lamyaa'));


// // ইন্ডেস্ক নাম্বার দিয়ে কোনো আইটেম রিমুভ করতেঃ
// console.log(names.splice(2));


// // এখানে ইনডেক্স নাম্বার কত থেকে শুরু করে কত পর্যন্ত রিমুভ করতে চাচ্ছেন সেগুলা আর্গুমেন্ট হিসেবে এখানে যাবে
// var names=['mahmud','hossain','lamyaa','me','he','we']
// console.log(names)
// console.log(names.splice(2,4))


// // আর যদি চান একটা নির্দিষ্ট ইন্ডেক্স নাম্বার থেকে শুরু করে বাকি সবগুলো রিমুভ করতে 
// // তাইলে প্রথম আর্গুমেন্টে জাস্ট যেখান থেকে রিমুভ করা শুরু করবেন সে ইন্ডেক্স নাম্বারটা দিলেই হবেঃ
// var names=['mahmud','hossain','lamyaa','me','he','we']
// // console.log(names)
// console.log(names.splice(2))


// // অ্যারে কপি করতেঃ
// // যদি একটা অ্যারে থেকে আরেকটা অ্যারে কপি করতে চাই তাহলে অনেকভাবেই করা যায়। সবচেয়ে সিম্পলভাবে(কপি বাই রেফারেন্স)ঃ
// // var newArr = arrName;

// var names=['mahmud','hossain','lamaa']
// var copynames=names;
// console.log(copynames);

// // অথবা আমরা চাইলে এভাবেও করতে পারি। সেক্ষেত্রে একটু মডিফাই করেও আপনি অ্যারে টাকে কপি করতে পারবেনঃ
// var names=['mahmud','hossain','lamaa']
// var copynames=names.slice(0,3);
// console.log(copynames);

// তবে ডিরেক্ট অ্যারে কপি করা আর স্লাইস ইউজ করে কপি করার মধ্যে একটু তফাৎ আছে। 
// ডিরেক্ট অ্যারে কপি করাকে কপি বাই রেফারেন্স বলে।
//  এখানে আমি নতুন যে অ্যারে নিয়েছি সেটা আর আগেরটা সেইম অবজেক্ট কেই রেফার করবে 
//  যদি আপনি অ্যাসাইনমেন্ট = অপারেটর ইউজ করেন। আপনি যদি যেকোনো একটাতে কিছু চ্যাঞ্জ করেন তাইলে দুইটা তেই সেটার ইফেক্ট পাবেন।
//  কারণ দুইজনই সেইম অবজেক্ট রেফার করতেছে

// newArr[0] = 'Changed Rahim'
// নতুন অ্যারেতে আইটেম চ্যাঞ্জ করার কারণে সেটা আগের অ্যারেতেও ইফেক্ট পড়েছে। 
// কারণ আসলে দুইটা অ্যারে সেইম মেমোরি লোকেশান বা সেইম অবজেক্টকেই রেফার করছে।
// arrName === newArr

// আর স্লাইস ইউজ করে কপি করাকে কপি বাই ভ্যালু বলে। এখানে শুধু ভ্যালু বা আইটেমগুলোই কপি হবে নতুন অ্যারেতে। 
// কিন্তু দুইটা অ্যারে সম্পূর্ন পৃথক পৃথক দুইটা অবজেক্ট
// আর === ইউজ করলে দেখবেন ফলস দেখাচ্ছে কারণ দুইটা সেইম অবজেক্ট না, জাস্ট ভ্যালুগুলো কপি হয়েছেঃ
// arrName === newArr

