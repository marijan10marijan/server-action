"use server";
import { revalidatePath } from "next/cache";

export const createUser = async (prevState, formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");
    const text = formData.get("text");

    if (!name || !email || !age || !text) {
      return {
        message: "All fields need to be fullfield.User not created.",
        success: false,
      };
    }

    const request = await fetch(`${process.env.API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        name: name,
        email: email,
        age: Number(age),
        text: text,
      }),
    });

    await request.json();
    revalidatePath("/action");
  } catch (err) {
    return { message: "Server or Network error. Try later.", success: false };
  }
  return { message: "User created. Success.", success: true };
};

export const deleteUser = async (user) => {
  try {
    const request = await fetch(`${process.env.API_URL}/users/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
      }),
    });

    await request.json();
    revalidatePath("/action");
  } catch (err) {
    return "User not deleted.";
  }
};
