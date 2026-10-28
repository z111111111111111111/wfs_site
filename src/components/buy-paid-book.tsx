"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function BuyPaidBook({ variant = "home" }: { variant?: "home" | "book" }) {
  const inputId = variant === "book" ? "visitor-id-book" : "visitor-id-home";

  const handleClick = async () => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    const val = input?.value?.trim() || "";

    try {
      localStorage.setItem("wfs_visitor_id", val);
    } catch (e) {
      // تجاهل أي خطأ
    }

    if (val) {
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: val }),
        });
      } catch (e) {
        // لا نوقف فتح واتساب
      }
    }

    window.open(
      "https://wa.me/213559560590?text=" +
        encodeURIComponent("السلام عليكم، أريد شراء النسخة المدفوعة من كتاب ومن الصفر تقدر توصل"),
      "_blank"
    );
  };

  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <h3 className="text-xl font-semibold mb-4 text-white text-center">
        احصل على النسخة المدفوعة
      </h3>
      <p className="text-gray-400 text-center mb-6">
        أكثر من ١٠٠ صفحة شاملة، جاهزة للتطبيق مباشرةً، مع قوالب، برومبتات، ورسائل جاهزة للتعديل.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
        <input
          id={inputId}
          type="text"
          placeholder="اختياري: يوزر إنستغرام أو رقم الهاتف"
          className="w-full sm:w-80 px-3 py-2 rounded-md bg-black border border-border text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600"
        />
      </div>
      <div className="text-center">
        <Button size="lg" className="gap-2" onClick={handleClick}>
          تواصل لشراء النسخة المدفوعة عبر واتساب
          {variant === "book" ? (
            <ArrowRight className="h-4 w-4 rotate-180" />
          ) : (
            <ArrowLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
