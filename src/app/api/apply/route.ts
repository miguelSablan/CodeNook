import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // Check if the user is authenticated
  if (!session || !session.user?.id) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  const userId = session.user.id;
  const body = await req.json();
  const { projectId } = body;

  if (!projectId) {
    return NextResponse.json(
      { error: "Project ID is required" },
      { status: 400 }
    );
  }

  try {
    // Check if the project exists and if the user is the owner
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { authorId: true },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    if (project.authorId === userId) {
      return NextResponse.json(
        { error: "You cannot apply to your own project" },
        { status: 403 }
      );
    }

    // Check if the user already applied to this project
    const existingApplication = await prisma.application.findFirst({
      where: {
        userId: userId,
        projectId,
      },
    });

    if (existingApplication) {
      return NextResponse.json(
        { error: "Already applied to this project" },
        { status: 409 }
      );
    }

    // Create a new application
    const application = await prisma.application.create({
      data: {
        userId: userId,
        projectId,
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error("Error applying for project:", error);
    return NextResponse.json(
      { error: "Error applying for project" },
      { status: 500 }
    );
  }
}
