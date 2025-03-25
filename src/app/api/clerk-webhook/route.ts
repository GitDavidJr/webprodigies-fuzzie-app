import { db } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, email_addresses, first_name, image_url } = body?.data;

    const email = email_addresses[0]?.email_address;
    console.log('✅', body);

    await db.user.upsert({
      where: {
        clerkId: id,
      },
      update: {
        email,
        name: first_name,
        profileImage: image_url,
      },
      create: {
        clerkId: id,
        email,
        name: first_name || "",
        profileImage: image_url || "",
      },
    });

    return NextResponse.json(
      { message: "User updated in database successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error updating database:", error);
    return NextResponse.json(
      { error: "Error updating user in database" },
      { status: 500 }
    );
  }
}
