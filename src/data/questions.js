export const surveyQuestions = [
  {
    id: 0,
    type: 'dropdown',
    question: 'المحافظة؟',
    subtitle: '',
    options: [
      'القاهرة',
      'الجيزة',
      'الإسكندرية',
      'الدقهلية',
      'البحيرة',
      'المنوفية',
      'الغربية',
      'الشرقية',
      'كفر الشيخ',
      'دمياط',
      'بورسعيد',
      'الإسماعيلية',
      'السويس',
      'شمال سيناء',
      'جنوب سيناء',
      'مطروح',
      'البحر الأحمر',
      'الوادي الجديد',
      'الفيوم',
      'بني سويف',
      'المنيا',
      'أسيوط',
      'سوهاج',
      'قنا',
      'الأقصر',
      'أسوان'
    ]
  },
  {
    id: 1,
    type: 'short-text',
    question: 'الاسم',
    subtitle: '',
    placeholder: 'اكتب اسمك هنا...'
  },
  {
    id: 2,
    type: 'numeric',
    question: 'العمر',
    subtitle: '',
    placeholder: 'أدخل عمرك...'
  },
  {
    id: 3,
    type: 'radio',
    question: 'ما هي شبكة هاتفك؟',
    subtitle: '',
    options: [
      'فودافون',
      'اتصالات',
      'وي',
      'أورنج'
    ],
    images: [
      '/images/logos/vodafone.svg',
      '/images/logos/etisalat.png',
      '/images/logos/we.png',
      '/images/logos/orange.png'
    ]
  },
  {
    id: 4,
    type: 'checkbox',
    question: 'ما هي الشبكات التي استخدمتها من قبل؟',
    subtitle: '(يمكنك اختيار أكثر من شبكة)',
    options: [
      'فودافون',
      'اتصالات',
      'وي',
      'أورنج'
    ],
    images: [
      '/images/logos/vodafone.svg',
      '/images/logos/etisalat.png',
      '/images/logos/we.png',
      '/images/logos/orange.png'
    ]
  },
  {
    id: 5,
    type: 'radio',
    question: 'أي من هذه الشعارات تفضل أكثر؟',
    subtitle: 'انظر بعناية للتفاصيل واختر الأفضل',
    variant: 'image-focused',
    options: [
      'فودافون',
      'اتصالات',
      'وي',
      'أورنج'
    ],
    images: [
      '/images/logos/vodafone.svg',
      '/images/logos/etisalat.png',
      '/images/logos/we.png',
      '/images/logos/orange.png'
    ]
  },
  {
    id: 'test-v2',
    type: 'checkbox',
    question: 'ما هي الشبكات التي تستخدمها حاليًا؟ (نسخة تجريبية)',
    subtitle: '(يمكنك اختيار أكثر من شبكة واستخدام أيقونة التكبير لمزيد من التفاصيل)',
    variant: 'image-mid-v2',
    options: [
      'فودافون',
      'اتصالات',
      'وي',
      'أورنج'
    ],
    images: [
      '/images/logos/vodafone.svg',
      '/images/logos/etisalat.png',
      '/images/logos/we.png',
      '/images/logos/orange.png'
    ]
  },
  {
    id: 6,
    type: 'nps',
    question: 'ما مدى احتمالية أن توصي أصدقائك باستخدام خدمات فودافون؟',
    subtitle: '(0 = غير محتمل إطلاقًا، 10 = محتمل جدًا)',
    scale: { min: 0, max: 10 }
  },
  {
    id: 7,
    type: 'scale',
    question: 'كيف تقيم جودة خدمة العملاء في فودافون؟',
    subtitle: '',
    options: [
      'ضعيف جدًا',
      'ضعيف',
      'متوسط',
      'جيد',
      'ممتاز'
    ]
  },
  {
    id: 8,
    type: 'multi-text',
    question: 'ما هي المميزات التي تود رؤيتها في خدمات فودافون مستقبلاً؟',
    subtitle: '(يمكنك كتابة أكثر من إجابة)',
        placeholder: 'اكتب إجابتك هنا ...'
  },
  {
    id: 9,
    type: 'grid',
    question: 'ما مدى رضاك عن الجوانب التالية من خدمات فودافون؟',
    subtitle: '',
    rows: [
      'سرعة الإنترنت',
      'تغطية الشبكة',
      'أسعار الباقات'
    ],
    columns: [
      'غير راضٍ',
      'محايد',
      'راضٍ'
    ]
  },
  {
    id: 10,
    type: 'slider',
    question: 'على مقياس من 0 إلى 5، ما مدى رضاك العام عن فودافون؟',
    subtitle: '',
    scale: { min: 0, max: 5 }
  },
  {
    id: 11,
    type: 'ranking',
    question: 'رتب هذه المميزات من الأهم إلى الأقل أهمية بالنسبة لك:',
    subtitle: '',
    options: [
      'السعر المناسب',
      'سرعة الإنترنت',
      'خدمة العملاء',
      'العروض والتخفيضات'
    ]
  }
]; 