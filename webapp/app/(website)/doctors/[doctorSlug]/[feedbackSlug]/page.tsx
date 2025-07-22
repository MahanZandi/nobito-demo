"use client";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "محمد میرزایی",
    image: "/images/doctor-10.png",
    slug: "mohammad-mirzaei",
    feedbackSlug: "mohammad-mirzaei-feedback",
    rate: "4.7/5",
    star: 4.3,
    locationLink: "https://www.google.com/maps?q=location",
    comment: "420 نظر",
    happyComment: 390,
    badComment: 30,
    services: "جراحی مغز",
    takeTurns: [
      { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      { title: "ویزیت حضوری", icon: "isax isax-buliding" },
    ],
    specialization: "جراح مغز و اعصاب",
    happyPatients: 3120,
    successfulTurn: 1980,
    happyPatientsPercentage: 95,
    skills: ["برداشتن تومور مغزی", "درمان صرع", "میکروجراحی"],
    city: "تبریز",
    features: ["پارکینگ", "آسانسور", "تخت بیمار", "کافه بیمارستان"],
    workingHours: "یکشنبه تا چهارشنبه 10 صبح تا 4 عصر",
    location: "چهارراه شریعتی - خیابان شمس تبریزی",
    insurance: "بیمه ایران",
    gender: "male",
    description: `دکتر محمد میرزایی جراح مغز و اعصاب با بیش از ۱۵ سال سابقه فعالیت تخصصی در زمینه جراحی‌های پیچیده مغز و ستون فقرات است. ایشان در درمان انواع تومورهای مغزی، صرع و انجام میکروجراحی‌های پیشرفته تخصص دارد. دکتر میرزایی با بهره‌گیری از جدیدترین تکنولوژی‌های پزشکی، موفق به انجام بیش از ۳۰۰۰ عمل موفق شده است. بیماران ایشان از دقت، مهارت و اخلاق حرفه‌ای وی رضایت بالایی دارند. همکاری با مراکز درمانی معتبر و ارائه مشاوره تخصصی از دیگر ویژگی‌های حرفه‌ای ایشان است. دکتر میرزایی همواره در تلاش برای ارتقای سطح سلامت بیماران و آموزش به کادر درمانی می‌باشد.`,
    firstPhoneNumber: "09120000001",
    secandPhoneNumber: "09120000002",
    waitingTime: 85,
    correctDiagnosis: 92,
    facilities: 90,
    cleanliness: 93,
    goodBehavior: 96,
    treatedPatients: 2500,
    recommendedByUsers: 2100,
    consultation: [
      {
        title: "اولین نوبت خالی",
        date: "دوشنبه 3 آذر (14:30)",
        time: "25 دقیقه",
        price: 120000,
      },
      {
        title: "دومین نوبت خالی",
        date: "دوشنبه 3 آذر ( Mainly 15:15)",
        time: "25 دقیقه",
        price: 150000,
      },
      {
        title: "سومین نوبت خالی",
        date: "دوشنبه 3 آذر (16:00)",
        time: "25 دقیقه",
        price: 180000,
      },
      {
        title: "چهارمین نوبت خالی",
        date: "دوشنبه 3 آذر (16:45)",
        time: "25 دقیقه",
        price: 200000,
      },
    ],
    comments: [
      {
        id: 1,
        name: "زهرا احمدی",
        star: 4,
        date: "۱۵/۸/۱۴۰۲",
        comment:
          "پزشک بسیار حرفه‌ای و خوش‌برخورد بود و توانست مشکل من را به خوبی تشخیص دهد. حتماً به دیگران توصیه می‌کنم. روند درمانم خیلی سریع پیش رفت و از دقت و توجه ایشان بسیار راضی بودم. حتی بعد از ویزیت هم پیگیر وضعیت من بودند و این برایم ارزشمند بود.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۱۵ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
      {
        id: 2,
        name: "علی محمدی",
        star: 5,
        date: "۲۰/۸/۱۴۰۲",
        comment:
          "خیلی دقیق و با حوصله به صحبت‌های من گوش دادند و روند درمان عالی بود. محیط مطب آرام و تمیز بود و پرسنل هم رفتار خوبی داشتند. من از نتیجه درمان کاملاً راضی هستم و قطعاً دوباره مراجعه خواهم کرد.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۱۰ دقیقه",
        takeTurns: { title: "ویزیت حضوری", icon: "isax isax-buliding" },
      },
      {
        id: 3,
        name: "مریم رضایی",
        star: 4,
        date: "۲۲/۸/۱۴۰۲",
        comment:
          "محیط مطب تمیز و منظم بود و دکتر با صبر و دقت پاسخ دادند. سوالاتم را کامل جواب دادند و نگرانی‌هایم را برطرف کردند. زمان انتظار هم نسبتاً کوتاه بود و همه چیز به خوبی پیش رفت.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۲۰ دقیقه",
        takeTurns: { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      },
      {
        id: 4,
        name: "حسین عباسی",
        star: 3,
        date: "۲۵/۸/۱۴۰۲",
        comment:
          "در مجموع راضی بودم اما زمان انتظار کمی طولانی بود. دکتر همیشه صبر کرد و با حوصله به سوالاتم پاسخ داد. به نظرم می‌توانستند زمان‌بندی بهتری داشته باشند اما از نظر تخصصی مشکلی نبود.",
        suggest: false,
        image: "/images/comment-1.png",
        waitingTime: "۳۰ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
      {
        id: 5,
        name: "مریم رضایی",
        star: 4,
        date: "۲۲/۸/۱۴۰۲",
        comment:
          "محیط مطب تمیز و منظم بود و دکتر با صبر و دقت پاسخ دادند. سوالاتم را کامل جواب دادند و نگرانی‌هایم را برطرف کردند. زمان انتظار هم نسبتاً کوتاه بود و همه چیز به خوبی پیش رفت.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۲۰ دقیقه",
        takeTurns: { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      },
      {
        id: 6,
        name: "حسین عباسی",
        star: 3,
        date: "۲۵/۸/۱۴۰۲",
        comment:
          "در مجموع راضی بودم اما زمان انتظار کمی طولانی بود. دکتر همیشه صبر کرد و با حوصله به سوالاتم پاسخ داد. به نظرم می‌توانستند زمان‌بندی بهتری داشته باشند اما از نظر تخصصی مشکلی نبود.",
        suggest: false,
        image: "/images/comment-1.png",
        waitingTime: "۳۰ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
    ],
    similarDoctors: [
      {
        slug: "mohammad-mirzaei",
        name: "محمد میرزایی",
        image: "/images/doctor-10.png",
        specialization: "جراح مغز و اعصاب",
      },
      {
        slug: "ali-rezaei",
        name: "علی رضایی",
        image: "/images/doctor-2.jpeg",
        specialization: "نورولوژیست",
      },
      {
        slug: "sara-ahmadi",
        name: "سارا احمدی",
        image: "/images/doctor-9.png",
        specialization: "متخصص مغز و اعصاب کودکان",
      },
      {
        slug: "mina-karimi",
        name: "مینا کریمی",
        image: "/images/doctor-9.png",
        specialization: "متخصص نورولوژی و سکته مغزی",
      },
    ],
  },
  {
    id: 2,
    name: "علی رضایی",
    image: "/images/doctor-2.jpeg",
    slug: "ali-rezaei",
    feedbackSlug: "ali-rezaei-feedback",
    rate: "4.2/5",
    star: 3.5,
    locationLink: "https://www.google.com/maps?q=location",
    comment: "280 نظر",
    happyComment: 250,
    badComment: 30,
    services: "درمان ام‌اس",
    takeTurns: [
      { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      { title: "ویزیت حضوری", icon: "isax isax-buliding" },
    ],
    specialization: "نورولوژیست",
    happyPatients: 1740,
    successfulTurn: 890,
    happyPatientsPercentage: 92,
    skills: ["درمان سکته مغزی", "ام‌اس", "اختلالات خواب"],
    city: "تهران",
    features: ["سالن انتظار", "پارکینگ", "دستیار پزشکی"],
    workingHours: "شنبه تا سه‌شنبه 9 صبح تا 5 عصر",
    location: "بلوار کشاورز - خیابان حجاب - پلاک ۲۰",
    insurance: "بیمه نوین",
    gender: "male",
    description: `دکتر علی رضایی متخصص نورولوژی با تجربه‌ای بیش از ۱۰ سال در درمان بیماری‌های مغز و اعصاب فعالیت دارد. ایشان در زمینه درمان ام‌اس، سکته مغزی و اختلالات خواب تخصص ویژه‌ای دارد و با رویکردی علمی و انسانی به بیماران خود خدمات ارائه می‌دهد. دکتر رضایی با شرکت در دوره‌های بین‌المللی و همکاری با مراکز درمانی معتبر، همواره دانش خود را به‌روز نگه می‌دارد. بیماران ایشان از دقت، صبر و توجه به جزئیات درمانی رضایت بالایی دارند. وی در آموزش و ارتقای سطح سلامت جامعه نیز فعال است و مقالات علمی متعددی منتشر کرده است.`,
    firstPhoneNumber: "09120000003",
    secandPhoneNumber: "09120000004",
    waitingTime: 80,
    correctDiagnosis: 88,
    facilities: 85,
    cleanliness: 90,
    goodBehavior: 94,
    treatedPatients: 1200,
    recommendedByUsers: 950,
    consultation: [
      {
        title: "اولین نوبت خالی",
        date: "شنبه 5 آذر (09:30)",
        time: "25 دقیقه",
        price: 110000,
      },
      {
        title: "دومین نوبت خالی",
        date: "شنبه 5 آذر (10:15)",
        time: "25 دقیقه",
        price: 130000,
      },
      {
        title: "سومین نوبت خالی",
        date: "شنبه 5 آذر (11:00)",
        time: "25 دقیقه",
        price: 160000,
      },
      {
        title: "چهارمین نوبت خالی",
        date: "شنبه 5 آذر (11:45)",
        time: "25 دقیقه",
        price: 190000,
      },
    ],
    comments: [
      {
        id: 1,
        name: "زهرا احمدی",
        star: 4,
        date: "۱۵/۸/۱۴۰۲",
        comment:
          "پزشک بسیار حرفه‌ای و خوش‌برخورد بود و توانست مشکل من را به خوبی تشخیص دهد. حتماً به دیگران توصیه می‌کنم. روند درمانم خیلی سریع پیش رفت و از دقت و توجه ایشان بسیار راضی بودم. حتی بعد از ویزیت هم پیگیر وضعیت من بودند و این برایم ارزشمند بود.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۱۵ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
      {
        id: 2,
        name: "علی محمدی",
        star: 5,
        date: "۲۰/۸/۱۴۰۲",
        comment:
          "خیلی دقیق و با حوصله به صحبت‌های من گوش دادند و روند درمان عالی بود. محیط مطب آرام و تمیز بود و پرسنل هم رفتار خوبی داشتند. من از نتیجه درمان کاملاً راضی هستم و قطعاً دوباره مراجعه خواهم کرد.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۱۰ دقیقه",
        takeTurns: { title: "ویزیت حضوری", icon: "isax isax-buliding" },
      },
      {
        id: 3,
        name: "مریم رضایی",
        star: 4,
        date: "۲۲/۸/۱۴۰۲",
        comment:
          "محیط مطب تمیز و منظم بود و دکتر با صبر و دقت پاسخ دادند. سوالاتم را کامل جواب دادند و نگرانی‌هایم را برطرف کردند. زمان انتظار هم نسبتاً کوتاه بود و همه چیز به خوبی پیش رفت.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۲۰ دقیقه",
        takeTurns: { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      },
      {
        id: 4,
        name: "حسین عباسی",
        star: 3,
        date: "۲۵/۸/۱۴۰۲",
        comment:
          "در مجموع راضی بودم اما زمان انتظار کمی طولانی بود. دکتر همیشه صبر کرد و با حوصله به سوالاتم پاسخ داد. به نظرم می‌توانستند زمان‌بندی بهتری داشته باشند اما از نظر تخصصی مشکلی نبود.",
        suggest: false,
        image: "/images/comment-1.png",
        waitingTime: "۳۰ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
      {
        id: 5,
        name: "مریم رضایی",
        star: 4,
        date: "۲۲/۸/۱۴۰۲",
        comment:
          "محیط مطب تمیز و منظم بود و دکتر با صبر و دقت پاسخ دادند. سوالاتم را کامل جواب دادند و نگرانی‌هایم را برطرف کردند. زمان انتظار هم نسبتاً کوتاه بود و همه چیز به خوبی پیش رفت.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۲۰ دقیقه",
        takeTurns: { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      },
      {
        id: 6,
        name: "حسین عباسی",
        star: 3,
        date: "۲۵/۸/۱۴۰۲",
        comment:
          "در مجموع راضی بودم اما زمان انتظار کمی طولانی بود. دکتر همیشه صبر کرد و با حوصله به سوالاتم پاسخ داد. به نظرم می‌توانستند زمان‌بندی بهتری داشته باشند اما از نظر تخصصی مشکلی نبود.",
        suggest: false,
        image: "/images/comment-1.png",
        waitingTime: "۳۰ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
    ],
    similarDoctors: [
      {
        slug: "mohammad-mirzaei",
        name: "محمد میرزایی",
        image: "/images/doctor-10.png",
        specialization: "جراح مغز و اعصاب",
      },
      {
        slug: "ali-rezaei",
        name: "علی رضایی",
        image: "/images/doctor-2.jpeg",
        specialization: "نورولوژیست",
      },
      {
        slug: "sara-ahmadi",
        name: "سارا احمدی",
        image: "/images/doctor-9.png",
        specialization: "متخصص مغز و اعصاب کودکان",
      },
      {
        slug: "mina-karimi",
        name: "مینا کریمی",
        image: "/images/doctor-9.png",
        specialization: "متخصص نورولوژی و سکته مغزی",
      },
    ],
  },
  {
    id: 3,
    name: "سارا احمدی",
    image: "/images/doctor-9.png",
    slug: "sara-ahmadi",
    feedbackSlug: "sara-ahmadi-feedback",
    rate: "4.9/5",
    star: 4.2,
    comment: "510 نظر",
    locationLink: "https://www.google.com/maps?q=location",
    happyComment: 500,
    badComment: 10,
    services: "بیماری‌های حرکتی",
    takeTurns: [
      { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      { title: "ویزیت حضوری", icon: "isax isax-buliding" },
    ],
    specialization: "متخصص مغز و اعصاب کودکان",
    happyPatients: 2890,
    successfulTurn: 1750,
    happyPatientsPercentage: 98,
    skills: ["فلج مغزی", "تشنج در کودکان", "درمان اختلال یادگیری"],
    city: "شیراز",
    features: ["آسانسور", "بازی‌درمانگر", "اتاق کودک"],
    workingHours: "دوشنبه و چهارشنبه 8 صبح تا 2 بعدازظهر",
    location: "خیابان قصردشت - کوچه ۱۵ - ساختمان سلامت",
    insurance: "بیمه البرز",
    gender: "female",
    description: `دکتر سارا احمدی متخصص مغز و اعصاب کودکان با بیش از ۱۲ سال سابقه درمان بیماری‌های حرکتی و عصبی در کودکان است. ایشان در زمینه درمان فلج مغزی، تشنج و اختلالات یادگیری تخصص دارد و با رویکردی دلسوزانه و علمی به کودکان و خانواده‌هایشان خدمات ارائه می‌دهد. دکتر احمدی با استفاده از روش‌های نوین درمانی و همکاری با تیم‌های توانبخشی، موفق به بهبود وضعیت بسیاری از بیماران شده است. وی در آموزش والدین و ارتقای سطح آگاهی جامعه نقش فعالی دارد و همواره در تلاش برای بهبود کیفیت زندگی کودکان می‌باشد.`,
    firstPhoneNumber: "09120000005",
    secandPhoneNumber: "09120000006",
    waitingTime: 92,
    correctDiagnosis: 97,
    facilities: 95,
    cleanliness: 98,
    goodBehavior: 99,
    treatedPatients: 1800,
    recommendedByUsers: 1600,
    consultation: [
      {
        title: "اولین نوبت خالی",
        date: "دوشنبه 7 آذر (08:30)",
        time: "25 دقیقه",
        price: 140000,
      },
      {
        title: "دومین نوبت خالی",
        date: "دوشنبه 7 آذر (09:15)",
        time: "25 دقیقه",
        price: 170000,
      },
      {
        title: "سومین نوبت خالی",
        date: "دوشنبه 7 آذر (10:00)",
        time: "25 دقیقه",
        price: 210000,
      },
      {
        title: "چهارمین نوبت خالی",
        date: "دوشنبه 7 آذر (10:45)",
        time: "25 دقیقه",
        price: 250000,
      },
    ],
    comments: [
      {
        id: 1,
        name: "زهرا احمدی",
        star: 4,
        date: "۱۵/۸/۱۴۰۲",
        comment:
          "پزشک بسیار حرفه‌ای و خوش‌برخورد بود و توانست مشکل من را به خوبی تشخیص دهد. حتماً به دیگران توصیه می‌کنم. روند درمانم خیلی سریع پیش رفت و از دقت و توجه ایشان بسیار راضی بودم. حتی بعد از ویزیت هم پیگیر وضعیت من بودند و این برایم ارزشمند بود.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۱۵ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
      {
        id: 2,
        name: "علی محمدی",
        star: 5,
        date: "۲۰/۸/۱۴۰۲",
        comment:
          "خیلی دقیق و با حوصله به صحبت‌های من گوش دادند و روند درمان عالی بود. محیط مطب آرام و تمیز بود و پرسنل هم رفتار خوبی داشتند. من از نتیجه درمان کاملاً راضی هستم و قطعاً دوباره مراجعه خواهم کرد.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۱۰ دقیقه",
        takeTurns: { title: "ویزیت حضوری", icon: "isax isax-buliding" },
      },
      {
        id: 3,
        name: "مریم رضایی",
        star: 4,
        date: "۲۲/۸/۱۴۰۲",
        comment:
          "محیط مطب تمیز و منظم بود و دکتر با صبر و دقت پاسخ دادند. سوالاتم را کامل جواب دادند و نگرانی‌هایم را برطرف کردند. زمان انتظار هم نسبتاً کوتاه بود و همه چیز به خوبی پیش رفت.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۲۰ دقیقه",
        takeTurns: { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      },
      {
        id: 4,
        name: "حسین عباسی",
        star: 3,
        date: "۲۵/۸/۱۴۰۲",
        comment:
          "در مجموع راضی بودم اما زمان انتظار کمی طولانی بود. دکتر همیشه صبر کرد و با حوصله به سوالاتم پاسخ داد. به نظرم می‌توانستند زمان‌بندی بهتری داشته باشند اما از نظر تخصصی مشکلی نبود.",
        suggest: false,
        image: "/images/comment-1.png",
        waitingTime: "۳۰ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
      {
        id: 5,
        name: "مریم رضایی",
        star: 4,
        date: "۲۲/۸/۱۴۰۲",
        comment:
          "محیط مطب تمیز و منظم بود و دکتر با صبر و دقت پاسخ دادند. سوالاتم را کامل جواب دادند و نگرانی‌هایم را برطرف کردند. زمان انتظار هم نسبتاً کوتاه بود و همه چیز به خوبی پیش رفت.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۲۰ دقیقه",
        takeTurns: { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      },
      {
        id: 6,
        name: "حسین عباسی",
        star: 3,
        date: "۲۵/۸/۱۴۰۲",
        comment:
          "در مجموع راضی بودم اما زمان انتظار کمی طولانی بود. دکتر همیشه صبر کرد و با حوصله به سوالاتم پاسخ داد. به نظرم می‌توانستند زمان‌بندی بهتری داشته باشند اما از نظر تخصصی مشکلی نبود.",
        suggest: false,
        image: "/images/comment-1.png",
        waitingTime: "۳۰ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
    ],
    similarDoctors: [
      {
        slug: "mohammad-mirzaei",
        name: "محمد میرزایی",
        image: "/images/doctor-10.png",
        specialization: "جراح مغز و اعصاب",
      },
      {
        slug: "ali-rezaei",
        name: "علی رضایی",
        image: "/images/doctor-2.jpeg",
        specialization: "نورولوژیست",
      },
      {
        slug: "sara-ahmadi",
        name: "سارا احمدی",
        image: "/images/doctor-9.png",
        specialization: "متخصص مغز و اعصاب کودکان",
      },
      {
        slug: "mina-karimi",
        name: "مینا کریمی",
        image: "/images/doctor-9.png",
        specialization: "متخصص نورولوژی و سکته مغزی",
      },
    ],
  },
  {
    id: 4,
    name: "مینا کریمی",
    image: "/images/doctor-9.png",
    slug: "mina-karimi",
    feedbackSlug: "mina-karimi-feedback",
    rate: "4.6/5",
    star: 3.7,
    comment: "330 نظر",
    locationLink: "https://www.google.com/maps?q=location",
    happyComment: 310,
    badComment: 20,
    services: "درمان سکته مغزی",
    takeTurns: [
      { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      { title: "ویزیت حضوری", icon: "isax isax-buliding" },
    ],
    specialization: "متخصص نورولوژی و سکته مغزی",
    happyPatients: 2460,
    successfulTurn: 1300,
    happyPatientsPercentage: 94,
    skills: ["آزمایش نوار مغز", "سونوگرافی مغز", "فیزیوتراپی سکته"],
    city: "رشت",
    features: ["تخت بیمار", "پارکینگ", "سالن انتظار", "وای‌فای رایگان"],
    workingHours: "شنبه تا چهارشنبه 11 صبح تا 7 عصر",
    location: "میدان شهرداری - ابتدای خیابان سعدی - پلاک ۴۸",
    insurance: "بیمه سامان",
    gender: "female",
    description: `دکتر مینا کریمی متخصص نورولوژی و درمان سکته مغزی با بیش از ۱۳ سال سابقه فعالیت در مراکز درمانی معتبر است. ایشان در زمینه آزمایش نوار مغز، سونوگرافی مغز و فیزیوتراپی بیماران سکته مغزی تخصص دارد. دکتر کریمی با رویکردی علمی و انسانی، بیماران را در مسیر درمان و توانبخشی همراهی می‌کند. وی با ارائه مشاوره‌های تخصصی و همکاری با تیم‌های پزشکی، موفق به بهبود وضعیت بسیاری از بیماران شده است. اخلاق حرفه‌ای، دقت در تشخیص و توجه به نیازهای بیماران از ویژگی‌های بارز ایشان است.`,
    firstPhoneNumber: "09120000007",
    secandPhoneNumber: "09120000008",
    waitingTime: 87,
    correctDiagnosis: 93,
    facilities: 91,
    cleanliness: 95,
    goodBehavior: 97,
    treatedPatients: 1400,
    recommendedByUsers: 1200,
    consultation: [
      {
        title: "اولین نوبت خالی",
        date: "شنبه 10 آذر (11:30)",
        time: "25 دقیقه",
        price: 160000,
      },
      {
        title: "دومین نوبت خالی",
        date: "شنبه 10 آذر (12:15)",
        time: "25 دقیقه",
        price: 200000,
      },
      {
        title: "سومین نوبت خالی",
        date: "شنبه 10 آذر (13:00)",
        time: "25 دقیقه",
        price: 300000,
      },
      {
        title: "چهارمین نوبت خالی",
        date: "شنبه 10 آذر (13:45)",
        time: "25 دقیقه",
        price: 400000,
      },
    ],
    comments: [
      {
        id: 1,
        name: "زهرا احمدی",
        star: 4,
        date: "۱۵/۸/۱۴۰۲",
        comment:
          "پزشک بسیار حرفه‌ای و خوش‌برخورد بود و توانست مشکل من را به خوبی تشخیص دهد. حتماً به دیگران توصیه می‌کنم. روند درمانم خیلی سریع پیش رفت و از دقت و توجه ایشان بسیار راضی بودم. حتی بعد از ویزیت هم پیگیر وضعیت من بودند و این برایم ارزشمند بود.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۱۵ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
      {
        id: 2,
        name: "علی محمدی",
        star: 5,
        date: "۲۰/۸/۱۴۰۲",
        comment:
          "خیلی دقیق و با حوصله به صحبت‌های من گوش دادند و روند درمان عالی بود. محیط مطب آرام و تمیز بود و پرسنل هم رفتار خوبی داشتند. من از نتیجه درمان کاملاً راضی هستم و قطعاً دوباره مراجعه خواهم کرد.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۱۰ دقیقه",
        takeTurns: { title: "ویزیت حضوری", icon: "isax isax-buliding" },
      },
      {
        id: 3,
        name: "مریم رضایی",
        star: 4,
        date: "۲۲/۸/۱۴۰۲",
        comment:
          "محیط مطب تمیز و منظم بود و دکتر با صبر و دقت پاسخ دادند. سوالاتم را کامل جواب دادند و نگرانی‌هایم را برطرف کردند. زمان انتظار هم نسبتاً کوتاه بود و همه چیز به خوبی پیش رفت.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۲۰ دقیقه",
        takeTurns: { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      },
      {
        id: 4,
        name: "حسین عباسی",
        star: 3,
        date: "۲۵/۸/۱۴۰۲",
        comment:
          "در مجموع راضی بودم اما زمان انتظار کمی طولانی بود. دکتر همیشه صبر کرد و با حوصله به سوالاتم پاسخ داد. به نظرم می‌توانستند زمان‌بندی بهتری داشته باشند اما از نظر تخصصی مشکلی نبود.",
        suggest: false,
        image: "/images/comment-1.png",
        waitingTime: "۳۰ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
      {
        id: 5,
        name: "مریم رضایی",
        star: 4,
        date: "۲۲/۸/۱۴۰۲",
        comment:
          "محیط مطب تمیز و منظم بود و دکتر با صبر و دقت پاسخ دادند. سوالاتم را کامل جواب دادند و نگرانی‌هایم را برطرف کردند. زمان انتظار هم نسبتاً کوتاه بود و همه چیز به خوبی پیش رفت.",
        suggest: true,
        image: "/images/comment-1.png",
        waitingTime: "۲۰ دقیقه",
        takeTurns: { title: "جلسه آنلاین", icon: "isax isax-monitor-mobbile" },
      },
      {
        id: 6,
        name: "حسین عباسی",
        star: 3,
        date: "۲۵/۸/۱۴۰۲",
        comment:
          "در مجموع راضی بودم اما زمان انتظار کمی طولانی بود. دکتر همیشه صبر کرد و با حوصله به سوالاتم پاسخ داد. به نظرم می‌توانستند زمان‌بندی بهتری داشته باشند اما از نظر تخصصی مشکلی نبود.",
        suggest: false,
        image: "/images/comment-1.png",
        waitingTime: "۳۰ دقیقه",
        takeTurns: { title: "گفتگو تلفنی", icon: "isax isax-call-calling" },
      },
    ],
    similarDoctors: [
      {
        slug: "mohammad-mirzaei",
        name: "محمد میرزایی",
        image: "/images/doctor-10.png",
        specialization: "جراح مغز و اعصاب",
      },
      {
        slug: "ali-rezaei",
        name: "علی رضایی",
        image: "/images/doctor-2.jpeg",
        specialization: "نورولوژیست",
      },
      {
        slug: "sara-ahmadi",
        name: "سارا احمدی",
        image: "/images/doctor-9.png",
        specialization: "متخصص مغز و اعصاب کودکان",
      },
      {
        slug: "mina-karimi",
        name: "مینا کریمی",
        image: "/images/doctor-9.png",
        specialization: "متخصص نورولوژی و سکته مغزی",
      },
    ],
  },
];

type pointsType = "good-points" | "bad-points";

const FeedbackPage = () => {
  const { feedbackSlug } = useParams();

  const [points, setPoints] = useState<pointsType>("good-points");
  const goodPoint = () => {
    setPoints("good-points");
  };
  const badPoint = () => {
    setPoints("bad-points");
  };

  const doctor = doctors.find((d) => d.feedbackSlug === feedbackSlug);
  if (!doctor) return notFound();

  // stars component
  const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (star: number) => {
      if (rating === star) {
        setRating(0);
      } else {
        setRating(star);
      }
    };

    return (
      <div className="flex flex-row-reverse justify-center gap-2 mt-6 xl:mt-[40px] ">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => handleClick(star)}
            viewBox="0 0 24 24"
            fill={rating >= star ? "gold" : "lightgray"}
            className="cursor-pointer transition-all text-[32px] xl:size-[48px]"
          >
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="container pt-[24px] px-4 xl:px-0 xl:pt-[72px]">
      <div className="xl:bg-white xl:border border-grey-200 rounded-4xl xl:py-10 xl:px-20 ">
        <div className="flex-col gap-4 xl:gap-6 flex items-center">
          <div className="rounded-full size-[112px] xl:size-[144px] flex justify-center items-center border p-2 border-grey-400">
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={128}
              height={128}
              className="rounded-full size-[96px] xl:size-[128px] object-cover"
            />
          </div>
          <div className="flex items-center flex-col gap-4">
            <p className="text-2xl xl:text-[28px] text-black-500 font-medium">
              {doctor.name}
            </p>
            <p className="text-[16px] xl:text-xl text-grey-400">
              {doctor.specialization}
            </p>
          </div>
          <p className="text-[14px] xl:text-xl text-grey-400">
            کاربر گرامی ضمن آرزوی سلامتی برای شما ؛ لطفا امتیاز خود را نسبت به
            خدمات دکتر {doctor.name} ثبت
          </p>
        </div>
        <StarRating />
        <div className="xl:mt-10 grid grid-cols-2">
          <div>
            <div
              onClick={goodPoint}
              className={`${
                points === "good-points" ? "text-primary-500" : "text-grey-400"
              } flex justify-center cursor-pointer gap-2 pb-2`}
            >
              <span className="isax isax-like-1 text-[32px]"></span>
              <span className="xl:text-[22px]">نقاط قوت</span>
            </div>
            <div
              className={`${
                points === "good-points"
                  ? "bg-primary-500 h-1"
                  : "bg-grey-200 h-px"
              } `}
            ></div>
          </div>
          <div>
            <div
              onClick={badPoint}
              className={`${
                points === "bad-points" ? "text-error-500" : "text-grey-400"
              } flex justify-center cursor-pointer gap-2 pb-2`}
            >
              <span className="isax isax-dislike text-[32px]"></span>
              <span className="xl:text-[22px]">نقاط ضعف</span>
            </div>
            <div
              className={`${
                points === "bad-points"
                  ? "bg-error-500 h-1"
                  : "bg-grey-200 h-px"
              } `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
