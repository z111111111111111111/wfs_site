export const chapterContent = {
  1: {
    title: "١. مقدمة: من أين تبدأ فعليًا",
    content: `
      <h2>المشكلة: معلومات كثيرة، تطبيق قليل</h2>
      <p>أغلب من يحاول البدء يقف عند نفس النقطة: يقرأ الكثير، يحفظ البرومبتات، ويشاهد الدروس، لكن لا يبني شيئًا. الفرق بين من يتقدم ومن يبقى مكانه هو بسيط جدًا: <strong>التطبيق الفعلي بخطوات صغيرة</strong>.</p>
      
      <h2>فكرة هذا الكتاب</h2>
      <p>نهدف هنا إلى مسار واحد واضح، نذهب فيه من الصفر وصولًا إلى أول عرض تجريبي جاهز لإرساله لعميل محتمل. لا نريدك أن تتعلم كل شيء دفعة واحدة، بل أن تتعلم ما تحتاجه فقط لخطوتك القادمة.</p>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-4">ما ستحققه بنهاية هذا الكتاب</h3>
        <ul class="space-y-2">
          <li>• تعرف على <strong>OpenCode</strong> عبر الواجهة الرسومية، وتستخدمه لبدء مشروعك.</li>
          <li>• تبني صفحة هبوط بسيطة لعرض خدمة واحدة، جاهزة للتشغيل محليًا.</li>
          <li>• تصنع عرضًا تجريبيًا (لقطات + ملف PDF) ترسله عبر الواتساب.</li>
          <li>• تكتب أول رسالة واقعية، وتبدأ أول عشر تواصلات بتركيز واضح.</li>
          <li>• تفهم الفرق بين بناء الموقع، وبناء مشروع تجاري، وكيف تبدأ بالخطوة الأولى فقط.</li>
        </ul>
      </div>
      
      <h2>ما هذا الكتاب ليس</h2>
      <ul class="space-y-2">
        <li>• <strong>ليس وعدًا بالثراء السريع:</strong> لا توجد وعود بأرباح مضمونة.</li>
        <li>• <strong>ليس كتابًا يحاول جعلك مبرمجًا كاملًا:</strong> سنركز على التوجيه والمراجعة والتطبيق، لا على حفظ كل قواعد البرمجة.</li>
        <li>• <strong>ليس طريقًا مختصرًا:</strong> هو طريق مباشر، لكن يتطلب منك أن تنفذ فعليًا مع كل فصل.</li>
      </ul>
      
      <div class="border border-border rounded-lg p-6 bg-secondary/50 my-6">
        <h3 class="text-lg font-semibold mb-2">قاعدة ذهبية</h3>
        <p><strong>التطبيق أفضل من الملاحظة.</strong> بعد كل فصل، أنجز تمرينه قبل الانتقال للفصل التالي مباشرةً.</p>
      </div>
    `,
  },
  2: {
    title: "٢. العقلية الصحيحة وسلّم الدخل",
    content: `
      <h2>الفرق بين بناء منتج وبناء خدمة</h2>
      <p>أسرع طريق لك كبداية هو بناء <strong>خدمة</strong>، وليس منتجًا مستقلًا جاهزًا للبيع لآلاف الناس. الخدمة تعني: تجد شخصًا لديه مشكلة، وتعرض عليه حلاً بسيطًا في شكل صفحة هبوط لعرضها، ويُناقش معك النطاق والسعر.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">وجه المقارنة</th>
              <th class="border border-border p-3 text-right">خدمة: صفحة لعرض خدمة</th>
              <th class="border border-border p-3 text-right">منتج رقمي مستقل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">أول عميل</td>
              <td class="border border-border p-3">يمكن الوصول إليه مباشرةً بالتواصل</td>
              <td class="border border-border p-3">غالبًا يحتاج لجذب زوار أولًا</td>
            </tr>
            <tr>
              <td class="border border-border p-3">زمن البدء</td>
              <td class="border border-border p-3">يوم أو أقل لبناء أول عرض</td>
              <td class="border border-border p-3">أطول بكثير في الغالب</td>
            </tr>
            <tr>
              <td class="border border-border p-3">التكلفة</td>
              <td class="border border-border p-3">ضئيلة جدًا، ويمكن البدء بأقل ما يمكن</td>
              <td class="border border-border p-3">قد ترتفع مع الوقت</td>
            </tr>
            <tr>
              <td class="border border-border p-3">التعقيد</td>
              <td class="border border-border p-3">بسيط ومناسب جدًا للمبتدئ</td>
              <td class="border border-border p-3">أكثر تعقيدًا في البداية</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>سلّم الدخل العملي</h2>
      <ol class="space-y-2 mr-6">
        <li><strong>الدرجة ١: خدمة سريعة</strong> – صفحة واحدة لعرض خدمة لنشاط محلي صغير.</li>
        <li><strong>الدرجة ٢: باقة واضحة</strong> – بعد أول عميل، حدد النطاق، عدد التعديلات، وما يشمله السعر وما لا يشمله.</li>
        <li><strong>الدرجة ٣: منتج خاص بك</strong> – مع الخبرة، يمكنك تحويل ما تعلمته إلى منتج رقمي مستقل كما رأينا في مثال واقعي لاحقًا.</li>
      </ol>
      
      <h2>كيف تفكر بدلًا من التحفيز الزائف</h2>
      <ul class="space-y-2">
        <li>• <strong>الانشغال ≠ التقدم:</strong> حفظ عشر برومبتات دون بناء لا يساوي بناء موقع واحد كامل.</li>
        <li>• <strong>المعرفة ≠ التطبيق:</strong> الفرق الحقيقي بين من يتقدم ومن يتوقف هو التنفيذ الفعلي.</li>
        <li>• <strong>الإعجاب ≠ طلب:</strong> إعجاب صاحب النشاط بفكرة الصفحة لا يعني أنه سيشتري، بل الاهتمام الحقيقي يظهر عندما يسألك عن السعر أو يطلب التعديل.</li>
        <li>• <strong>أول عميل أهم من الكمال:</strong> صفحة «كافية للعرض» ومرسلة أفضل بكثير من صفحة «مثالية» محبوسة في مجلدك.</li>
      </ul>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-4">تمرين عملي</h3>
        <p class="mb-4">اكتب ثلاث إجابات بصيغة واضحة:</p>
        <ol class="space-y-2 mr-6">
          <li>من سيستفيد من خدمتي بالضبط؟ (فئة واحدة فقط)</li>
          <li>ما المشكلة التي أساعده على حلها؟ (جملة واحدة)</li>
          <li>كيف سيستفيد بعد امتلاكه لهذه الصفحة؟ (نتيجة ملموسة وبسيطة)</li>
        </ol>
      </div>
    `,
  },
  3: {
    title: "٣. تجهيز بيئتك وتثبيت OpenCode",
    content: `
      <p>سنمشي في هذا الكتاب على <strong>مسار الواجهة الرسومية</strong> قدر الإمكان، لأنه الأنسب جدًا للمبتدئ ولا يتطلب خبرة سابقة بسطر الأوامر.</p>
      
      <h2>متطلبات بسيطة</h2>
      <ul class="space-y-2">
        <li>• <strong>جهاز حاسوب:</strong> يكفي جهاز متوسط المواصفات لمعظم التجارب في هذه العينة.</li>
        <li>• <strong>اتصال بالإنترنت:</strong> ضروري للتثبيت، واختيار النماذج المجانية، وتحميل ما يحتاجه التطبيق.</li>
        <li>• <strong>وقت:</strong> ٢٠ إلى ٣٠ دقيقة كحد أقصى للتثبيت لأول مرة.</li>
      </ul>
      
      <h2>خطوات التثبيت</h2>
      <ol class="space-y-2 mr-6">
        <li><strong>التحميل:</strong> اذهب إلى الموقع الرسمي لـ <strong>OpenCode</strong> وقم بتحميل إصدار سطح المكتب المناسب لنظام تشغيلك.</li>
        <li><strong>التثبيت:</strong> ثبّت التطبيق كأي برنامج عادي بالضغط على التالي حتى النهاية.</li>
        <li><strong>التشغيل:</strong> افتح التطبيق بعد التثبيت، وستظهر لك الواجهة الرسومية مباشرةً.</li>
        <li><strong>التسجيل/الدخول:</strong> اتبع ما يطلبه التطبيق حسب الخيارات المتاحة في نسختك.</li>
      </ol>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-2">نصيحة مهمة</h3>
        <p>إذا وجدت خيارًا لتثبيت أدوات إضافية ولم تفهمه، لا تضغط على «موافق الكل» بسرعة. اقرأ ما يقوله أو اسأل الوكيل عنه لاحقًا، فالأمان أفضل من الاندفاع.</p>
      </div>
      
      <h2>التحقق السريع</h2>
      <p>بعد فتح التطبيق، أنشئ محادثة جديدة، واكتب جملة بسيطة جدًا: <strong>«مرحبًا، هل تعمل؟»</strong> وإذا رد عليك الوكيل، فهذا يعني أنك جاهز للمتابعة دون أي مشكلة.</p>
      
      <div class="border border-border rounded-lg p-6 bg-secondary/50 my-6">
        <h3 class="text-lg font-semibold mb-2">ملاحظة عن النماذج المجانية</h3>
        <p>ستجد قائمة بالنماذج، ابحث دائمًا عن ما يظهر عليه وصف <strong>مجاني</strong> فعليًا. الأسماء قد تتغير مع الوقت، لذا لا تعتمد على اسم محدد، بل اعتمد على ما يظهر لك في نسختك الحالية.</p>
      </div>
    `,
  },
  4: {
    title: "٤. جولة في واجهة OpenCode الرسومية",
    content: `
      <p>لا تحاول تعلم كل شيء دفعة واحدة. ركّز فقط على العناصر التي سنستخدمها فعليًا في هذا الكتاب.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">العنصر</th>
              <th class="border border-border p-3 text-right">الغرض</th>
              <th class="border border-border p-3 text-right">ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">المحادثة (Chat)</td>
              <td class="border border-border p-3">مكان كتابة طلبك أو البرومبت وقراءة رد الوكيل</td>
              <td class="border border-border p-3">أكثر مكان ستستخدمه</td>
            </tr>
            <tr>
              <td class="border border-border p-3">الوكلاء (Agents)</td>
              <td class="border border-border p-3">مسؤولون عن تنفيذ المهام خطوة بخطوة</td>
              <td class="border border-border p-3">اترك الافتراضي عادةً يكفي للمبتدئ</td>
            </tr>
            <tr>
              <td class="border border-border p-3">النماذج (Models)</td>
              <td class="border border-border p-3">اختيار النموذج الذي سيقوم بالبناء</td>
              <td class="border border-border p-3">اختر نموذجًا مجانيًا يظهر لك فعليًا</td>
            </tr>
            <tr>
              <td class="border border-border p-3">مشروع جديد (New Project)</td>
              <td class="border border-border p-3">بدء مشروع منفصل داخل مجلد خاص به</td>
              <td class="border border-border p-3">يفضل إنشاء مشروع جديد لكل تجربة</td>
            </tr>
            <tr>
              <td class="border border-border p-3">ملفات المشروع (Files)</td>
              <td class="border border-border p-3">مشاهدة الملفات التي أنشأها أو عدّلها الوكيل</td>
              <td class="border border-border p-3">مفيد جدًا لفهم ما يحدث</td>
            </tr>
            <tr>
              <td class="border border-border p-3">التغييرات (Changes)</td>
              <td class="border border-border p-3">مراجعة ما تغير قبل الاعتماد عليه</td>
              <td class="border border-border p-3">أهم أداة للمبتدئ للحفاظ على السيطرة</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-2">نصيحة</h3>
        <p>عندما يطلب منك الوكيل <strong>إذنًا</strong> لتعديل ملف أو تشغيل أمر، توقف قليلًا، اقرأه بتركيز، وافعل فقط ما تفهمه. إن لم تفهم الغرض، اسأله شرحًا مختصرًا قبل الموافقة.</p>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-secondary/50 my-6">
        <h3 class="text-lg font-semibold mb-4">تمرين الفصل ٤</h3>
        <p class="mb-4">افعل ما يلي بالترتيب:</p>
        <ol class="space-y-2 mr-6">
          <li>أنشئ مشروعًا جديدًا داخل OpenCode</li>
          <li>اختر نموذجًا مجانيًا</li>
          <li>افتح تبويب الملفات ولاحظه</li>
          <li>افتح تبويب التغييرات وراقبه</li>
        </ol>
      </div>
    `,
  },
  5: {
    title: "٥. اختيار خدمة واحدة وعميل واحد قابل للدفع",
    content: `
      <p>قاعدة هذا الكتاب ثابتة: <strong>خدمة واحدة + صفحة واحدة + زر تواصل بارز</strong>. كلما أبسطت، زادت فرصك في إكمالها فعليًا.</p>
      
      <h2>مجالات واقعية للمبتدئ</h2>
      <p>اختر مجالًا قريبًا منك، أو تعرف فيه شخصًا، أو تجد نشاطاته بسهولة في منطقتك. لا تبحث عن أكبر سوق، ابحث عن <strong>أبسط سوق يمكنك التواصل معه اليوم</strong>.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">المجال</th>
              <th class="border border-border p-3 text-right">العميل المحتمل</th>
              <th class="border border-border p-3 text-right">الخدمة المقترحة</th>
              <th class="border border-border p-3 text-right">ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">صالونات الحلاقة والتجميل</td>
              <td class="border border-border p-3">صاحب صالون محلي</td>
              <td class="border border-border p-3">صفحة تعريفية لعرض الخدمات ومعلومات التواصل</td>
              <td class="border border-border p-3">كثيرون ما زالوا يعتمدون فقط على فيسبوك</td>
            </tr>
            <tr>
              <td class="border border-border p-3">مطاعم ومقاهي</td>
              <td class="border border-border p-3">صاحب مطعم صغير</td>
              <td class="border border-border p-3">صفحة لعرض القائمة وساعات العمل ورابط التواصل</td>
              <td class="border border-border p-3">طلب واضح وسهل الفهم</td>
            </tr>
            <tr>
              <td class="border border-border p-3">خدمات منزلية</td>
              <td class="border border-border p-3">فني سباكة/كهرباء/تنظيف</td>
              <td class="border border-border p-3">صفحة لعرض الخدمة + زر واتساب للطلب</td>
              <td class="border border-border p-3">يحتاج لظهور بسيط وسريع</td>
            </tr>
            <tr>
              <td class="border border-border p-3">مدرب رياضي / مصوّر / خياط</td>
              <td class="border border-border p-3">أفراد يعملون لحسابهم</td>
              <td class="border border-border p-3">صفحة هبوط لعرض أعمالهم وزر تواصل</td>
              <td class="border border-border p-3">مناسب جدًا لصفحة واحدة</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>اختبر فكرتك بـ«اختبار العشر ثواني»</h2>
      <p>قبل أن تبني أي شيء، اسأل نفسك هذه الأسئلة بصدق:</p>
      <ol class="space-y-2 mr-6">
        <li>لو رأى صاحب النشاط هذه الصفحة، هل يفهم الخدمة فورًا؟</li>
        <li>هل يعرف كيف يتواصل مباشرةً دون بحث طويل؟</li>
        <li>هل هذه مشكلة حقيقية له، أم مجرد تحسين شكلي؟</li>
        <li>هل يمكنني شرح العرض في جملة واحدة واضحة؟</li>
      </ol>
      
      <div class="border border-border rounded-lg p-6 bg-secondary/50 my-6">
        <h3 class="text-lg font-semibold mb-4">تمرين الفصل ٥</h3>
        <p class="mb-4">اختر <strong>مجالًا واحدًا فقط</strong>، وعبّر عن عرضك بهذه الصيغة:</p>
        <p><strong>أخدم [نوع العميل] في حل [المشكلة] عبر [الخدمة] ليحصل على [النتيجة الملموسة].</strong></p>
        <p class="mt-4">مثال: «أخدم أصحاب صالونات الحلاقة في حل مشكلة ضياع المواعيد عبر صفحة حجز بسيطة ليحصلوا على مواعيد منظمة دون مكالمات ضائعة.»</p>
      </div>
    `,
  },
  6: {
    title: "٦. الأدوات، التكاليف، وشروط الاستخدام",
    content: `
      <p>هدفنا هو أبسط ما يمكن. سنستخدم فقط ما نحتاجه فعلاً لهذه العينة.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">الأداة</th>
              <th class="border border-border p-3 text-right">الغرض</th>
              <th class="border border-border p-3 text-right">الحالة للبدء</th>
              <th class="border border-border p-3 text-right">ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">OpenCode (سطح المكتب)</td>
              <td class="border border-border p-3">بناء الموقع بالتوجيه للذكاء الاصطناعي</td>
              <td class="border border-border p-3">مجاني للبدء في أغلب الحالات</td>
              <td class="border border-border p-3">نركز على الواجهة الرسومية فقط</td>
            </tr>
            <tr>
              <td class="border border-border p-3">Next.js + TypeScript + Tailwind CSS + shadcn/ui</td>
              <td class="border border-border p-3">تقنيات لبناء صفحة نظيفة ومتجاوبة</td>
              <td class="border border-border p-3">مجاني تمامًا</td>
              <td class="border border-border p-3">سيقوم الوكيل بإعدادها لك تلقائيًا</td>
            </tr>
            <tr>
              <td class="border border-border p-3">Vercel</td>
              <td class="border border-border p-3">نشر الموقع على الإنترنت لاحقًا</td>
              <td class="border border-border p-3">خطة <strong>Hobby</strong> مجانية</td>
              <td class="border border-border p-3"><strong>هام:</strong> خطة Hobby موجهة غالبًا للاستخدام الشخصي غير التجاري. إذا كنت تنوي بناء موقع لعميل مدفوع، تحقق من شروط الاستخدام السارية قبل النشر.</td>
            </tr>
            <tr>
              <td class="border border-border p-3">النطاق (Domain)</td>
              <td class="border border-border p-3">عنوان مخصص للموقع</td>
              <td class="border border-border p-3">اختياري / مدفوع عند الشراء</td>
              <td class="border border-border p-3">غير ضروري أبدًا في هذه العينة</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-destructive/10 border-destructive/20 my-6">
        <h3 class="text-lg font-semibold mb-2 text-destructive">تنبيه صريح عن النشر التجاري</h3>
        <p>قبل نشر أي موقع لأغراض تجارية أو كخدمة مدفوعة، راجع شروط الاستخدام الرسمية لـ <strong>Vercel</strong> في تاريخك الحالي. في هذه العينة، سنكتفي بـ<strong>التشغيل المحلي</strong> ونصنع عرضًا تجريبيًا لإرساله عبر الواتساب دون نشر عام إلزامي.</p>
      </div>
      
      <h2>ما قد يكلف فعليًا</h2>
      <ul class="space-y-2">
        <li><strong>النطاق:</strong> اختياري، ويُشترى فقط إذا طلبه العميل أو قررت ذلك لاحقًا.</li>
        <li><strong>النماذج المدفوعة:</strong> بعض النماذج قد تحتاج رصيدًا، لذا ابحث دومًا عن البديل المجاني المتاح لك.</li>
        <li><strong>خدمات إضافية:</strong> تجنب إضافة أي خدمة مدفوعة في هذه المرحلة؛ كل ما تحتاجه متاح مجانًا.</li>
      </ul>
    `,
  },
  7: {
    title: "٧. كيف تفكر مع الذكاء الاصطناعي وتوجّهه بفعالية",
    content: `
      <p>الذكاء الاصطناعي أداة قوية، لكن نتائجه تعكس دقة توجيهك له. الفرق بين نتيجة مقبولة ونتيجة عملية هو طريقة الطلب.</p>
      
      <h2>حلقة العمل الصحيحة</h2>
      <ol class="space-y-2 mr-6">
        <li><strong>اطلب بوضوح</strong> – حدد ما تريد بالضبط، لا ما تريد «بشكل عام».</li>
        <li><strong>راجع بسرعة</strong> – افتح المعاينة، أو انظر الملفات، أو راجع التغييرات.</li>
        <li><strong>غيّر شيئًا واحدًا</strong> – بدلًا من إعادة البناء، اطلب تعديل عنصر واحد فقط.</li>
        <li><strong>اختبر مباشرةً</strong> – جرب على متصفحك، ويفضل أن تجرب على الهاتف إن أمكن.</li>
        <li><strong>كرر بخطوة أصغر</strong> – استمر بهذه الحلقة حتى تصل لما تريد.</li>
      </ol>
      
      <h2>طلب سيئ مقابل طلب جيد</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">طلب سيئ</th>
              <th class="border border-border p-3 text-right">طلب جيد</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">«أنشئ لي موقعًا احترافيًا جدًا»</td>
              <td class="border border-border p-3">«أنشئ صفحة هبوط لصالون حلاقة، بالعربية، متجاوبة مع الجوال، وزر واتساب واضح لرقم 213xxxxxxx»</td>
            </tr>
            <tr>
              <td class="border border-border p-3">«اجعله أجمل»</td>
              <td class="border border-border p-3">«اجعل زر «تواصل عبر واتساب» أكبر قليلًا، وأضف مسافة أكبر بينه وبين النص»</td>
            </tr>
            <tr>
              <td class="border border-border p-3">«أصلحه»</td>
              <td class="border border-border p-3">«عند تصغير الشاشة، يختفي زر التواصل خلف القائمة، أصلحه ليبقى ظاهرًا دائمًا»</td>
            </tr>
            <tr>
              <td class="border border-border p-3">«أنشئ لي كل شيء»</td>
              <td class="border border-border p-3">«أريد تعديل قسم البطل فقط: غير العنوان ليصبح أقصر وأوضح»</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-green-500/10 border-green-500/20 my-6">
        <h3 class="text-lg font-semibold mb-2 text-green-500">قاعدة ذهبية</h3>
        <p><strong>كن محددًا، لا عامًا.</strong> صف ما ترى، وما تريد تغييره، وأين تحديداً بدلاً من وصف شعور عام.</p>
      </div>
    `,
  },
  8: {
    title: "٨. البرومبت العملي السريع وبناء أول موقع",
    content: `
      <p>انسخ هذا البرومبت كاملًا والصقه مباشرةً في محادثة <strong>OpenCode</strong> عبر الواجهة الرسومية.</p>
      
      <div class="border border-border rounded-lg p-6 bg-muted/50 my-6 font-mono text-sm overflow-x-auto">
        <div class="text-xs text-muted-foreground mb-2">برومبت سريع جاهز للنسخ</div>
        <div class="whitespace-pre-wrap">أنت وكيل لبناء صفحة هبوط بسيطة لعرض خدمة واحدة فقط.

الهدف: بناء موقع نظيف، سريع، ومتجاوب مع الجوال والكمبيوتر، يقود الزائر للتواصل عبر واتساب مباشرةً.

التقنيات: Next.js + TypeScript + Tailwind CSS + shadcn/ui

متطلبات:
- المحتوى كاملًا بالعربية، اتجاه RTL
- أقسام مرتبة: البطل (عنوان واضح + زر واتساب بارز)، ما أقدم، كيف أبدأ، تواصل
- زر "تواصل عبر واتساب" واحد رئيسي، واضح جدًا
- تصميم بسيط، خفيف، سهل القراءة
- مناسب لعرض على الهاتف أولًا ثم الكمبيوتر

قواعد صارمة:
- اعمل على مشروع جديد داخل مجلد مخصص
- التزم بالخطط المجانية فقط
- افحص الملفات الموجودة قبل أي تعديل
- عند غموض أي معلومة، اسألني مباشرةً بأسئلة مرتبة وواضحة
- لا تخترع أرقام، شهادات، آراء عملاء، أو أي ادعاءات غير مؤكدة
- لا تضف تسجيل دخول، قاعدة بيانات، أو وظائف غير ضرورية
- بعد البناء، شغّل المشروع محليًا حتى أراه في المتصفح
- لا تنشره على الإنترنت الآن، فقط شغّله محليًا

ابدأ الآن واطلب بالترتيب:
1. اسم الخدمة بالضبط
2. فئة العميل المستهدف
3. رقم واتساب بصيغة صحيحة مع رمز الدولة
4. نص الزر المفضل (مثال: "تواصل عبر واتساب")</div>
      </div>
      
      <h2>خطوات التنفيذ بعد اللصق</h2>
      <ol class="space-y-2 mr-6">
        <li><strong>أجب عن الأسئلة:</strong> أجب بإجابات قصيرة وواضحة، لا تكتب رواية طويلة.</li>
        <li><strong>راقب البناء:</strong> شاهد ما يفعله الوكيل، وراجع تبويب <strong>التغييرات</strong> بين الحين والآخر.</li>
        <li><strong>انتظر التشغيل المحلي:</strong> سيقول لك إنه شغّل المشروع وأعطاك رابطًا مثل <code>http://localhost:3000</code>.</li>
        <li><strong>عاين النتيجة:</strong> افتح الرابط في متصفحك وجرب الموقع على الكمبيوتر، ثم جربه على هاتفك إن أمكن.</li>
      </ol>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-2">نصيحة</h3>
        <p>لا تطلب «أعد البناء من الصفر» عند أول تعديل بسيط. اطلب تعديل عنصر واحد فقط، وراجع التغييرات قبل الموافقة.</p>
      </div>
    `,
  },
  9: {
    title: "٩. التشغيل المحلي، التعديل، وحل المشكلات الشائعة",
    content: `
      <h2>معاينة سريعة قبل العرض</h2>
      <p>عندما ترى الرابط <code>http://localhost:3000</code>، افتحه مباشرةً وافحص ما يلي:</p>
      <ul class="space-y-2">
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">✓</span><span>أفهم الخدمة فورًا من عنوان البطل</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">✓</span><span>زر «تواصل عبر واتساب» بارز جدًا ويظهر بسهولة</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">✓</span><span>يبدو مرتبًا على الهاتف وعلى الكمبيوتر</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">✓</span><span>النص واضح، لا يوجد «Lorem ipsum» أو نص تجريبي غامض</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">✓</span><span>الضغط على زر التواصل يفتح واتساب بالرقم الصحيح</span></li>
      </ul>
      
      <h2>أخطاء شائعة وحلول عملية</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">المشكلة</th>
              <th class="border border-border p-3 text-right">السبب المحتمل</th>
              <th class="border border-border p-3 text-right">ماذا تقول للوكيل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">الرابط لا يفتح</td>
              <td class="border border-border p-3">المشروع توقف أو لم يبدأ بعد</td>
              <td class="border border-border p-3">«الرابط لا يفتح، هل المشروع ما زال يعمل؟ أعد تشغيله محليًا وأعطني الرابط مجددًا.»</td>
            </tr>
            <tr>
              <td class="border border-border p-3">شيء صغير يحتاج تغيير</td>
              <td class="border border-border p-3">تفصيل في النص أو اللون أو الحجم</td>
              <td class="border border-border p-3">«غير عنوان البطل ليصبح أقصر، فقط هذا التعديل.»</td>
            </tr>
            <tr>
              <td class="border border-border p-3">يظهر خطأ في الشاشة</td>
              <td class="border border-border p-3">خطأ أثناء التشغيل أو التعديل</td>
              <td class="border border-border p-3">«انسخ هذا الخطأ كاملًا كما يظهر وأرسله مع توضيح ما كنت أقوم به.»</td>
            </tr>
            <tr>
              <td class="border border-border p-3">يبدو مكسورًا على الهاتف</td>
              <td class="border border-border p-3">مساحة غير مناسبة أو عناصر تخرج عن الشاشة</td>
              <td class="border border-border p-3">«تحقق من التجاوب مع عرض الجوال، وأصلح فقط ما يظهر مكسورًا دون تغيير باقي الصفحة.»</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-amber-500/10 border-amber-500/20 my-6">
        <h3 class="text-lg font-semibold mb-2 text-amber-500">نصيحة ذهبية</h3>
        <p>كلما كان وصفك للمشكلة أدق وأقصر، كان الحل أسرع وأقل احتمالًا لتغيير أشياء لا تريد تغييرها.</p>
      </div>
    `,
  },
  10: {
    title: "١٠. من الموقع المحلي إلى عرض قابل للإرسال عبر الواتساب",
    content: `
      <p>نظرًا لأننا نركز على <strong>التشغيل المحلي</strong> في هذه العينة، سنصنع عرضًا تجريبيًا جاهزًا للإرسال دون الحاجة لنشر الموقع على الإنترنت فورًا.</p>
      
      <h2>طرق بسيطة وفعالة</h2>
      <ol class="space-y-2 mr-6">
        <li><strong>لقطات شاشة:</strong> خذ لقطة للجزء العلوي (البطل) مع زر التواصل، ولقطة أخرى يظهر الموقع كاملًا على الهاتف إن أمكن.</li>
        <li><strong>تسجيل شاشة قصير:</strong> سجل فيديو مدته ١٥ – ٢٠ ثانية يظهر فتح الصفحة والضغط على زر الواتساب (سيُظهر فتح التطبيق مباشرةً).</li>
        <li><strong>ملف PDF:</strong> افتح الصفحة في المتصفح، احفظها كـ <strong>PDF</strong> وأرفقها مع رسالتك.</li>
      </ol>
      
      <h2>كيف تكتب أول رسالة</h2>
      <p>اجعل رسالتك قصيرة، واضحة، وبدون مبالغة. الهدف هو إثارة الاهتمام لا بيع بالقوة.</p>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-2">قالب جاهز للتعديل</h3>
        <p class="font-mono text-sm bg-muted/50 p-4 rounded">«السلام عليكم، رأيت نشاطكم وقلت أريك نموذجًا سريعًا لصفحة بسيطة لعرض خدماتكم وتجعل الزوار يتواصلون معكم مباشرةً عبر واتساب. أرفقت لكم لقطات سريعة، لو يعجبكم أشرحها لكم بكل بساطة.»</p>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-amber-500/10 border-amber-500/20 my-6">
        <h3 class="text-lg font-semibold mb-2 text-amber-500">تحذيرات مهمة</h3>
        <ul class="space-y-2">
          <li><strong>كن صادقًا:</strong> لا تدّع أن الموقع منشور على الإنترنت، بل قل «نموذج تجريبي» أو «عرض سريع».</li>
          <li><strong>لا ترسل للجميع دفعة واحدة:</strong> أرسل مخصصًا لكل نشاط، وغيّر الجملة قليلاً لتناسبه.</li>
          <li><strong>لا تلح:</strong> إن لم يرد، لا ترسل خمس رسائل متتالية. رسالة متابعة واحدة بعد يومين كحد أقصى تكفي.</li>
        </ul>
      </div>
    `,
  },
  11: {
    title: "١١. البيع، أول عشر تواصلات، التسعير، ونطاق العمل",
    content: `
      <h2>قمع عملي جدًا</h2>
      <p>لا تفكر بـ«مئة عميل»، فكر بـ<strong>عشر رسائل مخصصة وجادة</strong>. هذا وحده كفيل بأن يضعك في مسار حقيقي.</p>
      <ol class="space-y-2 mr-6">
        <li><strong>اختيار:</strong> اختر مجالًا واحدًا فقط من الفصل الخامس.</li>
        <li><strong>البحث:</strong> ابحث عن ١٠ أنشطة حقيقية في هذا المجال (خرائط جوجل، فيسبوك، إنستغرام، أو معارف).</li>
        <li><strong>التواصل:</strong> أرسل رسالة مخصصة لكل واحد مع عرضك التجريبي.</li>
        <li><strong>المتابعة:</strong> سجل الردود، وتابع مرة واحدة فقط إن لم يرد.</li>
        <li><strong>التقييم:</strong> حلّل النتائج وعدّل رسالتك بناءً على الواقع، لا بناءً على تخمينات.</li>
      </ol>
      
      <h2>التسعير الواقعي للمبتدئ</h2>
      <p>في البداية، لا تسعّر لأعلى سعر ممكن، بل <strong>أسهل سعر لقبول أول عميل</strong> مع الحفاظ على معقولية. الأهم هو إغلاق أول معاملة حقيقية لكسب الثقة والخبرة.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">الخيار</th>
              <th class="border border-border p-3 text-right">النطاق</th>
              <th class="border border-border p-3 text-right">ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">أساسي</td>
              <td class="border border-border p-3">صفحة واحدة + زر واتساب + محتوى بسيط</td>
              <td class="border border-border p-3">مناسب جدًا لأول عميل</td>
            </tr>
            <tr>
              <td class="border border-border p-3">متوسط</td>
              <td class="border border-border p-3">صفحة واحدة + أقسام إضافية بسيطة + تعديلين</td>
              <td class="border border-border p-3">إذا طلب المزيد بوضوح</td>
            </tr>
            <tr>
              <td class="border border-border p-3">أوسع</td>
              <td class="border border-border p-3">يُحدد بعد الاتفاق، خارج النطاق الأساسي</td>
              <td class="border border-border p-3">يُحسب بشكل منفصل</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>نطاق العمل أهم من السعر</h2>
      <p>قبل الاتفاق، اجعل الأمور واضحة جدًا:</p>
      <ul class="space-y-2">
        <li><strong>ما يشمله:</strong> صفحة واحدة، زر واتساب، المحتوى المتفق عليه.</li>
        <li><strong>ما لا يشمله:</strong> نطاق، استضافة، صور احترافية، تعديلات لا نهائية، أو صفحات إضافية.</li>
        <li><strong>التعديلات:</strong> حدد عدد التعديلات المتفق عليه صراحةً.</li>
        <li><strong>التسليم:</strong> وضح كيف تسلّم العمل (ملف PDF للعرض، أو شرح لكيفية الوصول للموقع محليًا).</li>
      </ul>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-4">تمرين الفصل ١١</h3>
        <p class="mb-4">اكتب عرض سعر بسيط لخدمتك بصيغة:</p>
        <p><strong>السعر: [المبلغ] دج – يشمل: [ما يشمله] – لا يشمل: [ما لا يشمله] – تعديلات: [العدد] – تسليم: [الطريقة]</strong></p>
      </div>
    `,
  },
  12: {
    title: "١٢. دراسة حالة: مشروع مسار التعلم masarlearn.online",
    content: `
      <p>من المشاريع الواقعية التي بنيتها بنفسي هو موقع <strong>masarlearn.online</strong>، وقد تجاوز هذا المشروع <strong>أكثر من ١٤٠٠ مستخدم مدفوع</strong> حتى الآن.</p>
      
      <h2>أهم الدروس المستفادة</h2>
      <ul class="space-y-2">
        <li><strong>بدأ بفكرة واضحة:</strong> حل مشكلة حقيقية لمجموعة معينة، وليس «مشروع عام للجميع».</li>
        <li><strong>بدأ صغيرًا:</strong> لم يبدأ بمنتج كامل، بل بنسخة أولية، ثم تطور مع الوقت وبناءً على الملاحظات.</li>
        <li><strong>ركز على القيمة قبل التعقيد:</strong> قبل إضافة أي شيء، كان السؤال دائمًا: «هل هذا يفيد فعلاً؟»</li>
        <li><strong>الاستمرارية تفوق الحماس المؤقت:</strong> العمل المنتظم لأسابيع وشهور أفضل بكثير من اندفاع يوم ثم توقف طويل.</li>
        <li><strong>التعلم أثناء التنفيذ:</strong> كثير من الأمور تعلمها أثناء البناء، لا قبل أن يبدأ.</li>
      </ul>
      
      <h2>الدرس للقارئ</h2>
      <p>المغزى ليس «أن تبدأ بمشروع ضخم»، بل <strong>أن تبدأ بصفحة واحدة تحل مشكلة بسيطة لشخص واحد</strong>. ابدأ هناك، وطوّر تدريجيًا مع كل تجربة.</p>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-2">فكرة هامة</h3>
        <p>ما بدأ صغيرًا جدًا هو ما صار أكبر لاحقًا. الفرق غالبًا هو <strong>من استمر بعد أول فشل أو بعد أول رد سلبي</strong>.</p>
      </div>
    `,
  },
  13: {
    title: "١٣. أمان أساسي للمبتدئ",
    content: `
      <p>بعض الأمور بسيطة جدًا، لكن تجاهلها قد يسبب متاعب غير ضرورية. اتبع هذه النقاط منذ البداية.</p>
      
      <ul class="space-y-2">
        <li><strong>لا تشارك الأسرار:</strong> لا تلصق مفاتيح، أو رموز، أو بيانات دخول في محادثات الذكاء الاصطناعي أبدًا.</li>
        <li><strong>اعمل داخل مجلد مخصص:</strong> أنشئ مجلدًا خاصًا لمشاريعك، ولا تفتح مجلدات حساسة عن طريق الخطأ.</li>
        <li><strong>اقرأ طلبات الإذن:</strong> قبل الموافقة على أي إذن يطلبه الوكيل، اقرأه جيدًا. إن لم تفهمه، اسأله شرحًا مختصرًا.</li>
        <li><strong>احفظ نسخة احتياطية:</strong> بين الحين والآخر، انسخ مجلد مشروعك إلى مكان آخر على جهازك كنسخة احتياطية بسيطة.</li>
        <li><strong>كن حذرًا مع البيانات:</strong> لا تنشر لقطات شاشة تحتوي على بيانات عملاء حقيقية، أو أرقام حساسة، أو معلومات خاصة.</li>
        <li><strong>انتبه للنماذج المجانية:</strong> اقرأ ما يظهر لك عن سياسة الاستخدام، ولا تشارك ملفات تحتوي على معلومات خاصة بحساسية عالية.</li>
      </ul>
      
      <div class="border border-border rounded-lg p-6 bg-amber-500/10 border-amber-500/20 my-6">
        <h3 class="text-lg font-semibold mb-2 text-amber-500">ملاحظة</h3>
        <p>مواضيع أعمق مثل المصادقة، قواعد البيانات، وحماية متقدمة تُشرح بالتفصيل في النسخة الكاملة.</p>
      </div>
    `,
  },
  14: {
    title: "١٤. لماذا تشتري النسخة الكاملة؟",
    content: `
      <p>هذه العينة أعطتك كل ما تحتاجه لبدء فعلي وبناء أول عرض جاهز للإرسال. أما النسخة الكاملة فتهدف لإكمال المسار خطوة بخطوة دون ارتباك، مع تغطية المراحل التي لم تُذكر بالتفصيل هنا.</p>
      
      <h2>أبرز ما ستجده</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div class="border border-border rounded-lg p-6 bg-card">
          <h3 class="text-lg font-semibold mb-2">فهم أعمق لـ OpenCode</h3>
          <p class="text-sm text-muted-foreground">التعامل مع الوكلاء، النماذج، التوجيه الفعال، ومواجهة الأخطاء بثقة أكبر.</p>
        </div>
        <div class="border border-border rounded-lg p-6 bg-card">
          <h3 class="text-lg font-semibold mb-2">نشر الموقع خطوة بخطوة</h3>
          <p class="text-sm text-muted-foreground">شرح عملي للنشر، مع توضيح شروط الاستخدام التجاري وأفضل البدائل المناسبة.</p>
        </div>
        <div class="border border-border rounded-lg p-6 bg-card">
          <h3 class="text-lg font-semibold mb-2">Git وGitHub ببساطة</h3>
          <p class="text-sm text-muted-foreground">ما تحتاجه فعلاً لحفظ مشروعك بأمان دون مصطلحات معقدة.</p>
        </div>
        <div class="border border-border rounded-lg p-6 bg-card">
          <h3 class="text-lg font-semibold mb-2">بيع عملي أكثر تفصيلاً</h3>
          <p class="text-sm text-muted-foreground">قوالب متخصصة، تسعير ذكي، عرض احترافي، تسليم، ومتابعة فعالة.</p>
        </div>
        <div class="border border-border rounded-lg p-6 bg-card">
          <h3 class="text-lg font-semibold mb-2">برومبتات تنفيذية إضافية</h3>
          <p class="text-sm text-muted-foreground">مكتبة برومبتات جاهزة لمشاريع مختلفة قابلة للتطبيق مباشرةً.</p>
        </div>
        <div class="border border-border rounded-lg p-6 bg-card">
          <h3 class="text-lg font-semibold mb-2">أخطاء شائعة وحلولها</h3>
          <p class="text-sm text-muted-foreground">دليل أعطال عملي لتفادي الوقوع في نفس الأخطاء وتفادي ضياع الوقت.</p>
        </div>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-green-500/10 border-green-500/20 my-6">
        <h3 class="text-lg font-semibold mb-2 text-green-500">فكرة بسيطة</h3>
        <p>العينة وضعتك على أول درجات السلم. النسخة الكاملة ترافقك لباقي الدرجات مع أقل قدر ممكن من الارتباك، وتُركز على التطبيق العملي في كل خطوة.</p>
      </div>
    `,
  },
  15: {
    title: "ملحق أ: البرومبت الشامل لبناء موقع هبوط احترافي كاملًا",
    content: `
      <p>هذا البرومبت جاهز للنسخ واللصق مباشرةً في <strong>OpenCode</strong> عبر الواجهة الرسومية عند رغبتك ببناء موقع أكثر اكتمالًا بخطوات منظمة.</p>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-2">كيفية الاستخدام</h3>
        <p>انسخ البرومبت كاملًا، الصقه في محادثة جديدة، وأجب عن أسئلته خطوة بخطوة. سيبدأ بجمع المتطلبات، ويُعرض عليك ملخصًا للموافقة قبل البدء بالبرمجة.</p>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-muted/50 my-6 font-mono text-sm overflow-x-auto">
        <div class="text-xs text-muted-foreground mb-2">MASTER PROMPT - LANDING PAGE ARABIC</div>
        <div class="whitespace-pre-wrap"># البرومبت الشامل لبناء موقع هبوط احترافي

> انسخ هذا الملف كاملًا وابدأ المحادثة به. لا تبدأ بالكتابة قبل جمع المتطلبات والموافقة على موجز المشروع.

## الدور
أنت فريق متكامل: مستشار منتجات، مصمم UI/UX، مهندس Frontend خبير بـ Next.js + React + TypeScript + Tailwind CSS + shadcn/ui، وكاتب محتوى تسويقي دقيق.

## القواعد الصارمة
- لا تبدأ بالكود قبل جمع المتطلبات والموافقة على موجز المشروع
- افحص الملفات الموجودة قبل أي تعديل
- لا تخترع أرقام، شهادات، آراء عملاء، أو ادعاءات غير مؤكدة
- التزم بـ فقط عند الحاجة
- لا تضع مفاتيح أو أسرار في الكود
- اعمل بالعربية، واتجاه RTL عند الحاجة
- اجعل التصميم متجاوبًا مع الهاتف والكمبيوتر أولًا
- عند الغموض، اسأل بأسئلة مرتبة وواقعية
- ركّز على خدمة واحدة، صفحة واحدة، وزر تواصل بارز
- لا تضف تسجيل دخول أو قاعدة بيانات إلا إذا كان ضروريًا جدًا ومبررًا

## مراحل العمل
1. جمع المتطلبات عبر أسئلة منظمة
2. تلخيص الفهم وعرض موجز المشروع لطلب الموافقة
3. اقتراح هيكل وأقسام مناسبة للهدف الفعلي
4. بناء موقع نظيف بنظام مكونات متناسق
5. تنفيذ فعلي داخل ملفات المشروع
6. فحص التجاوب والروابط وأزرار التواصل
7. تشغيل محليًا ومراجعة نهائية قبل التسليم

## متطلبات الإخراج
- عنوان واضح يشرح الخدمة فورًا
- زر دعوة للعمل بارز (واتساب أو تواصل مباشر)
- أقسام: البطل، ما أقدم، كيف أبدأ، تواصل، تذييل
- محتوى واقعي خالٍ من نصوص تجريبية
- تصميم نظيف، سريع، وسهل القراءة
- جاهز للتشغيل محليًا

ابدأ الآن بالمرحلة الأولى: اعرض نموذج الأسئلة فقط، دون كتابة أي كود.</div>
      </div>
    `,
  },
  16: {
    title: "ملحق ب: قوالب رسائل للتواصل مع العملاء",
    content: `
      <h2>١) رسالة أولى قصيرة جدًا</h2>
      <div class="border border-border rounded-lg p-4 bg-muted/50 my-4 font-mono text-sm">
        «السلام عليكم، رأيت نشاطكم وقلت أريك نموذجًا سريعًا لصفحة بسيطة لعرض خدماتكم وتجعل الزوار يتواصلون معكم مباشرةً عبر واتساب. هل يهمكم رؤيته؟»
      </div>
      
      <h2>٢) رسالة مع عرض تجريبي مرفق</h2>
      <div class="border border-border rounded-lg p-4 bg-muted/50 my-4 font-mono text-sm">
        «السلام عليكم، كما وعدتكم، أرفقت لقطات سريعة لنموذج صفحة يمكن تعديله حسب احتياجاتكم. لو فيه ملاحظات أعدلها مباشرةً.»
      </div>
      
      <h2>٣) متابعة مهذبة بعد يومين</h2>
      <div class="border border-border rounded-lg p-4 bg-muted/50 my-4 font-mono text-sm">
        «السلام عليكم، فقط أذكر العرض السابق، إن مازال يهمكم أرسل التفاصيل بكل سهولة بدون أي التزام.»
      </div>
      
      <h2>٤) رد على «سأفكر»</h2>
      <div class="border border-border rounded-lg p-4 bg-muted/50 my-4 font-mono text-sm">
        «ماشي الحال، لو في شي تعديل أو استفسار أنا جاهز. بارك الله فيكم.»
      </div>
      
      <h2>٥) عند الاهتمام فعليًا</h2>
      <div class="border border-border rounded-lg p-4 bg-muted/50 my-4 font-mono text-sm">
        «ممتاز، نبدأ مباشرةً. نحدد النطاق بوضوح، وعدد التعديلات، والسعر المتفق عليه، ثم نبدأ العمل.»
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-2">نصيحة</h3>
        <p>اجعل رسالتك <strong>أقصر ما يمكن</strong>. كلما كانت أطول، قل احتمال الرد. خصّص الجملة الأولى حسب النشاط قدر الإمكان.</p>
      </div>
    `,
  },
  17: {
    title: "ملحق ج: مسرد مصطلحات مبسط",
    content: `
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">المصطلح</th>
              <th class="border border-border p-3 text-right">شرح مبسط</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3"><strong>Agent / وكيل</strong></td>
              <td class="border border-border p-3">مساعد ذكي ينفذ ما تطلبه خطوة بخطوة داخل مشروعك</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Prompt / برومبت</strong></td>
              <td class="border border-border p-3">طلبك أو توجيهك للوكيل ليفهم ما تريد بالضبط</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Localhost</strong></td>
              <td class="border border-border p-3">رابط محلي لعرض مشروعك على جهازك فقط، لا يمكن إرساله لأحد</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Dev Server / خادم التطوير</strong></td>
              <td class="border border-border p-3">خادم مؤقت لتشغيل الموقع محليًا أثناء البناء والتعديل</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Landing Page / صفحة هبوط</strong></td>
              <td class="border border-border p-3">صفحة واحدة موجهة لعرض خدمة ودعوة الزائر للتواصل</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>CTA / دعوة لإجراء</strong></td>
              <td class="border border-border p-3">زر أو رابط يدعو الزائر لاتخاذ خطوة (مثل «تواصل عبر واتساب»)</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>RTL</strong></td>
              <td class="border border-border p-3">اتجاه الكتابة من اليمين إلى اليسار، مناسب للعربية</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Responsive / متجاوب</strong></td>
              <td class="border border-border p-3">يتكيف الموقع مع أحجام الشاشات المختلفة (جوال، كمبيوتر)</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Next.js / Tailwind CSS / shadcn/ui</strong></td>
              <td class="border border-border p-3">أدوات لبناء موقع سريع، نظيف، ومنسّق</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Deploy / نشر</strong></td>
              <td class="border border-border p-3">رفع الموقع ليصبح متاحًا على الإنترنت برابط عام</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  18: {
    title: "ملحق د: قوائم التحقق وورقة تتبع العملاء",
    content: `
      <h2>قائمة تحقق قبل إرسال العرض</h2>
      <ul class="space-y-2">
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">☐</span><span>الموقع يعمل محليًا ويظهر بشكل سليم</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">☐</span><span>زر الواتساب يؤدي للرقم الصحيح</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">☐</span><span>العنوان يشرح الخدمة فورًا</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">☐</span><span>يبدو جيدًا على الهاتف وعلى الكمبيوتر</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">☐</span><span>لا يوجد نص تجريبي أو محتوى وهمي</span></li>
        <li class="flex items-center gap-2"><span class="w-5 h-5 border border-border rounded flex items-center justify-center text-sm">☐</span><span>أعددت لقطات شاشة أو ملف PDF جاهز للإرسال</span></li>
      </ul>
      
      <h2 class="mt-8">ورقة تتبع العملاء</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">الاسم / النشاط</th>
              <th class="border border-border p-3 text-right">جهة الاتصال</th>
              <th class="border border-border p-3 text-right">تاريخ التواصل</th>
              <th class="border border-border p-3 text-right">الحالة</th>
              <th class="border border-border p-3 text-right">متابعة؟</th>
              <th class="border border-border p-3 text-right">ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">أرسلت / رد / مهتم / لا</td>
              <td class="border border-border p-3">نعم / لا</td>
              <td class="border border-border p-3">&nbsp;</td>
            </tr>
            <tr>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
            </tr>
            <tr>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
            </tr>
            <tr>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
            </tr>
            <tr>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
              <td class="border border-border p-3">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  19: {
    title: "خاتمة: خطة سبعة أيام للبدء الفعلي",
    content: `
      <p>لا تنتظر الكمال. اختر خطة بسيطة وطبقها يومًا بيوم.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-border">
          <thead class="bg-secondary">
            <tr>
              <th class="border border-border p-3 text-right">اليوم</th>
              <th class="border border-border p-3 text-right">المهمة</th>
              <th class="border border-border p-3 text-right">الهدف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">اليوم ١</td>
              <td class="border border-border p-3">اقرأ الفصول ١ – ٢</td>
              <td class="border border-border p-3">فهم العقلية وسلّم الدخل</td>
            </tr>
            <tr>
              <td class="border border-border p-3">اليوم ٢</td>
              <td class="border border-border p-3">ثبّت OpenCode، واختبره، وتعرف على الواجهة</td>
              <td class="border border-border p-3">بيئة جاهزة للعمل</td>
            </tr>
            <tr>
              <td class="border border-border p-3">اليوم ٣</td>
              <td class="border border-border p-3">اختر خدمة + عميل + اكتب جملة عرض واضحة</td>
              <td class="border border-border p-3">فكرة مركزة جدًا</td>
            </tr>
            <tr>
              <td class="border border-border p-3">اليوم ٤</td>
              <td class="border border-border p-3">الصق البرومبت، أجب عن الأسئلة، وابنِ الموقع محليًا</td>
              <td class="border border-border p-3">أول موقع يعمل</td>
            </tr>
            <tr>
              <td class="border border-border p-3">اليوم ٥</td>
              <td class="border border-border p-3">عدّل، جرب على الجوال، اختبر زر الواتساب</td>
              <td class="border border-border p-3">جاهز للعرض التجريبي</td>
            </tr>
            <tr>
              <td class="border border-border p-3">اليوم ٦</td>
              <td class="border border-border p-3">اصنع لقطات، أو ملف PDF، وجهّز رسالتك</td>
              <td class="border border-border p-3">عرض جاهز للإرسال</td>
            </tr>
            <tr>
              <td class="border border-border p-3">اليوم ٧</td>
              <td class="border border-border p-3">أرسل ٥ – ١٠ رسائل مخصصة وسجّلها في الورقة</td>
              <td class="border border-border p-3">أول تواصلات حقيقية</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-green-500/10 border-green-500/20 my-6">
        <h3 class="text-lg font-semibold mb-2 text-green-500">أهم ما يجب تذكره</h3>
        <p><strong>البداية القوية هي البداية الفعلية.</strong> لا تنتظر الظروف المثالية، بل نفّذ أول خطوة الآن. كل يوم تطبيق أفضل من أسبوع قراءة دون تنفيذ.</p>
      </div>
      
      <hr class="border-border my-8" />
      <p class="text-center text-2xl font-bold my-4">ومن الصفر تقدر توصل</p>
      <p class="text-center text-muted-foreground">كتاب عملي متكامل ومكتمل</p>
    `,
  },
  20: {
    title: "ملحق هـ: البرومبت الشامل لبناء موقع احترافي كاملًا - تجربة عملية",
    content: `
      <p>انسخ هذا البرومبت كاملًا والصقه مباشرةً في محادثة OpenCode عبر الواجهة الرسومية عند رغبتك ببناء موقع أكثر اكتمالًا بخطوات منظمة.</p>
      
      <div class="border border-border rounded-lg p-6 bg-card my-6">
        <h3 class="text-lg font-semibold mb-2">كيفية الاستخدام</h3>
        <p>انسخ البرومبت كاملًا كما هو، الصقه في محادثة جديدة، وأجب عن أسئلته خطوة بخطوة. سيبدأ بجمع المتطلبات، ويُعرض عليك ملخصًا للموافقة قبل البدء بالبرمجة. لا تحذف التعليمات المتعلقة بالأسئلة أو الفحص أو الاختبار؛ فهي جزء أساسي من جودة النتيجة.</p>
      </div>
      
      <div class="border border-border rounded-lg p-6 bg-muted/50 my-6 font-mono text-sm overflow-x-auto">
        <div class="text-xs text-muted-foreground mb-2">MASTER_PROMPT_LANDING_PAGE_AR</div>
        <div class="whitespace-pre-wrap"># البرومت الرئيسي لبناء موقع احترافي كامل انطلاقًا من فكرتي

> **طريقة الاستخدام:** انسخ هذا الملف كاملًا إلى وكيل برمجي قادر على قراءة الملفات وتعديلها وتشغيل الأوامر داخل المشروع، مثل OpenCode أو أي وكيل برمجي مشابه. ابدأ المحادثة به، ثم أجب عن أسئلته. لا تحذف التعليمات المتعلقة بالأسئلة أو الفحص أو الاختبار؛ فهي جزء أساسي من جودة النتيجة.

---

## 1. دورك ومهمتك الأساسية

أريدك أن تعمل بوصفك فريقًا متكاملًا يضم الأدوار التالية:

- مستشار منتجات يساعدني على تحويل فكرتي إلى عرض واضح ومفهوم.
- باحث تجربة مستخدم (UX Researcher) يفهم الجمهور واحتياجاته والعقبات التي تمنعه من اتخاذ القرار.
- مصمم واجهات وتجربة مستخدم (UI/UX Designer) لديه ذائقة تصميمية عالية ومعايير جودة احترافية.
- مهندس واجهات أمامية خبير في Next.js وReact وTypeScript وTailwind CSS وshadcn/ui.
- مهندس برمجيات يهتم بجودة البنية، وسهولة الصيانة، والأمان، والأداء.
- كاتب محتوى تسويقي وتقني يصيغ نصوصًا واضحة ومقنعة من دون مبالغة أو ادعاءات غير مثبتة.
- مختبر جودة يتحقق من أن الموقع يعمل فعلًا، لا أنه يبدو جميلًا في صورة فقط.

**المهمة النهائية:** فهم فكرتي من خلال أسئلة منظمة، ثم تخطيط وبناء موقع متكامل قدر الإمكان، بتصميم مميز ومريح للعين وسهل القراءة، وبتنفيذ حقيقي داخل ملفات المشروع، لا الاكتفاء باقتراحات أو مخطط أو نموذج شكلي.

قد يكون المطلوب صفحة هبوط واحدة، أو موقعًا تسويقيًا متعدد الصفحات، أو واجهة لمنتج رقمي أو SaaS أو متجر أو خدمة. لا تفترض نوع المشروع؛ دعه يتحدد من إجاباتي.

---

## 2. القواعد الصارمة (لا تخالفها أبدًا)

1. **لا تبدأ بالكود قبل جمع المتطلبات والموافقة على موجز المشروع.**
2. **افحص الملفات الموجودة** قبل أي تعديل أو إضافة.
3. **لا تخترع أرقامًا، إحصائيات، شهادات، آراء عملاء، أو أي ادعاءات غير مؤكدة.** إذا احتجت بيانات حقيقية، اطلبها مني.
4. **التزم بـ npm فقط** عند الحاجة لإدارة الحزم.
5. **لا تضع مفاتيح API، أسرار، أو بيانات حساسة** في الكود أبدًا.
6. **اعمل بالعربية، واتجاه RTL** عند الحاجة.
7. **اجعل التصميم متجاوبًا مع الهاتف والكمبيوتر أولًا** (mobile-first).
8. **عند الغموض، اسأل بأسئلة مرتبة وواقعية** — لا تفترض.
9. **ركّز على خدمة واحدة، صفحة واحدة، وزر تواصل بارز** ما لم أطلب غير ذلك صراحة.
10. **لا تضف تسجيل دخول، قاعدة بيانات، أو وظائف خلفية معقدة** إلا إذا كان ضروريًا جدًا ومبررًا بطلب صريح مني.
11. **الجودة على السرعة:** كود نظيف، مكونات قابلة لإعادة الاستخدام، وتعليقات توضيحية حيث يلزم.
12. **اختبر فعليًا** في المتصفح (تشغيل محلي، فحص كونسول، تجاوب، أزرار تواصل) قبل إعلان الانتهاء.

---

## 3. مراحل العمل بالترتيب

### المرحلة 1: جمع المتطلبات (أسئلة منظمة)
- اسألني الأسئلة اللازمة واحدة تلو الأخرى أو في مجموعات منطقية.
- غطِ: نوع المشروع، الجمهور المستهدف، الخدمة/المنتج، الميزة التنافسية، الألوان/الطابع البصري، المحتوى الجاهز، الأصول (صور/شعار)، زر CTA المستهدف، الصفحات المطلوبة، وأي متطلبات خاصة.
- لا تنتقل للمرحلة التالية إلا بعد موافقتي على أن الأسئلة كافية.

### المرحلة 2: موجز المشروع (للاعتماد)
- لخص فهمك في مستند موجز يتضمن: الهدف، الجمهور، الهيكل المقترح، التقنيات، ونطاق العمل.
- اطلب موافقتي الصريحة قبل البدء بالبناء.

### المرحلة 3: التخطيط الهيكلي
- اقترح هيكل المجلدات، نظام المكونات، وأسماء الصفحات/المكونات.
- حدد استراتيجية التنسيق (Design System): الألوان، الخطوط، المسافات، الظلال، نصف القطر.

### المرحلة 4: البناء الفعلي (داخل ملفات المشروع)
- نفّذ المكونات والصفحات داخل المشروع الفعلي.
- ابدأ بالأساسيات (Layout، Navbar، Footer)، ثم الأقسام بالترتيب.
- راجع التغييرات (Changes tab) بين الحين والآخر.

### المرحلة 5: فحص الجودة والتجاوب
- شغّل المشروع محليًا (`npm run dev`).
- افحص على عرض الجوال (375px) والكمبيوتر (1440px).
- تحقق من: أزرار CTA، روابط واتساب، نماذج، صور، خطوط، تباين الألوان، أداء التمرير.
- أصلح أي شيء مكسور دون إعادة بناء كامل.

### المرحلة 6: المراجعة النهائية والتسليم
- قدم لي ملخصًا بما بُني، وكيف تشغّله، وأين تجد الملفات الرئيسية.
- تأكد أن الموقع يعمل بـ `npm dev` دون أخطاء في الكونسول.

---

## 4. متطلبات الإخراج الدنيا (Definition of Done)

- ✅ صفحة/صفحات عاملة محليًا بلا أخطاء كونسول.
- ✅ تصميم متجاوب (mobile-first) يظهر بشكل سليم على 375px و 1440px.
- ✅ محتوى عربي حقيقي (لا نصوص Lorem ipsum).
- ✅ زر CTA بارز وواضح (واتساب/تواصل) يعمل بالرقم/الرابط الصحيح.
- ✅ كود منظم: مكونات منفصلة، تسمية واضحة، تعليقات عند اللزوم.
- ✅ لا مفاتيح/أسرار في الكود.
- ✅ جاهز للنسخ/النقل لمشروع العميل أو للنشر لاحقًا.

---

## 5. ملاحظة هامة للوكيل

إذا طلبت مني معلومات ولم أُجِب، أو إذا كان الجواب «لا أعرف» أو «قرّر أنت»، فاقترح خيارًا افتراضيًا معقولًا واطلب موافقتي قبل التنفيذ. لا تترك قرارات تصميمية أو محتوية جوهرية دون موافقة.

---

**ابدأ الآن بالمرحلة 1: اطرح عليَّ نموذج الأسئلة المنظم لجمع المتطلبات.**</div>
      </div>
    `,
  },
};