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
  }
]; 