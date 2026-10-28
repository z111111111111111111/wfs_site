import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuyPaidBook } from "@/components/buy-paid-book";

const chapters = [
  { id: 1, title: "مقدمة: من أين تبدأ فعليًا", number: "١" },
  { id: 2, title: "العقلية الصحيحة وسلّم الدخل", number: "٢" },
  { id: 3, title: "تجهيز بيئتك وتثبيت OpenCode", number: "٣" },
  { id: 4, title: "جولة في واجهة OpenCode الرسومية", number: "٤" },
  { id: 5, title: "اختيار خدمة واحدة وعميل واحد قابل للدفع", number: "٥" },
  { id: 6, title: "الأدوات، التكاليف، وشروط الاستخدام", number: "٦" },
  { id: 7, title: "كيف تفكر مع الذكاء الاصطناعي وتوجّهه بفعالية", number: "٧" },
  { id: 8, title: "البرومبت العملي السريع وبناء أول موقع", number: "٨" },
  { id: 9, title: "التشغيل المحلي، التعديل، وحل المشكلات الشائعة", number: "٩" },
  { id: 10, title: "من الموقع المحلي إلى عرض قابل للإرسال عبر الواتساب", number: "١٠" },
  { id: 11, title: "البيع، أول عشر تواصلات، التسعير، ونطاق العمل", number: "١١" },
  { id: 12, title: "دراسة حالة: مشروع مسار التعلم masarlearn.online", number: "١٢" },
  { id: 13, title: "أمان أساسي للمبتدئ", number: "١٣" },
  { id: 14, title: "لماذا تشتري النسخة الكاملة؟", number: "١٤" },
];

const appendices = [
  { id: "a", title: "البرومبت الشامل لبناء موقع هبوط احترافي", number: "أ" },
  { id: "b", title: "قوالب رسائل للتواصل مع العملاء", number: "ب" },
  { id: "c", title: "مسرد مصطلحات مبسط", number: "ج" },
  { id: "d", title: "قوائم التحقق وورقة تتبع العملاء", number: "د" },
];

export default function BookPage() {
  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-border sticky top-0 bg-black/95 backdrop-blur z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowRight className="h-4 w-4 ml-2" />
                الرئيسية
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-white" />
              <span className="font-semibold">ومن الصفر تقدر توصل</span>
            </div>
          </div>
          <Button asChild size="sm" variant="outline">
            <Link href="/">الرئيسية</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">
              قراءة الكتاب
            </h1>
            <p className="text-lg text-gray-400">
              دليل عملي لبناء أول موقع لعرض خدمة
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">الفصول</span>
            </h2>
            <div className="grid gap-2">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  href={`/book/chapter/${chapter.id}`}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-gray-600 transition-colors group"
                >
                  <span className="text-lg font-semibold text-white w-8 text-center">
                    {chapter.number}
                  </span>
                  <span className="flex-1 text-gray-300 group-hover:text-white transition-colors">
                    {chapter.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">الملاحق</span>
            </h2>
            <div className="grid gap-2">
              {appendices.map((appendix) => (
                <Link
                  key={appendix.id}
                  href={`/book/appendix/${appendix.id}`}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-gray-600 transition-colors group"
                >
                  <span className="text-lg font-semibold text-white w-8 text-center">
                    {appendix.number}
                  </span>
                  <span className="flex-1 text-gray-300 group-hover:text-white transition-colors">
                    {appendix.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </Link>
              ))}
              <Link
                href="/book/appendix/h"
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-gray-600 transition-colors group"
              >
                <span className="text-lg font-semibold text-white w-8 text-center">
                  هـ
                </span>
                <span className="flex-1 text-gray-300 group-hover:text-white transition-colors">
                  البرومبت الشامل (الملحق هـ)
                </span>
                <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">مقارنة بين النسخة المجانية والباقة الأساسية</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-card">
                    <th className="border border-border p-3 text-right font-semibold">الميزة</th>
                    <th className="border border-border p-3 text-center font-semibold">النسخة المجانية (هذه العينة)</th>
                    <th className="border border-border p-3 text-center font-semibold" style={{ background: 'linear-gradient(90deg, #1a1a1a 0%, #0a0a0a 100%)', color: 'white' }}>الباقة الأساسية <br /> ٢٠٠٠ دج</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">مسار بناء أول عرض لخدمة واحدة</strong></td>
                    <td className="border border-border p-3 text-center">✓ أساسي</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ مفصّل خطوة بخطوة + أمثلة تطبيقية</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">التوجيه بالأسئلة ومتابعة شاملة</strong></td>
                    <td className="border border-border p-3 text-center text-gray-500">✗ غير متوفر</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ شامل في كل مرحلة مع توجيه عملي</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">برومبتات جاهزة للتطبيق الفعلي</strong></td>
                    <td className="border border-border p-3 text-center">✓ برومبت سريع فقط</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ مجموعة برومبتات مخصصة ومُحسّنة</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">قوالب الرسائل، التسعير، ونطاق العمل</strong></td>
                    <td className="border border-border p-3 text-center">✓ مختصر</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ كامل، جاهز للتعديل مباشرة مع العملاء</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">التشغيل المحلي، العرض عبر الواتساب</strong></td>
                    <td className="border border-border p-3 text-center">✓ موجود</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ مع أمثلة واقعية وتطبيقات أكثر تفصيلاً</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">نشر الموقع وشروط الاستخدام</strong></td>
                    <td className="border border-border p-3 text-center">✓ تنبيه عام</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ شرح عملي مفصّل + بدائل آمنة</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">Git وGitHub للمبتدئ</strong></td>
                    <td className="border border-border p-3 text-center text-gray-500">✗ غير متوفر</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ شرح مبسط جداً + خطوات عملية</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">أخطاء شائعة وحلولها + تصحيح سريع</strong></td>
                    <td className="border border-border p-3 text-center">✓ بسيط</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ دليل شامل لأكثر الأخطاء مع حلول جاهزة</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">متابعة حتى أول تواصل حقيقي</strong></td>
                    <td className="border border-border p-3 text-center text-gray-500">✗ غير متوفر</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ توجيه مباشر + مراجعة عملية لكل خطوة</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong className="text-white">التركيز الكامل على التطبيق</strong></td>
                    <td className="border border-border p-3 text-center">✓ جيد</td>
                    <td className="border border-border p-3 text-center font-semibold text-white">✓ أقصى تركيز + مهام عملية بعد كل درس</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card mb-8">
              <h3 className="text-lg font-semibold mb-2 text-white">ملاحظة صادقة</h3>
              <p className="text-gray-400">
                الهدف ليس جمع معلومات أكثر، بل تحويل ما تعلمته إلى <strong className="text-white">أول عرض فعلي</strong> ترسله لعميل محتمل. الباقة الأساسية مصممة خصيصًا لهذا الهدف، مع أسئلة، متابعة، وتفاصيل تغطي كل ما تحتاجه للوصول لأول تواصل حقيقي.
              </p>
            </div>

            <BuyPaidBook variant="book" />
          </section>
        </div>
      </main>
    </div>
  );
}
