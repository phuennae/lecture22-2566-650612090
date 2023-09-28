import { checkToken } from "@/libs/checkToken";
import { getPrisma } from "@/libs/getPrisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const payload = checkToken();
  if (!payload) {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid token",
      },
      { status: 401 }
    );
  }

  if (payload.role === "STUDENT") {
    return NextResponse.json(
      {
        ok: true,
        message: "Only Admin can access this API route",
      },
      { status: 403 }
    );
  }

  const prisma = getPrisma();
  const userCount = 0;
  const courseCount = 0;
  const studentCount = 0;
  const cpeCount = 0;
  const isneCount = 0;

  const enrollmentCountByStudent = [];

  return NextResponse.json({
    ok: true,
    userCount,
    courseCount,
    studentCount,
    cpeCount,
    isneCount,
    enrollmentCountByStudent,
  });
};
