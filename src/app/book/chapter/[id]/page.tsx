import Link from "next/link";
import { ArrowRight, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { chapterContent } from "@/data/chapters";

const chapters = [
  { id: 1, title: "١. مقدمة: من أين تبدأ فعليًا" },
  { id: 2, title: "٢. العقلية الصحيحة وسلّم الدخل" },
  { id: 3, title: "٣. تجهيز بيئتك وتثبيت OpenCode" },
  { id: 4, title: "٤. جولة في واجهة OpenCode الرسومية" },
  { id: 5, title: "٥. اختيار خدمة واحدة وعميل واحد قابل للدفع" },
  { id: 6, title: "٦. الأدوات، التكاليف، وشروط الاستخدام" },
  { id: 7, title: "٧. كيف تفكر مع الذكاء الاصطناعي وتوجّهه بفعالية" },
  { id: 8, title: "٨. البرومبت العملي السريع وبناء أول موقع" },
  { id: 9, title: "٩. التشغيل المحلي، التعديل، وحل المشكلات الشائعة" },
  { id: 10, title: "١٠. من الموقع المحلي إلى عرض قابل للإرسال عبر الواتساب" },
  { id: 11, title: "١١. البيع، أول عشر تواصلات، التسعير، ونطاق العمل" },
  { id: 12, title: "١٢. دراسة حالة: مشروع مسار التعلم masarlearn.online" },
  { id: 13, title: "١٣. أمان أساسي للمبتدئ" },
  { id: 14, title: "١٤. لماذا تشتري النسخة الكاملة؟" },
];

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapterId = parseInt(id);
  const chapter = chapters.find((c) => c.id === chapterId);
  const content = chapterContent[chapterId as keyof typeof chapterContent];

  if (!chapter) {
    notFound();
  }

  const prevChapter = chapterId > 1 ? chapters.find((c) => c.id === chapterId - 1) : null;
  const nextChapter = chapterId < 14 ? chapters.find((c) => c.id === chapterId + 1) : null;

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-border sticky top-0 bg-black/95 backdrop-blur z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm">
              <Link href="/book">
                <ArrowRight className="h-4 w-4 ml-2" />
                فهرس الكتاب
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-white" />
              <span className="font-semibold hidden md:inline">{chapter.title}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">
              {chapter.title}
            </h1>
          </header>

          <div className="prose prose-invert max-w-none">
            {content ? (
              <div 
                className="space-y-6 text-gray-300 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-white [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ol]:space-y-2 [&>strong]:text-white"
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            ) : (
              <div className="text-center py-20 border border-border rounded-lg">
                <p className="text-gray-500">
                  المحتوى قيد الإضافة...
                </p>
              </div>
            )}
          </div>

          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between gap-4">
              {prevChapter ? (
                <Button asChild variant="outline" className="flex-1 sm:flex-initial">
                  <Link href={`/book/chapter/${prevChapter.id}`}>
                    <ArrowRight className="h-4 w-4 ml-2" />
                    <span className="hidden sm:inline">السابق:</span> {prevChapter.title.split(':')[0]}
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {nextChapter ? (
                <Button asChild className="flex-1 sm:flex-initial">
                  <Link href={`/book/chapter/${nextChapter.id}`}>
                    <span className="hidden sm:inline">التالي:</span> {nextChapter.title.split(':')[0]}
                    <ArrowLeft className="h-4 w-4 mr-2" />
                  </Link>
                </Button>
              ) : (
                <Button asChild variant="outline">
                  <Link href="/book">العودة للفهرس</Link>
                </Button>
              )}
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
