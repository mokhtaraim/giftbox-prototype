// Unified bank options and images for reuse across multiple questions
const BANK_OPTIONS = [
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
];

const BANK_IMAGES = [
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
];

// Unified wallet options and images for reuse across multiple questions
const WALLET_OPTIONS = [
  'لاكي — Lucky',
  'فايليو — valU',
  'كاشات — Kashat',
  'Telda — Telda',
  'حالاً — Halan',
  'خزنة — Khazna',
  'فرصة — Forsa',
  'دايرة — Dayra',
  'Sympl — Sympl',
  'بلنك — Blnk',
  'فودافون كاش — VF Cash',
  'اتصالات كاش — ET Cash',
  'وي باي — WE Pay',
  'أورنج كاش — Orange Cash',
  'ماي فوري — myfawry',
  'انستا باي — INSTAPAY',
  'أمان — Aman',
  'Money fellows — Money fellows',
  'فلاش — Flash',
  'معرفش أي واحدة من الشركات دي'
];

const WALLET_IMAGES = [
  '/images/wallets/Lucky.jpg',
  '/images/wallets/ValU.jpg',
  '/images/wallets/Kashat.png',
  '/images/wallets/Telda.png',
  '/images/wallets/Halan.jpg',
  '/images/wallets/Khazna.jpg',
  '/images/wallets/Forsa.jpg',
  '/images/wallets/Dayra.jpg',
  '/images/wallets/Sympl.jpg',
  '/images/wallets/blnk.jpg',
  '/images/wallets/VF Cash.jpg',
  '/images/wallets/etisalat.jpg',
  '/images/wallets/wepay.png',
  '/images/wallets/Orange Cash.png',
  '/images/wallets/Myfawry.jpg',
  '/images/wallets/Instapay.jpg',
  '/images/wallets/Aman.jpg',
  '/images/wallets/Money Fellows.jpg',
  '/images/wallets/Flash.jpg',
  null // No image for "I don't know any of these companies"
];

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
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'bank_customer',
    type: 'checkbox',
    question: 'انهى من البنوك التالية انت عميل فيهم؟',
    subtitle: '(عميل في بنك بمعنى انك بتستخدم واحدة او اكثر من الخدمات التالية: حساب بنكى – بطاقات الأتمان credit card – القروض – شهادات استثمار)',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'bank_joining_likelihood',
    type: 'radio',
    question: 'أي مدى احتمالية إنك تشترك في بنك (تبقى عميل في البنك) خلال السنة الجاية؟',
    subtitle: '',
    options: [
      'أكيد هشترك',
      'غالباً هشترك',
      'مش عارف',
      'غالباً مش هشترك',
      'أكيد مش هشترك'
    ]
  },
  {
    id: 'bank_accounts',
    type: 'checkbox',
    question: 'هل عندك حساب بنكى في اى من البنوك التالية؟',
    subtitle: '',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'credit_cards',
    type: 'checkbox',
    question: 'هل عندك بطاقة ائتمان (Credit Card) فى اي من البنوك التالية؟',
    subtitle: 'بطاقة الائتمان (Credit Card) هي البطاقة اللي بتستخدمها في مشترياتك ومش بتخصم من حسابك البنكي وبتسددها بعد الاستخدام بفترة.\n\nو هى غير بطاقة السحب (Debit Card) اللى بتسحب منها فلوس او بتسدد مشترياتك من حسابك البنكي.',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'bank_loans',
    type: 'checkbox',
    question: 'هل واخد قرض من اى من البنوك التالية؟',
    subtitle: '',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'investment_certificates',
    type: 'checkbox',
    question: 'هل عندك شهادات إستثمار فى اى من البنوك التالية؟',
    subtitle: '',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'internet_banking',
    type: 'checkbox',
    question: 'هل بتستخدم الانترنت البنكى Internet banking من البنوك التالية؟',
    subtitle: '',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'wallet_awareness',
    type: 'checkbox',
    question: 'هل تعرف أو سمعت عن مين من المحافظ الإلكترونية؟',
    subtitle: 'ماي فوري MyFawry على الانترنت او تطبيق الموبايل (مش ماكينة فوري اللي في الكشك او السوبر ماركت)',
    variant: 'image-mid',
    options: WALLET_OPTIONS,
    images: WALLET_IMAGES
  },
  {
    id: 'egyptian_movie',
    type: 'radio',
    question: 'انهى من دول فيلم مصرى؟',
    subtitle: '',
    options: [
      'هاري بوتر',
      'تيتانك',
      'ذا فولت ان اور ستارز',
      'حب البنات',
      'واندر'
    ]
  },
  {
    id: 'wallet_accounts',
    type: 'checkbox',
    question: 'ايه من دول عندك علية حساب او محفظة الكترونية؟',
    subtitle: '',
    variant: 'image-mid',
    options: WALLET_OPTIONS,
    images: WALLET_IMAGES
  },
  {
    id: 'wallet_opening_likelihood',
    type: 'radio',
    question: 'أي مدى احتمالية انك تفتح حساب فى او تستخدم خدمات محفظة الكترونية خلال السنة الجاية؟',
    subtitle: '',
    options: [
      'أكيد هستخدم افتح حساب',
      'غالبا هستخدم افتح حساب',
      'مش عارف',
      'غالبا مش هستخدم افتح حساب',
      'أكيد مش هستخدم افتح حساب'
    ]
  },
  {
    id: 'lucky_services',
    type: 'checkbox',
    question: 'إيه نوع الخدمات اللي بتستخدمها في Lucky؟',
    subtitle: '',
    options: [
      'خصومات',
      'دفع فواتير',
      'تحويل أموال',
      'شحن رصيد',
      'تقسيط',
      'استثمار',
      'قروض',
      'أخرى'
    ]
  },
  {
    id: 'halan_services',
    type: 'checkbox',
    question: 'إيه نوع الخدمات اللي بتستخدمها في Halan؟',
    subtitle: '',
    options: [
      'تقسيط',
      'دفع فواتير',
      'تحويل أموال',
      'شحن رصيد',
      'خصومات',
      'استثمار',
      'قروض',
      'أخرى'
    ]
  },
  {
    id: 'khazna_services',
    type: 'checkbox',
    question: 'إيه نوع الخدمات اللي بتستخدمها في Khazna؟',
    subtitle: '',
    options: [
      'تقسيط',
      'خصومات',
      'دفع فواتير',
      'تحويل أموال',
      'شحن رصيد',
      'استثمار',
      'قروض',
      'أخرى'
    ]
  },
  {
    id: 'customer_friendly_wallet',
    type: 'checkbox',
    question: 'في رأيك, انهى من الشركات التالية بينطبق عليها العبارة ديه',
    subtitle: 'شركة مريحة فى التعامل و بتهتم بالعميل',
    variant: 'image-mid',
    options: WALLET_OPTIONS,
    images: WALLET_IMAGES
  },
  {
    id: 'trustworthy_wallet',
    type: 'checkbox',
    question: 'في رأيك, انهى من الشركات التالية بينطبق عليها العبارة ديه',
    subtitle: 'شركة بثق فيها',
    variant: 'image-mid',
    options: WALLET_OPTIONS,
    images: WALLET_IMAGES
  },
  {
    id: 'attractive_ads_wallet',
    type: 'checkbox',
    question: 'في رأيك, انهى من الشركات التالية بينطبق عليها العبارة ديه',
    subtitle: 'شركة اعلاناتها جذابة',
    variant: 'image-mid',
    options: WALLET_OPTIONS,
    images: WALLET_IMAGES
  },
  {
    id: 'innovative_wallet',
    type: 'checkbox',
    question: 'في رأيك, انهى من الشركات التالية بينطبق عليها العبارة ديه',
    subtitle: 'شركة بتقدم كل جديد',
    variant: 'image-mid',
    options: WALLET_OPTIONS,
    images: WALLET_IMAGES
  },
  {
    id: 'unique_services_wallet',
    type: 'checkbox',
    question: 'في رأيك, انهى من الشركات التالية بينطبق عليها العبارة ديه',
    subtitle: 'شركة بتقدم خدمات مختلفة عن كل الشركات التانية',
    variant: 'image-mid',
    options: WALLET_OPTIONS,
    images: WALLET_IMAGES
  },
  {
    id: 'wallet_factors',
    type: 'checkbox',
    question: 'إيه أكتر ثلاث عوامل مهمين بالنسبالك لما تقرر تتعامل مع شركة من شركات المحافظ الإلكترونية؟',
    subtitle: '',
    options: [
      'نسبة الفوائد',
      'سهولة الابليكيشن',
      'سهولة و سرعة الإجراءات',
      'موثوق فيها و سمعتها معروفة',
      'تميز خدمة العملاء',
      'المصاريف الإدارية',
      'تميز أنظمة التقسيط',
      'أخرى'
    ]
  },
  {
    id: 'coffee_question',
    type: 'radio',
    question: 'إيه مش هتستخدمه و إنت بتعمل قهوة؟',
    subtitle: '',
    options: [
      'بن',
      'سكر',
      'ملح',
      'مياه'
    ]
  },
  {
    id: 'instapay_nps',
    type: 'nps',
    question: 'بناء على كل تجاربك مع انستاباى Instapay، الى اى مدى ممكن ترشحه لحد من معارفك؟',
    subtitle: '(0 = اكيد مش هرشحه، 10 = اكيد هرشحه)',
    scale: { min: 0, max: 10 }
  },
  {
    id: 'instapay_nps_reasoning',
    type: 'text',
    question: 'إيه الأسباب اللي خلتك تدي التقييم ده؟',
    subtitle: '',
    placeholder: 'اكتب الأسباب بالتفصيل...'
  },
  {
    id: 'instapay_app_satisfaction',
    type: 'scale',
    question: 'على مقياس من 1 الى 5 ايه مدى رضائك عن شركة انستاباى Instapay من حيث التطبيق (الأبليكيشن) Application؟',
    subtitle: '',
    options: [
      '1 ..غير راضى على الأطلاق',
      '2',
      '3',
      '4',
      '5 .. راضى جدا'
    ]
  },
  {
    id: 'instapay_customer_service',
    type: 'scale',
    question: 'على مقياس من 1 إلى 5، إيه مدى رضاك عن شركة إنستاباي Instapay من حيث خدمة العملاء؟',
    subtitle: '',
    options: [
      '1 .. غير راضي على الإطلاق',
      '2',
      '3',
      '4',
      '5 .. راضي جداً'
    ]
  },
  {
    id: 'instapay_partnerships',
    type: 'scale',
    question: 'على مقياس من 1 إلى 5، إيه مدى رضاك عن شركة إنستاباي Instapay من حيث عدد الأماكن اللي الشركة بتتعامل معاها (يعني إن اشتراكك في خدمات الشركة يتيح ليك تستفاد من عروض و فرص تقسيط أو حتى تسدد فواتيرك تبع عملات و شركات كتير و متنوعة)؟',
    subtitle: '',
    options: [
      '1 .. غير راضي على الإطلاق',
      '2',
      '3',
      '4',
      '5 .. راضي جداً'
    ]
  },
  {
    id: 'instapay_ease_speed',
    type: 'scale',
    question: 'على مقياس من 1 إلى 5، إيه مدى رضاك عن شركة إنستاباي Instapay من حيث سهولة و سرعة الإجراءات؟',
    subtitle: '',
    options: [
      '1 .. غير راضي على الإطلاق',
      '2',
      '3',
      '4',
      '5 .. راضي جداً'
    ]
  },
  {
    id: 'movie_series_feedback',
    type: 'text',
    question: 'ايه اخر فيلم او مسلسل شفته او شفت مقاطع منه؟ ايه هى اكتر حاجة خليته يعجبك او ميعجبكش؟',
    subtitle: '',
    placeholder: 'اكتب رأيك بالتفصيل...'
  },
  {
    id: 'trustworthy_bank',
    type: 'checkbox',
    question: 'في رأيك, انهى من البنوك التالية بينطبق عليها العبارة ديه',
    subtitle: 'بنك بثق فيه',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'reputable_bank',
    type: 'checkbox',
    question: 'في رأيك, انهى من البنوك التالية بينطبق عليها العبارة ديه',
    subtitle: 'بنك عريق و ليه اسم',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'customer_friendly_bank',
    type: 'checkbox',
    question: 'في رأيك, انهى من البنوك التالية بينطبق عليها العبارة ديه',
    subtitle: 'بنك مريح فى التعامل و بيهتم بالعميل',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'customer_interest_bank',
    type: 'checkbox',
    question: 'في رأيك, انهى من البنوك التالية بينطبق عليها العبارة ديه',
    subtitle: 'بنك بيهمه مصلحتي سواء فى الاستثمار او القروض',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'attractive_ads_bank',
    type: 'checkbox',
    question: 'في رأيك, انهى من البنوك التالية بينطبق عليها العبارة ديه',
    subtitle: 'بنك اعلاناته جذابة',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'modern_bank',
    type: 'checkbox',
    question: 'في رأيك, انهى من البنوك التالية بينطبق عليها العبارة ديه',
    subtitle: 'بنك عصرى و متطور',
    variant: 'image-mid',
    options: BANK_OPTIONS,
    images: BANK_IMAGES
  },
  {
    id: 'banking_factors',
    type: 'checkbox',
    question: 'إيه أكتر ثلاث عوامل مهمين بالنسبالك لما تقرر تتعامل مع بنك؟',
    subtitle: '',
    options: [
      'نسبة الفوائد',
      'توافر فروع قريبة',
      'توافر ماكينات الصرف',
      'عدم ازدحام الفروع',
      'عراقة البنك وسمعته',
      'بنك أنا بثق فيه',
      'قوة عروض التقسيط والخصومات لكروت البنك',
      'تميز خدمات الإنترنت البنكي',
      'تميز خدمة العملاء',
      'المصاريف الإدارية',
      'يكون بنك إسلامي',
      'أخرى'
    ]
  },
  {
    id: 'school_bag_items',
    type: 'checkbox',
    question: 'إيه من دول ممكن تلاقيه في شنطة طالب مدرسة ابتدائي؟',
    subtitle: '',
    options: [
      'لمبة',
      'مشبك غسيل',
      'قلم',
      'مفك'
    ]
  },
  {
    id: 'nbe_nps',
    type: 'nps',
    question: 'بناء على كل تجاربك مع البنك الأهلى المصرى، الي اي مدي ممكن ترشحه لحد من معارفك؟',
    subtitle: '(0 = اكيد مش هرشحه، 10 = اكيد هرشحه)',
    scale: { min: 0, max: 10 }
  },
  {
    id: 'nps_reasoning',
    type: 'text',
    question: 'إيه الأسباب اللي خلتك تدي التقييم ده؟',
    subtitle: '',
    placeholder: 'اكتب الأسباب بالتفصيل...'
  },
  {
    id: 'nbe_phone_service',
    type: 'scale',
    question: 'على مقياس من 1 إلى 5، إيه مدى رضاك عن البنك الأهلي المصري من حيث خدمة العملاء التليفونية؟',
    subtitle: '',
    options: [
      '1 .. غير راضي على الإطلاق',
      '2',
      '3',
      '4',
      '5 .. راضي جداً'
    ]
  },
  {
    id: 'nbe_branch_service',
    type: 'scale',
    question: 'على مقياس من 1 إلى 5، إيه مدى رضاك عن البنك الأهلي المصري من حيث خدمة العملاء بالفروع؟',
    subtitle: '',
    options: [
      '1 .. غير راضي على الإطلاق',
      '2',
      '3',
      '4',
      '5 .. راضي جداً'
    ]
  },
  {
    id: 'nbe_internet_banking',
    type: 'scale',
    question: 'على مقياس من 1 إلى 5، إيه مدى رضاك عن البنك الأهلي المصري من حيث خدمة الإنترنت البنكي (Internet Banking)؟',
    subtitle: '',
    options: [
      '1 .. غير راضي على الإطلاق',
      '2',
      '3',
      '4',
      '5 .. راضي جداً'
    ]
  }
]; 