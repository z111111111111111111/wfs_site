import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuyPaidBook } from "@/components/buy-paid-book";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-white" />
            <span className="text-lg font-semibold">ومن الصفر تقدر توصل</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/book" className="text-sm text-muted-foreground hover:text-white transition-colors">
              اقرأ الكتاب
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">
              ومن الصفر تقدر توصل
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              دليل عملي من الفكرة إلى بناء أول موقع لعرض خدمة، وإنشاء عرض تجريبي، والتواصل مع عميل محتمل
            </p>
            <p className="text-sm text-gray-500 mb-10">
              لا توجد وعود بأرباح مضمونة • النتائج تختلف من شخص لآخر
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                <Link href="/book">
                  ابدأ القراءة
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">
              ماذا ستنجز؟
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "بناء صفحة هبوط بسيطة لعرض خدمة واحدة",
                "تشغيل الموقع محليًا على جهازك",
                "إعداد عرض تجريبي جاهز للإرسال عبر الواتساب",
                "كتابة رسائل تواصل واقعية مع العملاء المحتملين",
                "تسجيل وتتبع العملاء المحتملين والمتابعات",
                "التسعير ونطاق العمل بوضوح",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-gray-600 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">
              مقارنة بين النسخة المجانية والباقة الأساسية
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-card">
                    <th className="border border-border p-4 text-right font-semibold">الميزة</th>
                    <th className="border border-border p-4 text-center font-semibold">النسخة المجانية (هذه العينة)</th>
                    <th className="border border-border p-4 text-center font-semibold" style={{ background: 'linear-gradient(90deg, #1a1a1a 0%, #0a0a0a 100%)', color: 'white' }}>الباقة الأساسية <br /> ٢٠٠٠ دج</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">مسار بناء أول عرض لخدمة واحدة</strong></td>
                    <td className="border border-border p-4 text-center">✓ أساسي</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ مفصّل خطوة بخطوة + أمثلة تطبيقية</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">التوجيه بالأسئلة ومتابعة شاملة</strong></td>
                    <td className="border border-border p-4 text-center text-gray-500">✗ غير متوفر</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ شامل في كل مرحلة مع توجيه عملي</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">برومبتات جاهزة للتطبيق الفعلي</strong></td>
                    <td className="border border-border p-4 text-center">✓ برومبت سريع فقط</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ مجموعة برومبتات مخصصة ومُحسّنة</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">قوالب الرسائل، التسعير، ونطاق العمل</strong></td>
                    <td className="border border-border p-4 text-center">✓ مختصر</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ كامل، جاهز للتعديل مباشرة مع العملاء</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">التشغيل المحلي، العرض عبر الواتساب</strong></td>
                    <td className="border border-border p-4 text-center">✓ موجود</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ مع أمثلة واقعية وتطبيقات أكثر تفصيلاً</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">نشر الموقع وشروط الاستخدام</strong></td>
                    <td className="border border-border p-4 text-center">✓ تنبيه عام</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ شرح عملي مفصّل + بدائل آمنة</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">Git وGitHub للمبتدئ</strong></td>
                    <td className="border border-border p-4 text-center text-gray-500">✗ غير متوفر</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ شرح مبسط جداً + خطوات عملية</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">أخطاء شائعة وحلولها + تصحيح سريع</strong></td>
                    <td className="border border-border p-4 text-center">✓ بسيط</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ دليل شامل لأكثر الأخطاء مع حلول جاهزة</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">متابعة حتى أول تواصل حقيقي</strong></td>
                    <td className="border border-border p-4 text-center text-gray-500">✗ غير متوفر</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ توجيه مباشر + مراجعة عملية لكل خطوة</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4"><strong className="text-white">التركيز الكامل على التطبيق</strong></td>
                    <td className="border border-border p-4 text-center">✓ جيد</td>
                    <td className="border border-border p-4 text-center font-semibold text-white">✓ أقصى تركيز + مهام عملية بعد كل درس</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-6 rounded-lg border border-border bg-card mb-8">
              <h3 className="text-lg font-semibold mb-2 text-white">ملاحظة صادقة</h3>
              <p className="text-gray-400">
                الهدف ليس جمع معلومات أكثر، بل تحويل ما تعلمته إلى <strong className="text-white">أول عرض فعلي</strong> ترسله لعميل محتمل. الباقة الأساسية مصممة خصيصًا لهذا الهدف، مع أسئلة، متابعة، وتفاصيل تغطي كل ما تحتاجه للوصول لأول تواصل حقيقي.
              </p>
            </div>

            <BuyPaidBook variant="home" />

            <div className="text-center mt-10">
              <Button asChild size="lg" className="gap-2" variant="outline">
                <Link href="/book">
                  ابدأ القراءة الآن
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
          <p>ومن الصفر تقدر توصل - دليل عملي متكامل</p>
        </div>
      </footer>
    </div>
  );
}
