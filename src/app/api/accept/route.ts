import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);

  // Check if the user is authenticated
  if (!session || !session.user?.id) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  const body = await req.json();
  const { applicationId, status } = body;

  if (!applicationId || !status) {
    return NextResponse.json(
      { error: "Application ID and status are required" },
      { status: 400 }
    );
  }

  try {
    // Update the application status
    const updatedApplication = await prisma.application.update({
      where: { id: applicationId },
      data: { status },
    });

    return NextResponse.json(updatedApplication, { status: 200 });
  } catch (error) {
    console.error("Error updating application status:", error);
    return NextResponse.json(
      { error: "Error updating application status" },
      { status: 500 }
    );
  }
}
