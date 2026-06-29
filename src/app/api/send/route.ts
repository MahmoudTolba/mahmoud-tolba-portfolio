import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. التحقق الأساسي من وجود البيانات
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    // 2. جلب المفتاح المباشر أو من ملف البيئة لضمان تخطي أي Caching في Next.js
    const apiKey = process.env.RESEND_API_KEY || "re_cyY854Fg_8H5j4rFmLAbB4QQfApJf4GW3";
    const resend = new Resend(apiKey);

    // 3. تنفيذ عملية الإرسال
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mahmoudtolba499@gmail.com",
      subject: `💼 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; background-color: #131313; color: #e5e2e1; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #464554; direction: rtl; text-align: right;">
          <h2 style="color: #c0c1ff; border-bottom: 1px solid #464554; padding-bottom: 10px;">رسالة جديدة من الـ Portfolio</h2>
          <p style="margin: 15px 0;"><strong>الاسم:</strong> ${name}</p>
          <p style="margin: 15px 0; direction: ltr; text-align: right;"><strong>البريد الإلكتروني:</strong> ${email}</p>
          <div style="margin-top: 25px; padding: 20px; background-color: #201f1f; border-right: 4px solid #c0c1ff; border-radius: 6px;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #c0c1ff;">الرسالة:</p>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #e5e2e1;">${message}</p>
          </div>
        </div>
      `,
    });

    // 4. الرد بالنجاح متوافق تماماً مع شرط الـ response.ok && result.success في الفورم
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error: any) {
    // طباعة الخطأ كاملاً في الـ Terminal الخاصة بالـ VS Code لو حصل أي دروب في السيرفر
    console.error("❌ CRITICAL RESEND SERVER ERROR:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}