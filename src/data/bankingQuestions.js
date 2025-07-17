// Banking survey questions
export const bankingQuestions = [
  {
    id: 'gender',
    type: 'radio',
    question: 'هل انت...',
    subtitle: '',
    options: [
      'ذكر',
      'انثى'
    ]
  },
  {
    id: 'age_group',
    type: 'radio',
    question: 'ممكن تحدد فئتك العمرية؟',
    subtitle: '',
    options: [
      'أقل من 15 سنة',
      '16-20 سنة',
      '21-30 سنة',
      '31-40 سنة',
      '41-50 سنة',
      '51-60 سنة',
      '61 سنة أو أكثر'
    ]
  },
  {
    id: 'residence_location',
    type: 'radio',
    question: 'محل السكن...',
    subtitle: '',
    options: [
      'القاهرة الكبرى',
      'الإسكندرية',
      'محافظات الدلتا',
      'محافظات الصعيد',
      'محافظات القناة والمحافظات الأخرى'
    ]
  },
  {
    id: 'residence_area',
    type: 'radio',
    question: 'منطقة السكن...',
    subtitle: '',
    options: [
      'وسط البلد أو التحرير أو العباسية',
      'الحي أو المهندسين أو الزمالك',
      'المعادي',
      'مصر الجديدة أو مدينة نصر',
      'القاهرة الجديدة أو التجمع',
      '6 أكتوبر أو الشيخ زايد',
      'شبرا',
      'أخرى'
    ],
    hasOtherOption: true,
    otherPlaceholder: 'اكتب منطقة السكن...'
  },
  {
    id: 'employment_status',
    type: 'radio',
    question: 'ممكن تحدد الوضع الوظيفي للعائل الرئيسي في البيت؟',
    subtitle: '',
    options: [
      'رئيس قطاع أو رئيس مجلس إدارة أو صاحب شركة',
      'مدير بدرجة كبيرة',
      'مشرف أو مدير متوسط الخبرة',
      'موظف',
      'عامل ذو حرفة أو يعمل لحسابه نفسه',
      'ليس لديه حرفة أو عامل عادي',
      'لا يعمل'
    ]
  },
  {
    id: 'housing_type',
    type: 'radio',
    question: 'ممكن تحدد نوع المنزل اللي بتقيم فيه حالياً سواء إيجار أو خاص بك',
    subtitle: '',
    options: [
      'سكن فاخر أو في حي راقي',
      'فيلا',
      'شقة في كومبوند',
      'عمارة أو برج سكني في منطقة عادية',
      'مساكن متوسطة',
      'مساكن شعبية'
    ]
  },
  {
    id: 'household_items',
    type: 'checkbox',
    question: 'إيه من الحاجات دي عندك في البيت؟ سواء ملكك أو ملك شخص من العائلة',
    subtitle: '(من فضلك اختار كل الحاجات اللي بتنطبق)',
    options: [
      'أكثر من سيارة',
      'سيارة واحدة',
      'اشتراك القنوات التليفزيونية المدفوعة زي BeIN أو OSN، نتفليكس، شاهد، واتش إت',
      'تلفزيون سمارت أو Smart TV أو مايكروفون أو غسالة أطباق',
      'تليفزيون LCD',
      'لاب توب أو تابلت',
      'غسالة ملابس أوتوماتيك',
      'تليفزيون عادي مش LCD',
      'غسالة ملابس عادية مش أوتوماتيك'
    ]
  },
  {
    id: 'mobile_provider',
    type: 'radio',
    question: 'خط الموبايل الأساسي بتاعك من أي شركة؟',
    subtitle: '',
    options: [
      'فودافون',
      'اتصالات',
      'اورنج',
      'وي - المصرية للاتصالات'
    ]
  },
  {
    id: 'bank_awareness',
    type: 'checkbox',
    question: 'تعرف أو سمعت عن أي من البنوك التالية؟',
    subtitle: '',
    variant: 'image-mid',
    options: [
      'البنك الأهلي المصري — National Bank of Egypt (NBE)',
      'بنك مصر — Banque Misr',
      'بنك القاهرة — Banque du Caire',
      'البنك الإسكندرية — Alex Bank',
      'البنك التجاري الدولي — Commercial International Bank (CIB)',
      'بنك قطر الوطني — Qatar National Bank (QNB)',
      'البنك المصري لتنمية الصادرات — Export Development Bank (E-Bank)',
      'البنك المصري الخليجي — Egyptian Gulf Bank – EG Bank',
      'إتش إس بي سي — HSBC',
      'بنك الإمارات دبي الوطني — Emirates NBD',
      'البنك العربي الأفريقي الدولي — Arab African International Bank (AAIB)',
      'مصرف أبوظبي الإسلامي — Abu Dhabi Islamic Bank (ADIB)',
      'بنك التعمير والإسكان — Housing & Development Bank (HDB)',
      'بنك فيصل الإسلامي المصري — Faisal Islamic Bank of Egypt',
      'كريدي أجريكول — Credit Agricole',
      'بنك أبو ظبي التجاري — Abu Dhabi Commercial Bank (ADCB)',
      'بنك أبو ظبي الأول — First Abu Dhabi Bank (FAB)',
      'سايب — SAIB',
      'معرفش أي بنك من دول'
    ],
    images: [
      '/images/banks/national bank of Egypt.svg',
      '/images/banks/Banque_Misr.svg.png',
      '/images/banks/Banque_du_caire_Logo.svg.png',
      '/images/banks/Alex_Bank_Logo.svg.png',
      '/images/banks/Cib_Logo.svg.png',
      '/images/banks/Logo_Qatar_National_Bank.png',
      '/images/banks/EBank_Logo.jpg',
      '/images/banks/البنك_المصري_الخليجي.png',
      '/images/banks/HSBC_logo_(2018).svg.png',
      '/images/banks/Emirates_NBD.svg.png',
      '/images/banks/البنك_العربى_الافريقى_الدولى.png',
      '/images/banks/Abu_Dhabi_Islamic_Bank_(logo).png',
      '/images/banks/housing development bank.jpg',
      '/images/banks/بنك_فيصل_الاسلامي_المصري.png',
      '/images/banks/Crédit_Agricole.svg.png',
      '/images/banks/Abu_Dhabi_Commercial_Bank_logo.svg.png',
      '/images/banks/First_Abu_Dhabi_Bank_Logo.svg.png',
      '/images/banks/saib bank.jpg',
      null // No image for "I don't know any of these banks"
    ]
  }
]; 